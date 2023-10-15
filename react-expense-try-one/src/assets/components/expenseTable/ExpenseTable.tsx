interface Formtype {
  id: number;
  description: string;
  cost: number;
  category: string;
}

interface prop {
  expenses: Formtype[];
  onDelete: (id: number) => void;
}

const ExpenseTable = ({ expenses, onDelete }: prop) => {
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
            <th>{expense.description}</th>
            <th>£{expense.cost.toFixed(2)}</th>
            <th>{expense.category}</th>
            <th>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </th>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <th>
            £
            {expenses
              .reduce((acc, expense) => expense.cost + acc, 0)
              .toFixed(2)}
          </th>
          <th></th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseTable;
