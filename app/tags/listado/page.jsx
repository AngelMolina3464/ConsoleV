import { TableTags } from "@/app/components/client/tableTags";

const dataOnGet = await GetDocsFirebase("products");

export async function GET(request) {
  return new Response(JSON.stringify(dataOnGet), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}


console.log(response);

export default function AddTags() {
  return (
    <div className="useContainer">
      <h1>Lista de Tags </h1>
      <strong>Sistema de Integracion | Front End Backend</strong>
      <TableTags arrayHeaders={["Nombre", "Edad", "Ciudad"]} />
    </div>
  );
}
