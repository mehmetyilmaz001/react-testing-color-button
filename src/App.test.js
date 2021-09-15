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
