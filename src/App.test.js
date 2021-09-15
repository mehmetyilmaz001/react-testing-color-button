import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);

  // Find the el
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});


  // Expect the background color is to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});

})


test('button turns to blue when clicked', () => {

  render(<App />)

  // Find the button
  const colorButton = screen.getByRole('button',  { name: 'Change to blue' });

  // Click the button
  fireEvent.click(colorButton);


  // Expect to background color is blue
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})

  // Exptect to has text Change to red
  expect(colorButton.textContent).toBe('Change to red');


})


test('initial conditions', () => {

  render(<App />)

  // Check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();

  // Check that the checkbox starts out unckecked
  const checkbox = screen.getByRole('checkbox');
  // expect(checkbox).tobe()
})

test('Checkbox disables button on first click and enables second click', () => {

  render(<App />);

  const button = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox');


  // Fire checkbox first click
  fireEvent.click(checkbox);

  // Expect button is disabled
  expect(button).toBeDisabled();


  // Fire checkbox second click
  fireEvent.click(checkbox);

  // Expect buttons is enabled
  expect(button).toBeEnabled();



})



