import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import Holberton_Logo from './Holberton_Logo.jpg'; // Assuming this is your image file

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={Holberton_Logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email'></input>
        <br></br>
        <label>Password:</label>
        <input type='password' id='password'></input>
        <br></br>
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
