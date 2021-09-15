import './App.css';
import { useState } from 'react';

function App() {

  const  [ buttonColor, setButtonColor ] = useState('red');
  const [ isChecked, setIsChecked ] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div className="App">
      <header className="App-header">
       
        <button 
          style={{backgroundColor: buttonColor}}
          onClick={() => setButtonColor(newButtonColor)}
          disabled={isChecked}
          >
            Change to {newButtonColor}
          </button>

          <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked) } />
      </header>
    </div>
  );
}

export default App;
