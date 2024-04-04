import "./db.js";
import app from "./server.js";

const PORT = process.env.NODE_ENV === 'production' ? 8080 : 4000;

const handleListening = () => {
  console.log(`✅ Server listening on port https://localhost:${PORT} 🚀`);
};

app.listen(PORT, handleListening);
