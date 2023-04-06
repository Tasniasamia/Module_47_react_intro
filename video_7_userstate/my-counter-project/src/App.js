import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
    <Counter></Counter>
    </div>
  );
}
function Counter(){
  const [count,countfunction]=useState(55);
  
  const increaseCount=()=>{
  
    countfunction(count+1);
  }

  const decrease=()=>{
  
    countfunction(count-1);
  }
return (
<div>
  <h2>Count:{count}</h2>
  <button onClick={increaseCount}>increase</button>
  <button onClick={decrease}>decrease</button>
</div>
)
}

export default App;
