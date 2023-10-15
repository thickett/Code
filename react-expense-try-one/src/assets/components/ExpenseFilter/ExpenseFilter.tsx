interface Prop {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const expenseFilter = ({ categories, onSelectCategory }: Prop) => {
  return (
    <div className="mb-3">
      <select
        name="Category Select"
        className="form-select"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="All Categories">All Categories</option>
        {categories.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default expenseFilter;
