import { useEffect, useState } from "react";
import { IconArrow } from "../../assets/IconArrow.jsx";
import { ObjetoPractica } from "../../data/ObjetoPractica.js";
import { Alerta } from "../UI/alerta.jsx";
import { ExerciseHeader } from "../UI/ExerciseHeader.jsx";
import { InfoCode } from "../UI/InfoCode.jsx";
import { RespuestasSolucion } from "../UI/RespuestasSolucion.jsx";
import { Restricciones } from "../UI/Restricciones.jsx";
import { Loading } from "../UI/Loading.jsx";

export function ExerciseCard() {
  const [ejercicio, setEjercicio] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de cargando
  const [activeIndex, setActiveIndex] = useState(null);
  
  const dificultad = {
    Facil: "border-green-500 ",
    Intermedio: "border-orange-400",
    Dificil: "border-red-400",
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoria = urlParams.get("categoria");

    if (!categoria) {
      console.error("Categoria no encontrada");
      setLoading(false); // Cambiar el estado de cargando a false
      return;
    }

    try {
      const ejercicios = ObjetoPractica.filter(
        (ejercicio) => ejercicio.categoria === categoria
      );
      setEjercicio(ejercicios);
      setLoading(false);
    } catch (error) {
      console.error("Error al filtrar ejercicios:", error);
      setLoading(false);
    }
  }, []);

  const togglePregunta = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null); 
    } else {
      setActiveIndex(index); 
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (ejercicio.length === 0) {
    return <p>No se encontraron ejercicios para esta categoría.</p>; 
  }

  

  return (
    <section className="min-h-screen transition-opacity duration-300 ease-in-out">
      <Alerta />
      {ejercicio.map((solucion, index) => (
        <article
          key={solucion.id}
          className={`flex flex-col gap-3 py-7 px-7 mb-8  bg-white  rounded shadow-sm opacity-100 border-l-4  ${
            dificultad[solucion.dificultad]
          }`}
        >
          <ExerciseHeader ListaSolucion={solucion} indice={solucion.id}/>
          <Restricciones restriccion={solucion.restricciones} />
          <InfoCode codigo={solucion.CasosPrueba} />

          {/* Botón de respuesta */}
          <button
            onClick={() => togglePregunta(index)}
            className="flex items-center justify-between px-4 w-full py-2 rounded-xl cursor-pointer bg-[#ffe642a6] hover:bg-[#ffe642]"
            aria-label="Abrir soluciones "
          >
            <p className="text-black font-bold">Solución</p>
            <span
              className={`transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
            >
              <IconArrow />
            </span>
          </button>

          {/* Mostrar la solución si está activa */}
          {activeIndex === index && <RespuestasSolucion solucion={solucion}  />}
        </article>
      ))}
    </section>
  );
}
