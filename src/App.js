import './App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';


function App() {

  const [loginName, setLoginName] = useState("");

  return (
    <>
      <Header name="" />
      <input id='login' type="text" value={loginName} onChange={(e) => setLoginName(e.target.value)} placeholder="Name" />
      <Link to="/Chat">
        <button onClick={window.sessionStorage.setItem("name", loginName)}>
          Login
        </button>
      </Link>
    </>
  );
}

export default App;
