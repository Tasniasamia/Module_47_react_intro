import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <CatchFetchData></CatchFetchData>
    </div>
  );
}

function CatchFetchData(){
  const [catchValues,catchByFunction]=useState([]);
  console.log(catchValues);
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=>res.json())
  .then(data=>catchByFunction(data))
},[])
 
  return(
    
<div>
  <h1>We will catch value from from fetch and send into another function</h1>
  <h2>The number of array elements are {catchValues.length}</h2>
  <div className="container2"style={{marginBottom:"30px"}}>
{
  catchValues.map((index2)=><div className='contaner2'>  <h3>{index2.userId}</h3><p>{index2.id}</p><p>{index2.title}</p> </div>)

    
   
      
 
  }

</div>
  <div className='container'>
  {
  catchValues.map(index=><User userid={index.userId}id={index.id}title={index.title}body={index.body}></User>)
  }
</div>

</div>
  )
}
function User(props){
  return (
<div className='contaner'>
<h4>UserId:{props.userId}</h4>
<p>Id:{props.id}</p>
<p>Title:{props.title}</p>
<p>Description:{props.body}</p>

  
</div>
    
  )
}
export default App;
