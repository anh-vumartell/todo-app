import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewTodo from "../NewTodo";

describe("New Todo Component", () => {
  test("renders input todo", () => {
    render(<NewTodo />);
    //findByRole query
    const inputElement = screen.findByRole("input");

    //getByTestId query
    // const { getByTestId } = render(<NewTodo />);
    // const input = getByTestId("inputTodo");

    expect(inputElement).toBeTruthy();
  });

  test("renders Todo item when button was clicked", () => {
    render(<NewTodo />);
    //findByRole query

    const button = screen.getByRole("button");
    userEvent.click(button);

    //Assertion
    const renderedTodo = screen.queryAllByRole("listitem");
    expect(renderedTodo).not.toBeNull();
  });
  test("submits form when button was clicked", () => {
    //Arrange

    const submissionHandler = jest.fn((e) => e.preventDefault());
    const { getByTestId } = render(
      <form onSubmit={submissionHandler} data-testid="form">
        <button type="submit">Add todo</button>
      </form>
    );

    fireEvent.submit(getByTestId("form"));

    //Assertion
    expect(submissionHandler).toHaveBeenCalledTimes(1);
  });
});
