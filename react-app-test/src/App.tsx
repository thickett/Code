import React, { useState } from "react";
import ExpenseTable from "./assets/components/ExpenseTable";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", cost: 2.3, category: "Groceries" },
    { id: 2, description: "bread", cost: 1.3, category: "Groceries" },
    { id: 3, description: "eggs", cost: 3.3, category: "Groceries" },
    { id: 4, description: "chicken", cost: 10, category: "Groceries" },
  ]);

  return (
    <ExpenseTable
      expenses={expenses}
      onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
    ></ExpenseTable>
  );
};

export default App;
