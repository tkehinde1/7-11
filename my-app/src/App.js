import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import { ButtonGroup, Fab,  } from '@mui/material';

function App() {

  const [count,setCount] = useState(0);

  const up = () => {
    setCount(count + 1);
  }

  const down = () => {
    if (count > 0){
    setCount(count - 1);
    }
    else {
      //nothing
    }
  } 

  const reset = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          {count} Clicks
        </p>

        <ButtonGroup color="primary" variant="outlined">
          <Button variant="contained"
            className="App-link"
            target="_blank"
            onClick={up}>
            Click
          </Button>
          <Button variant="contained"
            className="App-link"
            target="_blank"
            onClick={down}>
            Delete
          </Button>
          <Button variant="contained"
            className="App-link"
            target="_blank"
            onClick={reset}>
            Reset
          </Button>
        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
