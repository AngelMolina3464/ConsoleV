"use client";

export const FormProducts = () => {
  return (
    <>
      <hr />
      <br />
      <strong>Formulario</strong>
      <form className="formContainer">
        <label htmlFor="">Nombre:</label>
        <input type="text" />
        <label htmlFor="">Clase</label>
        <input type="text" />
        <div>
          <button>Guardar</button>
          <button>Limpiar</button>
        </div>
      </form>
    </>
  );
};
