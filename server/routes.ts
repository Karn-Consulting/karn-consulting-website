import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Lead capture routes
  app.post("/api/leads", async (req, res) => {
    try {
      // Validate the request body
      const leadData = insertLeadSchema.parse(req.body);
      
      // Save to database
      const lead = await storage.createLead(leadData);
      
      // Log the new lead for visibility
      console.log("New lead captured:", {
        name: lead.name,
        company: lead.companyName,
        email: lead.email,
        phone: lead.phone,
        createdAt: lead.createdAt
      });
      
      res.status(201).json({ 
        success: true, 
        message: "Lead captured successfully",
        leadId: lead.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          error: "Invalid data", 
          details: error.errors 
        });
      } else {
        console.error("Error saving lead:", error);
        res.status(500).json({ 
          success: false, 
          error: "Failed to save lead" 
        });
      }
    }
  });

  // Get all leads (admin endpoint - you should add authentication later)
  app.get("/api/leads", async (req, res) => {
    try {
      const allLeads = await storage.getLeads();
      res.json({ 
        success: true, 
        leads: allLeads,
        count: allLeads.length 
      });
    } catch (error) {
      console.error("Error fetching leads:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch leads" 
      });
    }
  });

  // Get single lead by ID
  app.get("/api/leads/:id", async (req, res) => {
    try {
      const lead = await storage.getLead(req.params.id);
      if (!lead) {
        res.status(404).json({ 
          success: false, 
          error: "Lead not found" 
        });
        return;
      }
      res.json({ 
        success: true, 
        lead 
      });
    } catch (error) {
      console.error("Error fetching lead:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch lead" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
