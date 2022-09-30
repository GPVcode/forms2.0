import './App.css';
import React, { useState } from "react"


function App() {
  const [ formData, setFormData ] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    joinedNewsletter: false
  })

  const handleChange = (event) => {
    const { value, type, name, checked } = event.target
    setFormData(prevFormData => (
      {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    ))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(formData.password === formData.confirmPassword){
      console.log("Successfully signed up!")
    } else{
      console.log("Passwords do not match")
      return
    } 

    if(formData.joinedNewsletter === true){
      console.log("Thanks for subscribing!")
    }

  } 


  return (
   
    <div className="form-container">

       
      <form className="form" onSubmit={handleSubmit}>

        <input
         type="text"
         placeholder="Email"
         className="form--input" 
         value={formData.email} 
         name="email" 
         onChange={handleChange}/>

        <input
         type="text" 
         placeholder="Password" 
         className="form--input"
         value={formData.password} 
         name="password" 
         onChange={handleChange}/>

        <input
         type="text" 
         placeholder="Confirm Password" 
         className="form--input"
         value={formData.confirmPassword} 
         name="confirmPassword" 
         onChange={handleChange}/>

        <div className="form--marketing">
          <input
           id="okayToEmail" 
           type="checkbox" 
           checked={formData.joinedNewsletter} 
           name="joinedNewsletter" 
           onChange={handleChange}/>
          <label htmlFor="okayToEmail">Join our newsletter!</label>
        </div>
        <div className="button">
          <button className="form--submit">Sign Up</button>
        </div>
        
      </form>

    </div>
  );
}

export default App;
