import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({firstName:"",lastName:"",email:"",country:"India",streetAdress:"",city:"",state:"",zip:"",
    comments:false,candidates:false,offers:false,pushNotification:""})
  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setFormData( (prev)=>(
      {...prev,
      [name]:type==="checkbox"?checked:value
    }
    ))
  }
  function submitHandler(event){
    event.preventDefault();
    console.log("Form Data :");
    console.log(formData)
  }
  return (
    <div className="flex flex-col items-center">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <br/>
        <input type="text"
        name="firstName"
        id="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={changeHandler}
        className="outline"/>
        <br/>
        <label htmlFor="lastName">Last Name</label>
        <br/>
        <input type="text"
        name="lastName"
        id="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={changeHandler}
        className="outline"/>
        <br/>
        <label htmlFor="email">E-mail</label>
        <br/>
        <input type="mail"
        name="email"
        id="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={changeHandler}
        className="outline"/>
        <br/>
        <label htmlFor="country">Country</label>
        <br/>
        <select
        id="country"
        name="country"
        value={formData.country}
        onChange={changeHandler}
        className="outline">
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        <br/>
        <label htmlFor="streetAdress">Street Adress</label>
        <br/>
        <input type="text"
        name="streetAdress"
        id="streetAdress"
        placeholder="Street Adress"
        value={formData.streetAdress}
        onChange={changeHandler}
        className="outline"/>
        <br/>
        <label htmlFor="city">City</label>
        <br/>
        <input type="text"
        name="city"
        id="City"
        placeholder="City"
        value={formData.city}
        onChange={changeHandler}
        className="outline"/>
        <br/>
        <label htmlFor="state">State/Province</label>
        <br/>
        <input type="text"
        name="state"
        id="state"
        placeholder="State"
        value={formData.state}
        onChange={changeHandler}
        className="outline"/>
        <br/>
        <label htmlFor="zip">Zip</label>
        <br/>
        <input type="text"
        name="zip"
        id="zip"
        placeholder="Zip"
        value={formData.zip}
        onChange={changeHandler}
        className="outline"/>
        <br/>
        <br/>
        <fieldset>
          <legend>By Email</legend>
          <div className="flex">
          <input
          type="checkbox"
          id="comments"
          name="comments"
          checked={formData.comments}
          onChange={changeHandler}/>
          <div>
            <label htmlFor="comments">Comments</label>
            <p>Get notified when someones posts a comment on a posting.</p>
          </div>
          </div>
          <div className="flex">
          <input
          type="checkbox"
          id="candidates"
          name="candidates"
          checked={formData.candidates}
          onChange={changeHandler}/>
          <div>
            <label htmlFor="candidates">Candidates</label>
            <p>Get notified when a candidates apply for job.</p>
          </div>
          </div>
          <div className="flex">
          <input
          type="checkbox"
          id="offers"
          name="offers"
          checked={formData.offers}
          onChange={changeHandler}/>
          <div>
            <label htmlFor="offers">Offers</label>
            <p>Get notified when a candidates apply for job.</p>
          </div>
          </div>
        </fieldset>
        <br/>
        <fieldset>

          <legend>Push Notification</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <input type="radio"
          name="pushNotification"
          id="pushEverything"
          value="Everything"
          onChange={changeHandler}/>
          <label htmlFor="pushEverything">Everything</label>
          <br/>

          <input type="radio"
          name="pushNotification"
          id="pushEmail"
          value="Same as email"
          onChange={changeHandler}/>
          <label htmlFor="Same as email">Same as email</label>
          <br/>

          <input type="radio"
          name="pushNotification"
          id="pushNothing"
          value="No Push Notification"
          onChange={changeHandler}/>
          <label htmlFor="No Push Notification">No Push Notification</label>
          <br/>

        </fieldset>

        <br/>

        <button className="bg-blue-500 text-white font-bold py-2 px-4">Save</button>
      </form>
    </div>
  );
}

export default App;
