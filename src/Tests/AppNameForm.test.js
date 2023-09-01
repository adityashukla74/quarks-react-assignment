import React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import AppNameForm from "../Components/Form";
import TableComponent from '../Components/Table';

describe("AppNameForm component", () => {
  it("renders correctly", () => {
    render(<AppNameForm />);
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

    // Make sure error messages are displayed
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
  });
});

// Write basic tests for the table. 
// The test should simulate user typing in the input fields and confirm that the correct data is logged on the table.


describe('TableComponent', () => {
  test('renders table headers correctly', () => {
    render(<TableComponent />);
    
    // Check if headers are there
    expect(screen.getByText('id')).toBeInTheDocument();
    expect(screen.getByText('name')).toBeInTheDocument();
    expect(screen.getByText('location')).toBeInTheDocument();
    expect(screen.getByText('health')).toBeInTheDocument();
    expect(screen.getByText('ip')).toBeInTheDocument();
    expect(screen.getByText('volume')).toBeInTheDocument();
  });

  test('renders table rows and data correctly', () => {
    render(<TableComponent />);
    
    // Check if rows and data are there
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('Naruto')).toBeInTheDocument();
    expect(screen.getByText('Konoha')).toBeInTheDocument();
    expect(screen.getByText('Healthy')).toBeInTheDocument();
    expect(screen.getByText('1000000000')).toBeInTheDocument();

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Sasuke')).toBeInTheDocument();
    expect(screen.getByText('Orochimaru Hidden Village')).toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.getByText('300000000')).toBeInTheDocument();
  });

  test('updates table data when input fields change', () => {
    render(<TableComponent />);

    // Reproduce changing name field for the first row
  const nameInput = screen.getByLabelText('Name'); // Replace with your actual label text
  fireEvent.change(nameInput, { target: { value: 'NewName' } });
  
  // Check if the table shows the updated data
  const updatedDataRow0 = screen.getByText('NewName');
  expect(updatedDataRow0).toBeInTheDocument();
  
  // Reproduce changing location field for the first row
  const locationInput = screen.getByLabelText('Location'); // Replace with your actual label text
  fireEvent.change(locationInput, { target: { value: 'NewLocation' } });
  
  // Check if table shows the updated data
  const updatedDataRow1 = screen.getByText('NewLocation');
  expect(updatedDataRow1).toBeInTheDocument();
  
  // Reproduce changing the health field for the second row
  const healthInput = screen.getByLabelText('Health'); // Replace with your actual label text
  fireEvent.change(healthInput, { target: { value: 'NewHealth' } });
  
  // Check if table reflects the updated data
  const updatedDataRow2 = screen.getByText('NewHealth');
  expect(updatedDataRow2).toBeInTheDocument();
  
  // Reproduce changing the ip field for the second row
  const ipInput = screen.getByLabelText('IP'); // Replace with your actual label text
  fireEvent.change(ipInput, { target: { value: 'NewIP' } });
  
  // Check if table reflects the updated data
  const updatedDataRow1Ip = screen.getByText('NewIP');
  expect(updatedDataRow1Ip).toBeInTheDocument();
  
  });
});