import { GetDocsFirebase } from "@/data/firebase/methodsFB.js";

const dataOnGet = await GetDocsFirebase("tags");

export async function GET(request) {
  return new Response(JSON.stringify(dataOnGet), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
