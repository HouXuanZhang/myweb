export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "No message provided" });
  }

  const apiKey = process.env.GOOGLE_API_KEY; // 从环境变量获取 API 密钥
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta2/models/gemini-pro:generateText?key=${apiKey}`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: { text: message },
        maxTokens: 100,
      }),
    });

    const data = await response.json();
    return res.status(200).json({ reply: data.candidates[0]?.output || "No response from API" });
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ error: "Failed to fetch response" });
  }
}
