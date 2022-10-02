import './App.css'
import React, { useState } from "react"

const App = () => {

  const [ formData, setFormData ] = useState(
    {
      email: "",
      password: "",
      confirmPassword: "",
      joinedNewsletter: true,
      favColor: ""
    }
  )


  const handleChange = (event) => {
    const { name, type, value, checked } = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
      }
    ))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(formData.password === formData.confirmPassword){
      alert("Successfully signed up!")
    } else {
      alert("Passwords do not match")
      return
    }

    {formData.joinedNewsletter && alert("Thanks for subscribing!")}
  }


  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input 
          name="email" 
          placeholder="Email" 
          type="text"
          onChange={handleChange} 
          value={formData.email}
          className="form--input"/>
          <input 
          name="password" 
          placeholder="Password" 
          type="text"
          onChange={handleChange} 
          value={formData.password}
          className="form--input"/>
          <input 
          name="confirmPassword" 
          placeholder="Confirm password" 
          type="text"
          onChange={handleChange} 
          value={formData.confirmPassword}
          className="form--input"/>
          <select 
            id="favColor"
            value={formData.favColor}
            onChange={handleChange}
            name="favColor"
          >
              <option value="red">Red</option>
              <option value="white">White</option>
              <option value="blue">Blue</option>
              <option value="other">Other</other>
          </select>
          <div className='form--marketing'>
            <input 
            id="okayToEmail"
            name="joinedNewsletter" 
            type="checkbox"
            onChange={handleChange} 
            checked={formData.joinedNewsletter}
            />
            <label htmlFor="okayToEmail">Join our newsletter!</label>
          </div>
          <div className="button">
            <button className="form--submit">Submit!</button>
          </div>
          
      </form>
    </div>
  )

}

export default App
