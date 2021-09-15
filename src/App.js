import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const  [ buttonColor, setButtonColor ] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button 
          style={{backgroundColor: buttonColor}}
          onClick={() => setButtonColor(newButtonColor)}
          >
            Change to {newButtonColor}
          </button>
      </header>
    </div>
  );
}

export default App;
