
import { useState } from 'react';
import './App.css';

function App() {
  // const[firstName,setFirstName] = useState("");
  // const[LastName,setLastName] = useState("");

  // console.log(firstName);
  // console.log(LastName);

  // function fNamechangeHandler(event){
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function lNamechangeHandler(event){
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({firstName:"",lastName:"",email:""});
  console.log(formData.email)
  function changeHandler(event){
    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        [event.target.name] : event.target.value
      }
    });
  }

  return (
    <div>
      <form>
        <input type='text' placeholder='first name'
        onChange={changeHandler}
        name = "firstName"/>
        <br/><br/>
        <input type='text' placeholder='Last name'
        onChange={changeHandler}
        name = "lastName"/>
        <br/><br/>
        <input type='email' placeholder='Enter mail'
        onChange={changeHandler}
        name='email'/>
      </form>
    </div>
  );
}

export default App;
