"use client";
import { useState } from "react";
import { signalPopUpTag } from "@/app/libs/sweet";

export const FormTags = () => {
  const [data, setData] = useState({
    numero: "",
    id: "",
    estatusInicial: "inactivo",
  });

  const [dataDefault, setDataDefault] = useState("");

  const handle__NumeroInnertHtml = (event) => {
    setData({ ...data, numero: `TAG ${event.target.value}` });
  };

  const handle__IdInnertHtml = (event) => {
    setData({ ...data, id: event.target.value });
  };

  const handle__EstatusInnertHtml = (event) => {
    setData({ ...data, estatusInicial: event.target.value });
  };
  const submitForm = async (event) => {
    event.preventDefault();
    console.log(data);
    signalPopUpTag(
      "Creacion de Nuevo Tag",
      "Realmente deseas Integrar este tag a la BD ? ",
      "question",
      data
    );
  };

  const handle__DefaultChangeValue = (event) => {
    event.preventDefault();
    setDataDefault("");
  };

  return (
    <>
      <hr />
      <br />
      <strong>Formulario</strong>
      <form className="formContainer">
        <label htmlFor="">Numero de Tag:</label>
        <input type="number" onChange={handle__NumeroInnertHtml} />
        <label htmlFor="">Id Interno:</label>
        <input type="text" onChange={handle__IdInnertHtml} />
        <label htmlFor="">Estatus Inicial:</label>
        <select onChange={handle__EstatusInnertHtml} defaultValue={"Inactivo"}>
          <option value="inactivo">Inactivo</option>
          <option value="activo">Activo</option>
        </select>
        <div className="buttoner">
          <button onClick={submitForm}>Crear</button>
          <button onClick={handle__DefaultChangeValue}>Limpiar</button>
        </div>
      </form>
    </>
  );
};
