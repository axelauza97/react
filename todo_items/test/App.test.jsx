import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import userEvent from "@testing-library/user-event";
/*describe("Run test", () => {
  test("render", () => {
    render(<App />);
    expect(screen.getByText("React add and delete items!")).toBeDefined();
  });
});*/
describe("App test", () => {
  test("add itmes", async () => {
    const user = userEvent.setup();
    render(<App />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();

    const form = screen.getByRole("form");
    expect(form).toBeDefined();

    const button = form.querySelector("button");
    expect(button).toBeDefined();

    const text = crypto.randomUUID();

    await user.type(input, text);
    await user.click(button);

    const list = screen.getByRole("list");
    expect(list).toBeDefined();
    expect(list.childNodes.length).toBe(1);

    const item = screen.getByText(text);
    expect(item).toBeDefined();

    await user.click(item);

    const noItems = screen.getByText("No elements");
    expect(noItems).toBeDefined();
  });
});
