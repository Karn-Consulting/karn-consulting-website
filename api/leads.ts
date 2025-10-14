import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { leads } from "../shared/schema";
import { insertLeadSchema } from "../shared/schema";
import { desc } from "drizzle-orm";

// Initialize database connection
const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

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