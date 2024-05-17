"use client";

export const TableTags = async ({ arrayHeaders }) => {

  return (
    <>
      <h2>Tabla para Muestra de Tags</h2>
      <table>
        <thead>
          <tr>
            {arrayHeaders.map((element) => (
              <th>{element} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Juan</td>
            <td>25</td>
            <td>Madrid</td>
          </tr>
          <tr>
            <td>Ana</td>
            <td>30</td>
            <td>Barcelona</td>
          </tr>
          <tr>
            <td>Pedro</td>
            <td>35</td>
            <td>Valencia</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
