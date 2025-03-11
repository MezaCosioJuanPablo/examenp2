import StudentTable from "app/components/StudenTable";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl text-center mt-8">
        ¿Crees poder lograrlo? Si no confías en ti, ¿quién lo hará?
      </h1>
      <h2 className="text-2xl text-center mt-4">
        Aquí debe de verse tu tabla, ¿cuál tabla? Lee el archivo README
      </h2>

      {/* Renderizamos el componente de la tabla */}
      <StudentTable />
    </>
  );
}
