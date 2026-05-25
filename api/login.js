export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  const { username, password } = req.body;

  if (username === "farrel" && password === "12345") {
    return res.status(200).json({
      success: true,
      message: "Login berhasil 🔥"
    });
  }

  return res.status(401).json({
    success: false,
    message: "Username/password salah"
  });
}