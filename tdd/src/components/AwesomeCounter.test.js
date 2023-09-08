import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import AwesomeCounter from "./AwesomeCounter";

// 1 in order to fail the test -> throw new Error()
test("it should have the correct initial value when set to 7", () => {
    render(<AwesomeCounter initialValue={7} />)
    const count = screen.queryByText(7);
    expect(count).toBeVisable();
});
// 2
test("it should have a defaults initial value of 0", () => {
    render(<AwesomeCounter />)
    const count = screen.queryByText(0);
    expect(count).toBeVisable();
});
// 3
test("it should inrease the value correctly when add is clicked once", () => {
    render(<AwesomeCounter initialValue={1} />);
    const addButton = screen.getByText("Add");
    userEvent.click(addButton);
    const count = screen.queryByText(2);
    expect(count).toBeVisable();

});

// 4 what if clecked twice
test("it should inrease the value correctly when add is clicked twice", () => {
    render(<AwesomeCounter initialValue={1} />);
    const addButton = screen.getByText("Add");
    userEvent.click(addButton);
    userEvent.click(addButton);
    const count = screen.queryByText(3);
    expect(count).toBeVisable();
});

// 5 Identical test for remove
test("it should decrease the value correctly when add is clicked once", () => {
    render(<AwesomeCounter initialValue={5} />);
    const RemoveButton = screen.getByText("Remove");
    userEvent.click(RemoveButton);
    const count = screen.queryByText(4);
    expect(count).toBeVisable();
});

// 6 what if twice
test("it should decrease the value correctly when add is clicked twice", () => {
    render(<AwesomeCounter initialValue={5} />);
    const RemoveButton = screen.getByText("Remove");
    userEvent.click(RemoveButton);
    userEvent.click(RemoveButton);
    const count = screen.queryByText(3);
    expect(count).toBeVisable();
});

// 7 Negative number
test("it should not allow a negative number when the initial value is 0 and remove is cliked", () => {
    render(<AwesomeCounter initialValue={0} />);
    const RemoveButton = screen.getByText("Remove");
    userEvent.click(RemoveButton);
    const count = screen.queryByText(0);
    expect(count).toBeVisable();
});

// 8 Negative number
test("it should not allow a negative number when the initial value is 2 and remove is cliked 4 times", () => {
    render(<AwesomeCounter initialValue={2} />);
    const RemoveButton = screen.getByText("Remove");
    userEvent.click(RemoveButton);
    userEvent.click(RemoveButton);
    userEvent.click(RemoveButton);
    userEvent.click(RemoveButton);
    const count = screen.queryByText(0);
    expect(count).toBeVisable();
});
