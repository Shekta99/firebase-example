import React from "react";

function Persona({ persona }) {
  const { nombre, rh } = persona;
  return (
    <div>
      <p>
        {" "}
        {nombre} : {rh}{" "}
      </p>
    </div>
  );
}

export default Persona;
