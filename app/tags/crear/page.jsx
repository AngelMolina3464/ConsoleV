import { FormTags } from "@/app/components/client/formTags";

export default function AddTags() {
  return (
    <main>
      <div className="useContainer">
        <h1>Agregar Tag </h1>
        <strong>Sistema de Integracion | Front End Backend</strong>
        <p>
          Intefaz para Agregar Producto desde el Cliente al Front Sin MiddleWare
        </p>
        <FormTags />
      </div>
    </main>
  );
}
