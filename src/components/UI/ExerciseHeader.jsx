const dificultad = {
  Facil: "bg-gradient-to-t to-green-500 to-40%  from-transparent",
  Intermedio: "bg-gradient-to-t to-orange-400 to-40%  from-transparent",
  Dificil: "bg-gradient-to-t to-red-500 to-40%  from-transparent",
};
export function ExerciseHeader({ ListaSolucion }) {
  return (
    <>
      <div className=" w-full flex justify-between items-center mb-1">
        <h2 className="text-2xl font-bold">
          {ListaSolucion.NumeroEjercicio} : {ListaSolucion.nombre}
        </h2>
        <span
          className={`${
            dificultad[ListaSolucion.dificultad]
          } absolute w-10 h-16 right-0 top-0 z-30`}
        />
      </div>
      <p className="text-[17px] py-1 text-gray-500">
        {ListaSolucion.descripcion}
      </p>
    </>
  );
}
