import logo from './logo.svg';
import './App.css';
const person={name:"Tasnia",nickname:"Samia",dept:"computer",roll:181793};
const classNames={
color:'red',
backgroundColor:'pink',
padding:'155px'
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1 style={{color:'red',backgroundColor:'pink'}}>Hello world</h1>
       <div style={classNames}>
        <h1>Name:{person.name}</h1>
        <h3>Nickname:{person.nickname}</h3>
        <p>Department:{person.dept}</p>
        <p>roll:{person.roll}</p>
       </div>
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
      </header>
    </div>
  );
}

export default App;
