import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  description: z.string(),
  cost: z.coerce.number(),
  category: z.string(),
});

type FormType = z.infer<typeof schema>;

interface prop {
  categories: string[];
}

const ExpenseForm = ({ categories }: prop) => {
  return (
    <form action="">
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="Cost" className="form-label">
          Cost
        </label>
        <input id="Cost" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="Category" className="form-label">
          Category
        </label>
        <select id="Category" className="form-control">
          {categories.map((category) => (
            <option id={category}>{category}</option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default ExpenseForm;
