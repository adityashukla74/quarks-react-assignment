import React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import AppNameForm from "../Components/Form";

describe("AppNameForm component", () => {
  it("renders correctly", () => {
    render(<AppNameForm />);
    // No need for act here, as there are no asynchronous updates.
    // ...
  });

  it("validates form fields correctly", async () => {
    render(<AppNameForm />);
    
    const appNameInput = screen.getByLabelText("App Name");
    const volumeNumberInput = screen.getByLabelText("Volume Number");

    act(() => {
      fireEvent.change(appNameInput, { target: { value: "" } });
      fireEvent.change(volumeNumberInput, { target: { value: "-5" } });
    });

    act(() => {
      fireEvent.click(screen.getByText("Submit"));
    });

    // Ensure error messages are displayed
    expect(await screen.findByText("App Name is required")).toBeInTheDocument();
    expect(
      await screen.findByText("Volume Number must be positive")
    ).toBeInTheDocument();
  });

  it("submits the form with valid data", async () => {
    render(<AppNameForm />);

    const appNameInput = screen.getByLabelText("App Name");
    const volumeNumberInput = screen.getByLabelText("Volume Number");

    act(() => {
      fireEvent.change(appNameInput, { target: { value: "My App" } });
      fireEvent.change(volumeNumberInput, { target: { value: "42" } });
    });

    act(() => {
      fireEvent.click(screen.getByText("Submit"));
    });

    // You can add assertions for what should happen when the form is submitted successfully
    // For example, you can check if a success message is displayed.
  });
});
