
import { GetDocsFirebase } from "@/data/firebase/methodsFB";

const Data = await GetDocsFirebase("entidades");

export async function GET(request) {
  return new Response(JSON.stringify(Data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
