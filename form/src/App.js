
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

  const [formData, setFormData] = useState({firstName:"",lastName:"",email:"",comments:"",isVisible:"True",status:"",favCar:""});
  // console.log(formData);
  function changeHandler(event){

    const{name,value,checked,type} = event.target
    setFormData(prevFormData =>{
      
      return{
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value
      }
    });
  }
  
  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='first name'
        onChange={changeHandler}
        name = "firstName"
        value={formData.firstName}/>
        <br/><br/>
        <input type='text' placeholder='Last name'
        onChange={changeHandler}
        name = "lastName"
        value={formData.lastName}/>
        <br/><br/>
        <input type='email' placeholder='Enter mail'
        onChange={changeHandler}
        name='email'
        value={formData.email}/>
        <br/><br/>
        <textarea
        placeholder='Enter Your Comments'
        onChange={changeHandler}
        name='comments'
        value={formData.comments}/>
        <br/><br/>
        <input type='checkbox'
        onChange={changeHandler}
        name='isVisible'
        id='isVisible'
        checked={formData.isVisible}/>
        <label htmlFor='isVisible'>Am I isVisible</label>
        <br/><br/>


        


      <fieldset>
        <legend>Mode</legend>
        <input type='radio'
        onChange={changeHandler}
        name='status'
        value="Online-Mode"
        id='Online-mode'
        checked={formData.status === "Online-mode"}/>
        <label 
        htmlFor='Online-mode'>Online Mode</label>
        <input type='radio'
        onChange={changeHandler}
        name='status'
        value="Offline-Mode"
        id='Offline-mode'
        checked={formData.status === "Offline-mode"}/>
        <label 
        htmlFor='Offline-mode'>Offline Mode</label>
        <br/><br/>
      </fieldset>

    <select onChange={changeHandler}
    name="favCar"
    value={formData.favCar}
    id='favCar'
    >
    <option value = "Scarpio">Scarpio</option>
    <option value = "Thar">Thar</option>
      
    </select>

    <button>Submit</button>

      </form>
    </div>
  );
}

export default App;
