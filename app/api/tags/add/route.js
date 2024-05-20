import { CreateDocFirebase } from "@/data/firebase/methodsFB.js";

export async function POST(req, res) {
  const body = await req.json();

  // Add In Firebase
  CreateDocFirebase("tags", body);

  return new Response(JSON.stringify("Producto Agregado!"), {
    status: 200,
    "Content-Type": "application/json",
  });
}
