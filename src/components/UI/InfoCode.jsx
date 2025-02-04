export function InfoCode({ codigo }) {
  return (
    <pre className="bg-gray-800 p-4 rounded-lg shadow-md overflow-auto max-w-full whitespace-pre-wrap language-js">
      <code className=" text-white text-sm  ">{codigo}</code>
    </pre>
  );
}
