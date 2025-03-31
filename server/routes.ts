import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Add a simple API route for contact form (could be expanded with email functionality in the future)
  app.post('/api/contact', (req, res) => {
    // Validate that required fields are present
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    
    // In a production environment, this would likely integrate with an email service
    // For now, just return a success response
    return res.status(200).json({ message: "Message received!" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
