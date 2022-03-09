import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import { useState } from 'react';
import { UserContext } from './UserContext';

function App() {

  const [user, setUser] = useState({
    username:'',
    lastLogin: ''

    const options = {method: 'GET', headers: {Accept: 'application/json'}};

  fetch('https://api.exchange.coinbase.com/accounts', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  });
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Home />
      </UserContext.Provider>
    </div>
  );
}

export default App;
