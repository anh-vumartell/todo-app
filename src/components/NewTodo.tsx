import { useRef, useState } from "react";
import { useTodoCtx } from "../store/todo-context";
import "../styles/components/_newTodo.scss";

// //type definition
// type functionProp = { onAddTodo: (input: string) => void };

const NewTodo: React.FC = () => {
  const { addTodo } = useTodoCtx();
  const [isValid, setIsValid] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  /* const enteredInput = inputRef.current?.value can be written here
  since we know the connection with inputRef hasn't established yet (only when form is submitted)
  "?." operator: if there is null value then set the constant to "null otherwise give me the "value" property
  */
  const submissionHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredInput = inputRef.current!.value; //the ! is used when we are 100% sure that a nullish value has been given to the inputRef

    //input validation
    if (enteredInput.trim().length === 0) {
      setIsValid(false);
      //throw an error
      return;
    }
    addTodo(enteredInput);
    inputRef.current.value = "";
  };
  return (
    <form
      data-testid="form"
      onSubmit={submissionHandler}
      className={`form ${!isValid ? "invalid" : ""}`}
    >
      <div className="form-control">
        <label htmlFor="todo">My todos</label>
        <input
          data-testid="inputTodo"
          type="text"
          name="todo"
          id="todo"
          ref={inputRef}
          placeholder="I need to..."
        />
        {!isValid && <p className="error-text">Please enter a todo</p>}
        <button type="submit">Add Todo</button>
      </div>
    </form>
  );
};
export default NewTodo;
