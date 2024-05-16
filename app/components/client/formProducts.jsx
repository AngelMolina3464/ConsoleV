"use client";
import { useState } from "react";
import { signalPopUp } from "@/app/libs/sweet";

export const FormProducts = () => {
  const [data, setData] = useState({
    nombre: "",
    clase: "",
  });

  const { send, setSend } = useState(0);

  const handle__NameInnertHtml = (event) => {
    setData({ ...data, nombre: event.target.value });
  };

  const handle__ClassInnertHtml = (event) => {
    setData({ ...data, clase: event.target.value });
  };

  const submitForm = async (event) => {
    event.preventDefault();

    //signalPopUp("Creacion de Producto", "Deseas Crearlo ? ", "question", setSend);

    const response = await fetch("api/products/productAdd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <>
      <hr />
      <br />
      <strong>Formulario</strong>
      <form className="formContainer">
        <label htmlFor="">Nombre:</label>
        <input type="text" onChange={handle__NameInnertHtml} />
        <label htmlFor="">Clase</label>
        <input type="text" onChange={handle__ClassInnertHtml} />
        <div>
          <button onClick={submitForm}>Crear</button>
          <button>Limpiar</button>
        </div>
      </form>
    </>
  );
};
