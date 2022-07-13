import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import { ButtonGroup, Fab,  } from '@mui/material';
import Login from './components/Login';
import Typography from '@mui/material/Typography';
import Input from './components/input'

function App() {
  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;




  // const [count,setCount] = useState(0);

  // const up = () => {
  //   setCount(count + 1);
  // }

  // const down = () => {
  //   if (count > 0){
  //   setCount(count - 1);
  //   }
  //   else {
  //     //nothing
  //   }
  // } 

  // const reset = () => {
  //   setCount(0);
  // }