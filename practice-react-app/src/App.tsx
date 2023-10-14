import { useState } from "react";
import Form from "./assets/components/Form";
import ItemsTable from "./assets/ItemsTable";

function App() {
  const [newTableItems, setNewTableItems] = useState("");
  return (
    <>
      <Form onSubmit={() => setNewTableItems("")}></Form>
      <ItemsTable></ItemsTable>;<p>{newTableItems}</p>
    </>
  );
}

export default App;
