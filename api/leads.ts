import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { leads } from "../shared/schema";
import { insertLeadSchema } from "../shared/schema";
import { desc } from "drizzle-orm";
import { Resend } from 'resend';
import { getThankYouEmailHTML, getInternalNotificationHTML } from './email-templates';

// Initialize database connection
const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY || 'demo_key');

// Email sending functions
async function sendEmails(lead: any) {
  try {
    // Skip if no API key
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'demo_key') {
      console.log('📧 Email service not configured. Skipping emails for:', lead.email);
      return;
    }

    // Send thank you email to lead
    const thankYouPromise = resend.emails.send({
      from: 'Karn Consulting <noreply@karnconsulting.co>',
      to: [lead.email],
      subject: 'Thank You for Your Interest in Karn Consulting',
      html: getThankYouEmailHTML(lead.name, lead.companyName),
    });

    // Send notification to support team
    const notificationPromise = resend.emails.send({
      from: 'Lead Notifications <leads@karnconsulting.co>',
      to: ['support@karnconsulting.co'],
      subject: `New Lead: ${lead.companyName} - ${lead.name}`,
      html: getInternalNotificationHTML(lead),
    });

    // Send both emails in parallel
    await Promise.all([thankYouPromise, notificationPromise]);
    console.log('✅ Emails sent successfully');
  } catch (error) {
    console.error('⚠️ Failed to send emails:', error);
    // Don't throw - we don't want email failures to break the lead capture
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      // Validate the request body
      const leadData = insertLeadSchema.parse(req.body);
      
      // Save to database
      const result = await db.insert(leads).values(leadData).returning();
      const lead = result[0];
      
      // Log the new lead
      console.log("New lead captured:", {
        name: lead.name,
        company: lead.companyName,
        email: lead.email,
        phone: lead.phone,
        createdAt: lead.createdAt
      });
      
      // Send emails asynchronously (don't wait for completion)
      sendEmails(lead);
      
      return res.status(201).json({ 
        success: true, 
        message: "Lead captured successfully",
        leadId: lead.id 
      });
    } catch (error) {
      console.error("Error saving lead:", error);
      return res.status(500).json({ 
        success: false, 
        error: "Failed to save lead" 
      });
    }
  }

  if (req.method === 'GET') {
    try {
      const allLeads = await db.select().from(leads).orderBy(desc(leads.createdAt));
      return res.json({ 
        success: true, 
        leads: allLeads,
        count: allLeads.length 
      });
    } catch (error) {
      console.error("Error fetching leads:", error);
      return res.status(500).json({ 
        success: false, 
        error: "Failed to fetch leads" 
      });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}