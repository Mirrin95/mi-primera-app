import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [data, setData] = useState(["tito"]);
  //const [isLoading, setIsLoading] = useState(false);
  //  const handleClick = () => setIsLoading(!isLoading);
  //const list: string[] = ["tito"];
  //const handleSelect = (elemento: string) => {
  //console.log("imprimiendo", elemento);
  //};
  //const contenido = list.length ? (
  //<List data={list} onSelect={handleSelect} />
  //) : (
  //  "sin nada para mostrar"
  //);
  //return (
  //<Card>
  //<CardBody title="Hola mundo" text="textoooo" />
  // {contenido}
  // <Button isLoading={isLoading} onClick={handleClick}>
  //  Hola Mundo
  //</Button>
  // </Card>
  //);
  const addMinion = () => setData([...data, "Minion"]);
  const deleteMinion = () => setData(data.slice(0, -1));

  return (
    <Card>
      <Button isLoading={true} onClick={addMinion}>
        Agregar
      </Button>
      <Button isLoading={false} onClick={deleteMinion}>
        Eliminar
      </Button>
      <List data={data}></List>
    </Card>
  );
}
export default App;
