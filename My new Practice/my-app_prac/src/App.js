import logo from './logo.svg';
import './App.css';
import pic1 from "./images/pic-1.jpg"
import pic2 from "./images/pic-2.jpg"
import pic3 from "./images/pic-3.jpg"
import pic4 from "./images/pic-4.jpg"
import pic5 from "./images/pic-5.jpg"
import pic6 from "./images/pic-6.jpg"

function App() {
   
  const objarr=[{name:"Tasnia Sharin",age:20,profession:"MERN STACK Learner",images:pic1},

{name:"Tanim Akter",age:20,profession:"Student",images:pic1},
{name:"Adhora Sharin",age:20,profession:"ILTES",images:pic2},
{name:"Sadia Rahman",age:18,profession:"Student",images:pic3},
{name:"Tanim Akter",age:20,profession:"Student",images:pic4},
{name:"Adhora Sharin",age:20,profession:"ILTES",images:pic5},
{name:"Sadia Rahman",age:18,profession:"Student",images:pic6}
]


  return (
    //same in look same in data by one function

    <div >
           

             <p title="Hello samia">Lorem ipsum dolor sit amet.</p>

      <div className='container'>
      
    {
   objarr.map(index=> <Person name={index.name}age={index.age}profession={index.profession}image={index.images}></Person>)
 }
 </div>
{/* same in look different in data by one function */}
 <div className='anothercontainer'>
  <Person2 name="MD Shahidul Islam"image={pic1}Institute="MIST"></Person2>
  
  <Person2 image={pic3}Institute="MIST"></Person2>
  <Person2 name="Farhan Khan"image={pic6}></Person2>
  <Person2 name="MD Saiful Islam"image={pic5}Institute="MIST"Dept="Computer"session="2018-19"></Person2>

 </div>

 {/* same in look different in data by various function */}
    <div className="lastcontainer">
    <Person2 name="MD Shahidul Islam"image={pic1}Institute="MIST"></Person2>
    <Person3 name="Amar Upadhay"age="40plus"character="Father,Hero,FatherinLaw"style={{color:"red",backgroundColor:"pink"}}></Person3>
    <Person name={objarr[0].name}age={objarr[0].age}profession={objarr[0].profession}image={objarr[0].images}></Person>
    </div>
    </div>

    
  )
}
function Person(props){
  return(
    <div className="contaner ">
      <div className="contain">

      <img src={props.image} style={{height:"200px",width:"200px",borderRadius:"50%"}}/>
      <h2>Name:{props.name}</h2>
      <p>Profession:{props.profession}   Age:{props.age}</p>
      </div>
    
    </div>
  )
}
function Person2(props){
  return(
    <div className="contain">
      <p>{props.name}</p>
     <img src={props.image}style={{height:"100px",width:"100px"}}/>
      <p>{props.Institute}</p>
      <p>Department:{props.Dept} Session:{props.session}</p>
    </div>
  )
}
function Person3(props){
  return(
    <div class="contain">
      <h1>Hello Superstar</h1>
      <h4>Name:{props.name}</h4>
      <h2>Age:{props.age}</h2>
      <p>character:{props.character}</p>
      <p title="Marne ke bad bohat rulake lotke ana Insan">Age decrease day by day</p>
    </div>
  )
}
export default App;
