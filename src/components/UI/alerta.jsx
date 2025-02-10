export function Alerta() {
  return (
    <div
    className="flex items-center p-4 mb-4 text-sm  rounded-lg bg-yellow-50  text-yellow-400  shadow-md"
      role="alert"
    >
      <svg
        class="shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>

      <div className="inline-flex items-center gap-x-2"> 
        <span className="font-medium">¡ Completaste el problema !</span>
          Si terminaste, dale click al check para marcarlo como resuelto.
      </div>
    </div>
  );
}
