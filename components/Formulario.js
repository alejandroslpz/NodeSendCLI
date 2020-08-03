import React, { useState, useContext } from "react";
import appContext from "../context/app/appContext";

const Formulario = () => {
  // Context app

  const AppContext = useContext(appContext);
  const { agregarPassword, agregarDescargas } = AppContext;
  const [tienepassword, setTienePassword] = useState(false);

  return (
    <form className="w-full mt-20">
      <div>
        <label className="text-lg text-gray-800">Eliminar despues de:</label>
        <select
          className="appeareance-none w-full mt-2 bg-white border border-gray-400 text-black py-3 px-4 pr-8 rounded leading-none focus:outline-none focus:border-gray-500"
          onChange={(e) => agregarDescargas(parseInt(e.target.value))}
        >
          <option value="1" value="" selected disabled>
            -- Seleccione --
          </option>
          <option value="1">1 Descarga</option>
          <option value="5">5 Descargas</option>
          <option value="10">10 Descargas</option>
          <option value="20">20 Descargas</option>
        </select>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <label className="text-lg text-gray-800 mr-2">
            Establecer contraseña
          </label>
          <input
            type="checkbox"
            onChange={() => setTienePassword(!tienepassword)}
          />
        </div>
        {tienepassword ? (
          <input
            type="password"
            className="appearence-none w-full mt-2 bg-white border border-gray-400 text-black py-3 px-4 pr-8 rounded leading-none focus:outline-none focus:border-gray-500"
            onChange={(e) => agregarPassword(e.target.value)}
          />
        ) : null}
      </div>
    </form>
  );
};

export default Formulario;
