interface props {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const ExpenseTableFilter = ({ categories, onSelectCategory }: props) => {
  return (
    <div className="mb-3">
      <select
        className="form-select"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option key="all categories" value="all categories">
          All Categories
        </option>
        {categories.map((item) => (
          <option key={item} value={item}>
            {" "}
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseTableFilter;
