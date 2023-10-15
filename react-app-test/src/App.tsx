import ExpenseTable from "./assets/components/ExpenseTable";
import React, { useState } from "react";
import Expenseform from "./assets/components/ExpenseForm";
import { FormDataType } from "./assets/components/ExpenseForm/Expenseform";
import ExpenseTableFilter from "./assets/components/ExpenseTableFilter";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Eggs", cost: 0.85, category: "groceries" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const [categories, setCategoriers] = useState([
    "groceries",
    "utility",
    "fun",
  ]);

  const visibleExpenses =
    selectedCategory && categories.includes(selectedCategory)
      ? expenses.filter((expense) => expense.category === selectedCategory)
      : expenses;

  const removeItem = (id: number) =>
    setExpenses(expenses.filter((expense) => expense.id !== id));

  const filterTable = (category: string) => {
    expenses.filter((expense) => expense.category === category);
  };
  return (
    <>
      <Expenseform
        categories={categories}
        onSubmit={(expense) => {
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
        }}
      ></Expenseform>
      <ExpenseTableFilter
        categories={categories}
        onSelectCategory={(category) => setSelectedCategory(category)}
      ></ExpenseTableFilter>
      <ExpenseTable
        expenses={visibleExpenses}
        onDelete={(id) => removeItem(id)}
      ></ExpenseTable>
    </>
  );
};

export default App;
