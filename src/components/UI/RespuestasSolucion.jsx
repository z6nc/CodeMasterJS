import { InfoCode } from "./InfoCode";
export function RespuestasSolucion({ solucion }) {
  return (
       <section className="min-h-[100px] overflow-hidden  ">
      <div className="flex flex-col gap-y-6">
        {solucion.soluciones.map((soluciones, index) => (
          <div
            key={index}
            id="content-codigo-solucion"
            className="p-3 border-b border-gray-500"
          >
            <div className="flex justify-between items-center text-center">
              <h4 className="font-semibold text-lg">{soluciones.forma}</h4>
              <a
                target="_blank"
                className="px-3 py-1 text-sm font-semibold border border-[#ffe11e] bg-[#f0da4f0c] hover:bg-[#ffe642a6] rounded-md transition-all duration-75 ease-in"
                href={soluciones.link}
              >
                {soluciones.metodo}
              </a>
            </div>
            <p className="text-gray-500 py-3">{soluciones.explicacion}</p>
            {/* Codigo */}
           
            <InfoCode codigo={soluciones.codigo} />
          </div>
        ))}
      </div>
    </section>
  );
}
