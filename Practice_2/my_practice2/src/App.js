import logo from './logo.svg';
import './App.css';
const obj={
  name:"Samia",
  age:22,
  dept:"cmt",
  session:2018,
  graduate:2022,
}
const styleadd={backgroundColor:"blue",color:"red"};
function App() {
  return(
   <div >
    <h1>Some Texts</h1>
    <div className='contaner' style={{color:"red"}}>
    <Person></Person>
    <Person></Person>
    <Person></Person>

    <Person></Person>

   
    </div>
    <div className='contaner2'>
    <Student name="Tasnia Sharin Samia"age="20"></Student>
    <Student name="Tasnia Akter Lamia"></Student>
    <Student name="Lamia Emroj"></Student>
    </div>
    </div>
  )
  
  
}
function Student(prop){
  return(
    <div>
      <p >{prop.name}</p>
      <p>{obj.age}</p>
      <p>{obj.dept}</p>
      <p>{obj.session}</p>
      <p>{obj.graduate}</p>
    </div>
  )
}
function Person(){
  return (
    
      <div className='undercontaner'>
    <h1>My Name is Tasnia</h1>
    <p>Nickname:Samia</p>
    </div>
 
  )
} 

export default App;
