import { DataSim } from "@/data/dataSimulation.js";

export async function GET(request) {
  return new Response(JSON.stringify(DataSim), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
