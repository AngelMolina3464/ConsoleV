import Swal from "sweetalert2";

export const signalPopUp = (header, firstMensaje, firstIcon, consolePlot) => {
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
  }).then((result) => {
    if (result.isConfirmed) {
      console.log(consolePlot);
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
