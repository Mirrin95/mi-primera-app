function Titulo() {
  const nombre = "Carlos";
  if (nombre) {
    return <h1>Hola {nombre}</h1>;
  }
  return <p> Hola mundo</p>;
}

export default Titulo;
