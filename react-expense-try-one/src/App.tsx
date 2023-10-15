import ExpenseTable from "./assets/components/expenseTable";
import ExpenseFilter from "./assets/components/ExpenseFilter/ExpenseFilter";
import { useState } from "react";
import ExpenseForm from "./assets/components/expenseForm";
const App = () => {
  const [Expenses, setExpenses] = useState([
    { id: 1, description: "Milk", cost: 1.25, category: "groceries" },
    { id: 2, description: "Bread", cost: 1.0, category: "groceries" },
  ]);

  const categories = ["groceries", "utility", "pleasure"];

  const [SelectedCategory, setSelectedCategory] = useState("");

  const removeItem = (id: number) => {
    setExpenses(Expenses.filter((expense) => expense.id !== id));
  };
  const visibleExpenses =
    SelectedCategory && SelectedCategory !== "All Categories"
      ? Expenses.filter((expense) => expense.category === SelectedCategory)
      : Expenses;

  return (
    <>
      <ExpenseForm categories={categories}></ExpenseForm>
      <ExpenseFilter
        categories={categories}
        onSelectCategory={(category) => setSelectedCategory(category)}
      ></ExpenseFilter>
      <ExpenseTable
        expenses={visibleExpenses}
        onDelete={removeItem}
      ></ExpenseTable>
    </>
  );
};

export default App;
