import { TableTags } from "@/app/components/client/tableTags";

export default function AddTags() {

  return (
    <div className="useContainer">
      <h1>Lista de Tags </h1>
      <strong>Sistema de Integracion | Front End Backend</strong>
      <TableTags arrayHeaders={["Id", "Numero", "Estatus Actual", "Comandos"]} />
    </div>
  );
}
