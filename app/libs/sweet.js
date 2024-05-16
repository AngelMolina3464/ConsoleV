import Swal from "sweetalert2";

export const signalPopUp = (header, firstMensaje, firstIcon, setData) => {
  Swal.fire({
    position: "top-end",
    title: header,
    text: firstMensaje,
    icon: firstIcon,
    background: "rgba(255, 255, 255, 0.95)",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si Crearlo!",
    toast: true,
  }).then(async (result) => {
    if (result.isConfirmed) {
      // Aqui Hace el Envio a la API
      const response = await fetch("../api/products/productAdd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(setData),
      });

      console.log("Producto Creado")
      Swal.fire({
        position: "top-end",
        background: "rgba(255, 255, 255, 0.90)",
        toast: true,
        title: "Fue Creado!",
        text: "Se agrego a la Base de Datos con Exito ",
        icon: "success",
      });
    }
  });
};
