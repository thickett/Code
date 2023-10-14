import React from "react";

interface expenseType {
  id: number;
  description: string;
  cost: number;
  category: string;
}

interface Prop {
  expenses: expenseType[];
  onDelete: (id: number) => void;
}

const ExpenseTable = ({ expenses, onDelete }: Prop) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Cost</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr>
            <td>{expense.description}</td>
            <td>{expense.cost}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            {expenses
              .reduce((acc, expense) => expense.cost + acc, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseTable;
