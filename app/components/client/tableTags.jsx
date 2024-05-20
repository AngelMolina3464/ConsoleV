"use client";

import { useEffect, useState } from "react";

export const TableTags = ({ arrayHeaders }) => {
  const [dataUse, setDataUse] = useState([]);
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(0);

  const capitaliceString = (strLabel) => {
    return strLabel
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleRelooad = () => {
    if (reload == 0) {
      setReload(1);
    } else {
      setReload(0);
    }
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/tags", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la red");
        }
        return response.json();
      })
      .then((data) => {
        setDataUse(data);
      })
      .catch((error) => {
        setError(error);
        console.error("Error:", error);
      });
  }, [reload]);

  return (
    <>
      <h2>Tabla para Muestra de Tags</h2>
      <div className="buttoner">
        <button onClick={handleRelooad}>Recargar</button>
      </div>
      <table>
        <thead>
          <tr>
            {arrayHeaders.map((element, index) => (
              <th key={index}>{element} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataUse.map((item) => (
            <tr key={item.idAuto}>
              <td>{item.id}</td>
              <td>{item.numero}</td>
              <td>{capitaliceString(item.estatusInicial)}</td>
              <td>
                <div>
                  <a href={`/listado/tags/info/${item.idAuto}`} target="_blank">
                    Ver
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
