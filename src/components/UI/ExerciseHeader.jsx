import { IconCheck } from "../../assets/IconCheck";
import { useState, useEffect } from "react";
import Confetti from "canvas-confetti"

export function ExerciseHeader({ ListaSolucion, indice }) {
  const [isCorrect, setIsCorrect] = useState(false);

  // Recuperar el estado del ejercicio específico desde localStorage
  useEffect(() => {
    const storedData = localStorage.getItem("exerciseStates");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setIsCorrect(parsedData[indice] || false); // Si no existe, será false por defecto
    }
  }, [indice]);

  // Función para alternar estado y guardarlo en localStorage
  const toggleValue = () => {
    setIsCorrect(prev => {
      const newValue = !prev;
      const storedData = localStorage.getItem("exerciseStates");
      const parsedData = storedData ? JSON.parse(storedData) : {};
      
      // Actualizar solo el índice correspondiente
      parsedData[indice] = newValue;
      localStorage.setItem("exerciseStates", JSON.stringify(parsedData));
      if(newValue){
      Confetti(); // Lanzar confetti
      }
      return newValue;
    });
  };

  return (
    <>
      <div className="w-full flex justify-between items-center mb-1">
        <h2 className="text-2xl font-bold">
          {ListaSolucion.NumeroEjercicio} : {ListaSolucion.nombre}
        </h2>
        <button onClick={toggleValue}>
          <IconCheck estiloIcon={`size-8 hover:scale-110 cursor-pointer ${isCorrect ? "text-green-600" : ""}`} />
        </button>
      
      </div>

      <p className="text-[17px] py-1 text-gray-500">
        {ListaSolucion.descripcion}
      </p>
    </>
  );
}
