import React, { useState, useEffect } from "react";
import Persona from "./persona";
import { db } from "../firebase/config";
import { collection, getDocs, addDoc } from "firebase/firestore";

function Listado() {
  const [personas, setPersonas] = useState([]);
  const documentos = [];
  const leerPersonas = async () => {
    try {
      const query = await getDocs(collection(db, "usuarios"));
      query.forEach((doc) => {
        documentos.push({ id: doc.id, ...doc.data() });
      });
      setPersonas(documentos);
    } catch (err) {
      console.log(err);
    }
  };

  const crearPersona = async () => {
    try {
      const docRef = await addDoc(collection(db, "usuarios"), {
        nombre: "bladimir",
        rh: "o+",
      });
      documentos.push({ id: docRef.id, ...docRef.data() });
      setPersonas(documentos);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    leerPersonas();
  }, []);

  return (
    <div>
      {personas.map((persona) => (
        <Persona key={persona.id} persona={persona} />
      ))}
      <button onClick={crearPersona}>crear</button>
    </div>
  );
}

export default Listado;
