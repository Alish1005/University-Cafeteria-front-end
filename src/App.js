import { useState } from 'react';
import './App.css';
import Admin from './pages/Admin-Interface/Admin';
import User from './pages/User-Interface/User';
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
function App() {
  const [isA,setA]=useState(false)
  return (
    <div className="App">
      <button className='APPbtn' onClick={() => setA(!isA)}>
        Switch
      </button>
      {isA ? <Admin/> : <User/>}
    </div>
  );
}

export default App;
