import { Resend } from 'resend';
import type { Lead } from '../shared/schema';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY || 'demo_key');

// Email templates
const getThankYouEmailHTML = (leadName: string, companyName: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f3f4f6;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: white;
    }
    .header {
      background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
      color: white;
      padding: 40px 30px;
      text-align: center;
    }
    .content {
      padding: 40px 30px;
      color: #374151;
      line-height: 1.6;
    }
    .highlight-box {
      background-color: #eff6ff;
      border-left: 4px solid #3b82f6;
      padding: 20px;
      margin: 30px 0;
      border-radius: 4px;
    }
    .footer {
      background-color: #f9fafb;
      padding: 30px;
      text-align: center;
      color: #6b7280;
      font-size: 14px;
    }
    h1 {
      margin: 0;
      font-size: 28px;
    }
    h2 {
      color: #1f2937;
      font-size: 20px;
      margin-top: 30px;
    }
    .button {
      display: inline-block;
      background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
      color: white;
      padding: 12px 30px;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 600;
      margin-top: 20px;
    }
    .social-links {
      margin-top: 20px;
    }
    .social-links a {
      color: #3b82f6;
      text-decoration: none;
      margin: 0 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Karn Consulting</h1>
      <p style="margin-top: 10px; opacity: 0.9;">Self-Governing Intelligence Solutions</p>
    </div>
    
    <div class="content">
      <p>Dear ${leadName},</p>
      
      <p>Thank you for your interest in Karn Consulting's AI transformation services. We've received your inquiry from <strong>${companyName}</strong> and are excited about the opportunity to help transform your business with our Self-Governing Intelligence Solutions.</p>
      
      <div class="highlight-box">
        <h3 style="margin-top: 0; color: #1f2937;">What happens next?</h3>
        <ul>
          <li>Our AI experts will review your specific requirements</li>
          <li>We'll analyze how our solutions can best serve your needs</li>
          <li>A specialist will reach out within 24 hours with tailored recommendations</li>
        </ul>
      </div>
      
      <h2>Meanwhile, explore our capabilities:</h2>
      <ul>
        <li><strong>400+ AI Models</strong> deployed across various industries</li>
        <li><strong>10M+ Data Points</strong> processed daily</li>
        <li><strong>Custom Solutions</strong> tailored to your specific needs</li>
      </ul>
      
      <p>To help us better understand your requirements, please feel free to reply to this email with:</p>
      <ul>
        <li>Your current AI/ML challenges</li>
        <li>Specific use cases you're looking to implement</li>
        <li>Timeline and budget considerations</li>
        <li>Any technical specifications or integration requirements</li>
      </ul>
      
      <p style="margin-top: 30px;">We look forward to partnering with you on your AI transformation journey.</p>
      
      <p>Best regards,<br>
      <strong>Prateek Karn</strong><br>
      Founder & CEO<br>
      Karn Consulting</p>
    </div>
    
    <div class="footer">
      <p><strong>Karn Consulting</strong><br>
      A division of Karn Corporation<br>
      Email: support@karnconsulting.co | Phone: +91-7576956682</p>
      
      <div class="social-links">
        <a href="https://linkedin.com/company/karnconsulting">LinkedIn</a>
      </div>
      
      <p style="margin-top: 20px; font-size: 12px; color: #9ca3af;">
        This email was sent to you because you submitted an inquiry on our website.<br>
        © 2025 Karn Corporation. All rights reserved. | GST: 03CLWPK4491C1ZX
      </p>
    </div>
  </div>
</body>
</html>
`;

const getInternalNotificationHTML = (lead: Lead) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 20px;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background: #f9f9f9;
    }
    h2 {
      color: #2563eb;
      border-bottom: 2px solid #e5e7eb;
      padding-bottom: 10px;
    }
    .field {
      margin: 15px 0;
      padding: 10px;
      background: white;
      border-radius: 4px;
    }
    .label {
      font-weight: bold;
      color: #6b7280;
      font-size: 12px;
      text-transform: uppercase;
    }
    .value {
      color: #1f2937;
      margin-top: 5px;
      font-size: 16px;
    }
    .timestamp {
      color: #6b7280;
      font-size: 14px;
      margin-top: 20px;
      text-align: right;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>🆕 New Lead Captured</h2>
    
    <div class="field">
      <div class="label">Name</div>
      <div class="value">${lead.name}</div>
    </div>
    
    <div class="field">
      <div class="label">Company</div>
      <div class="value">${lead.companyName}</div>
    </div>
    
    <div class="field">
      <div class="label">Email</div>
      <div class="value"><a href="mailto:${lead.email}">${lead.email}</a></div>
    </div>
    
    <div class="field">
      <div class="label">Phone</div>
      <div class="value"><a href="tel:${lead.phone}">${lead.phone}</a></div>
    </div>
    
    <div class="timestamp">
      Submitted at: ${new Date().toLocaleString('en-IN', { 
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'short'
      })}
    </div>
  </div>
</body>
</html>
`;

// Email sending functions
export async function sendThankYouEmail(lead: Lead): Promise<boolean> {
  try {
    // Skip if no API key (development mode)
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'demo_key') {
      console.log('📧 Email service not configured. Skipping email to:', lead.email);
      console.log('To enable emails, set RESEND_API_KEY environment variable');
      return true; // Return true to not break the flow
    }

    const { data, error } = await resend.emails.send({
      from: 'Karn Consulting <noreply@karnconsulting.co>',
      to: [lead.email],
      subject: 'Thank You for Your Interest in Karn Consulting',
      html: getThankYouEmailHTML(lead.name, lead.companyName),
    });

    if (error) {
      console.error('Failed to send thank you email:', error);
      return false;
    }

    console.log('✅ Thank you email sent successfully to:', lead.email);
    return true;
  } catch (error) {
    console.error('Error sending thank you email:', error);
    return false;
  }
}

export async function sendInternalNotification(lead: Lead): Promise<boolean> {
  try {
    // Skip if no API key
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'demo_key') {
      console.log('📧 Email service not configured. Skipping internal notification');
      return true;
    }

    const { data, error } = await resend.emails.send({
      from: 'Lead Notifications <leads@karnconsulting.co>',
      to: ['support@karnconsulting.co'],
      subject: `New Lead: ${lead.companyName} - ${lead.name}`,
      html: getInternalNotificationHTML(lead),
    });

    if (error) {
      console.error('Failed to send internal notification:', error);
      return false;
    }

    console.log('✅ Internal notification sent to support team');
    return true;
  } catch (error) {
    console.error('Error sending internal notification:', error);
    return false;
  }
}

export async function sendLeadEmails(lead: Lead): Promise<void> {
  // Send both emails in parallel
  const [thankYouResult, notificationResult] = await Promise.all([
    sendThankYouEmail(lead),
    sendInternalNotification(lead)
  ]);

  if (!thankYouResult) {
    console.warn('⚠️ Failed to send thank you email to lead');
  }
  
  if (!notificationResult) {
    console.warn('⚠️ Failed to send internal notification');
  }
}