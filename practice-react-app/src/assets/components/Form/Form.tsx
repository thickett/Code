import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import React, { FormEvent, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

// define a schema using z.object.
const schema = z.object({
  description: z.string().min(1, { message: "You must supply a description." }),
  Price: z.coerce.number().min(0, { message: "The minimum Price is £0." }),
  Category: z
    .string()
    .refine(
      (data) => ["Grocery", "Utilities", "Entertainment"].includes(data),
      {
        message: "Select a valid category",
      }
    ),
});

//create a type using the above schema
export type FormDataType = z.infer<typeof schema>;

// create our Formhook from the react-hook-form library
const Form = () => {
  const {
    register /*This is how we reference inputs and know what to log, this is spread in inputs and assinged a name from the schema */,
    handleSubmit /*This handles submit event and is to be placed in the form element along with an arrow function to say what to do with the data*/,
    formState: {
      errors,
      isValid,
    } /*errors is an object for validation which Zod hhandles, isValid can be used to check if a form is valid for submission or not.*/,
  } = useForm<FormDataType>({
    resolver: zodResolver(schema),
    defaultValues: { Category: "" },
  }); /*<FormDataType tells us the type of the form, the resolver tells uus the contents of the schema to be used*/

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register(
            "description"
          )} /*This is hhow you tel zod that an input should act as a ref for an element in the schema*/
          id="description"
          type="text"
          className="form-control"
        />
      </div>
      {errors.description && (
        <p className="text-danger">
          {errors.description.message}
        </p> /*This is how you access and make use of the errors object from formState */
      )}
      <div className="mb-3">
        <label htmlFor="Price" className="form-label">
          Price
        </label>
        <input
          {...register("Price")}
          id="Price"
          type="number"
          step="any" /*by default type=number only accepts ints. use step="any* to allow any number.*/
          className="form-control"
        />
      </div>
      {errors.Price && <p className="text-danger">{errors.Price.message}</p>}
      <div className="mb-3">
        <label htmlFor="Category" className="form-label">
          Category
        </label>
        <select
          {...register("Category")}
          id="Category"
          className="form-control"
        >
          <option value="Grocery">Grocery</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
      {errors.Category && (
        <p className="text-danger">{errors.Category.message}</p>
      )}
      <button disabled={!isValid} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
