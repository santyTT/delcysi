import React, { useState, useEffect } from "react";
import "./index.css";

const DaysLove = () => {
  // Definir la fecha de inicio
  const startDate = new Date("2024-10-01T00:00:00"); // Cambia esta fecha a la que quieras contar
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Función para actualizar el contador
    const updateCounter = () => {
      const currentTime = new Date();
      const difference = currentTime - startDate; // Diferencia en milisegundos

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    // Actualizar el contador cada segundo
    const interval = setInterval(updateCounter, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className="days-love" id="app">
      <span>
        <h4>
          {timeElapsed.days}, {timeElapsed.hours}, {timeElapsed.minutes},{" "}
          {timeElapsed.seconds}{" "}
        </h4>
      </span>
      <div className="presentacion">
        <h1>!¡ Aqui Tienes El Contador !¡</h1>
      </div>{" "}
      <br />
      <div className="presentacion2">
        <h1>¿Quiere Consultar Dias De Nuestra Relacion?</h1>
      </div>{" "}
      <br />
      <div className="presentacion3">
        <h1>HOLAAAA Delcysi</h1>
      </div>{" "}
      <br />
    </div>
  );
};

export default DaysLove;
