export function Restricciones({restriccion = [] }){ 
return(
    <div className="py-4">
    <h3 className="font-semibold text-xl">Restricciones :</h3>
    <ul className="list-disc text-[16px] text-gray-500 marker:text-yellow-400 mx-6">
      {restriccion.map((res, index) => (
        <li key={index} className="py-1">
          {res}
        </li>
      ))}
    </ul>
  </div>
)
}
