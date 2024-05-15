import { FormProducts } from "@/app/components/client/formProducts";

export default function AddProduct() {
  return (
    <main>
      <div className="useContainer">
        <h1>Agergar Productos </h1>
        <strong>Sistema de Integracion | Front End Backend</strong>
        <p>
          Intefaz para Agregar Producto desde el Cliente al Front Sin MiddleWare
        </p>
            <FormProducts />
      </div>
    </main>
  );
}
