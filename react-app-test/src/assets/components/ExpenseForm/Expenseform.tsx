import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
// add a Zod schema for data validation
// use react-hook-form to handle submission, referencing
// submit the data update the expenses State, use react-hook-form

const schema = z.object({
  description: z.string(),
  cost: z.coerce
    .number()
    .min(0, { message: "Please provide the cost of the item." }),
  category: z
    .string()
    .refine((data) => ["groceries", "utility", "fun"].includes(data)),
});

export type FormDataType = z.infer<typeof schema>;

interface props {
  onSubmit: (data: FormDataType) => void;
  categories: string[];
}

const Expenseform = ({ onSubmit, categories }: props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(schema),
    defaultValues: { category: "" },
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          id="description"
          className="form-control"
        />
      </div>
      {errors.description && <p>{errors.description.message}</p>}
      <div className="mb-3">
        <label htmlFor="cost" className="form-label">
          Cost
        </label>
        <input
          {...register("cost")}
          type="number"
          id="cost"
          step="any"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        {errors.cost && <p>{errors.cost.message}</p>}
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          id="category"
          className="form-control"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {errors.category && <p>{errors.category.message}</p>}
      <div className="mb-5">
        {" "}
        <button className="btn btn-primary">Submit</button>{" "}
      </div>
    </form>
  );
};

export default Expenseform;
