import { CreateDocFirebase } from "@/data/firebase/methodsFB.js";

export async function POST(req, res) {
  const body = await req.json();

  // Add In Firebase
  CreateDocFirebase("products", body);

  return new Response(JSON.stringify("Prodcutos Agregado!"), {
    status: 200,
    "Content-Type": "application/json",
  });
}
