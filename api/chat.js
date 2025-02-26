export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "No message provided" });
    }
  
    const apiKey = process.env.GOOGLE_API_KEY; // 从环境变量获取 API 密钥
    const apiUrl = `https://api.example.com/chatbot?api_key=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: message }),
      });
  
      const data = await response.json();
      return res.status(200).json({ reply: data.response });
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch response" });
    }
  }
  