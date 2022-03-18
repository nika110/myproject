import './App.css';
import { useState } from 'react';

import Transfer from './Transfer';


function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="App">
    <Transfer accounts={accounts} setAccounts={setAccounts}/>
    </div>
  );
}

export default App;
