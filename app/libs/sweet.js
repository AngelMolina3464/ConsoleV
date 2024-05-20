import Swal from "sweetalert2";

// Productos Por lo General 
export const signalPopUp = (header, firstMensaje, firstIcon, setData) => {
  Swal.fire({
    position: "top-end",
    title: header,
    text: firstMensaje,
    icon: firstIcon,
    background: " rgba(248, 217, 159,0.950)",
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

      console.log("Producto Creado");
      Swal.fire({
        position: "top-end",
        background: " rgba(248, 217, 159,0.950)",
        toast: true,
        title: "Fue Creado!",
        text: "Se agrego a la Base de Datos con Exito ",
        icon: "success",
      });
    }
  });
};

// Tags 
export const signalPopUpTag = (header, firstMensaje, firstIcon, setData) => {
  Swal.fire({
    position: "top-end",
    title: header,
    text: firstMensaje,
    icon: firstIcon,
    background: " rgba(248, 217, 159,0.950)",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si Crearlo!",
    toast: true,
  }).then(async (result) => {
    if (result.isConfirmed) {
      
      // Aqui Hace el Envio a la API
      const response = await fetch("../api/tags/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(setData),
      });

      console.log("Producto Creado");
      Swal.fire({
        position: "top-end",
        background: " rgba(248, 217, 159,0.950)",
        toast: true,
        title: "Fue Creado!",
        text: "Se agrego a la Base de Datos con Exito ",
        icon: "success",
      });
    }
  });
};

export const signalPopUpTagRefresh = (header, firstMensaje, firstIcon, setData) => {
  Swal.fire({
    position: "top-end",
    title: header,
    text: firstMensaje,
    icon: firstIcon,
    background: " rgba(248, 217, 159,0.950)",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si Crearlo!",
    toast: true,
  }).then(async (result) => {
    if (result.isConfirmed) {
      
      // Aqui Hace el Envio a la API
      const response = await fetch("../api/tags/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(setData),
      });
      Swal.fire({
        position: "top-end",
        background: " rgba(248, 217, 159,0.950)",
        toast: true,
        title: "Fue Creado!",
        text: "Se agrego a la Base de Datos con Exito ",
        icon: "success",
      });
    }
  });
};
