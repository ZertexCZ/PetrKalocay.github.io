// Simple API route to verify Vercel setup
export default function handler(req, res) {
  res.status(200).json({ 
    message: 'API is working!',
    path: req.url
  });
}
