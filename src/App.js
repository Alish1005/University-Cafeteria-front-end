import { useState } from 'react';
import './App.css';
import Admin from './pages/Admin-Interface/Admin';
import User from './pages/User-Interface/User';
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import { createStandaloneToast } from '@chakra-ui/react'

const { ToastContainer, toast } = createStandaloneToast()
function App() {
  const [isA,setA]=useState(false)
  return (
    <div className="App">
      <button className='APPbtn' onClick={() => setA(!isA)}>
        Switch
      </button>
      <ToastContainer />
      {isA ? <Admin/> : <User/>}
  
    </div>
  );
}

export default App;
