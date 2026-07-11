export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { mensaje } = req.body;
  
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: `Eres un asistente amable de Grúas Vallarta's Team en CDMX. Responde brevemente: ${mensaje}` }] }]
    })
  });

  const data = await response.json();
  const respuestaIA = data.candidates[0].content.parts[0].text;
  
  res.status(200).json({ respuesta: respuestaIA });
}
