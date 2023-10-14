import Form from "./assets/components/Form";
import ItemsTable from "./expense-tracker/components/ItemsTable";

function App() {
  const expenses = [
    { id: 1, description: "milk", cost: 2, category: "groceries" },
    { id: 2, description: "bread", cost: 1, category: "groceries" },
    { id: 3, description: "hair spray", cost: 7.5, category: "cosmetic" },
  ];
  return (
    <>
      <Form></Form>
      <ItemsTable
        expenses={expenses}
        onDelete={(id) => console.log("delete", id)}
      ></ItemsTable>
    </>
  );
}

export default App;
