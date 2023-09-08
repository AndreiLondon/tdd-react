import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import AwesomeCounter from "./AwesomeCounter";

//in order to fail the test -> throw new Error()
test("it should have the correct initial value when set to 7", () => {
    render(<AwesomeCounter initialValue={7} />)
    const count = screen.queryByText(7);
    expect(count).toBeVisable();
});
//
test("it should have a defaults initial value of 0", () => {
    render(<AwesomeCounter />)
    const count = screen.queryByText(0);
    expect(count).toBeVisable();
});
//
test("it should inrease the value correctly when add is clicked once", () => {
    render(<AwesomeCounter initialValue={1} />);
    const addButton = screen.getByText("Add");
    userEvent.click(addButton);
    const count = screen.queryByText(2);
    expect(count).toBeVisable();

});

// what if clecked twice
test("it should inrease the value correctly when add is clicked twice", () => { throw new Error() });

//Identical test for remove

test("it should decrease the value correctly when add is clicked once", () => { throw new Error() });

// what if twice
test("it should decrease the value correctly when add is clicked twice", () => { throw new Error() });

// Negative number
test("it should not allow a negative number when the initial value is 0 and remove is cliked", () => { throw new Error() });


