import React, { useState } from 'react';
import './Join-us.css';
import NavBar from "../../Home-en/Header-en/NavBar-en";
import Footer from '../../Home-en/Footer-en/Footer-en';
import Contact from '../../Home-en/Contact-en/Contact-en';

function Join_us_en() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    dateOfBirth: '',
    department: '',
    subject: '',
    message: '',
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // You can replace this with any other actions you want to perform on form submission.
  };

  return (
    <div className="Join-us" id="Join-us" lang="en">
      <div className="Join-us-Header Page-Header-en">
        <NavBar currentPage="join-us" />
        <h2 className="Page-Title-en">Join Us</h2>
      </div>

      {/* Page Body */}
      <div className='Join-us-body Page-Body'>
        <div className="Join-us-title Page-title-container">
          <h1 className="Services-title">Join 26 Ideas Team</h1>
          <p className="description"> Become a member of the family now </p>
        </div>
        <div className="flex-container-en"><form className="Join-us-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group-en">
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleChange} 
                  required 
                  placeholder=" " 
                />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="form-group-en">
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleChange} 
                  required 
                  placeholder=" " 
                />
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>
            <div className="form-group-en">
              <input 
                type="tel" 
                id="phoneNumber" 
                name="phoneNumber" 
                value={formData.phoneNumber} 
                onChange={handleChange} 
                required 
                placeholder=" " 
              />
              <label htmlFor="phoneNumber">Phone Number</label>
            </div>
            <div className="form-group-en">
              <select 
                id="department" 
                name="department" 
                value={formData.department} 
                onChange={handleChange} 
                required
                placeholder=" " 
              >
                <option value="" disabled hidden></option>
                <option value="marketing">Marketing Department</option>
                <option value="it">IT Department</option>
              </select>
              <label htmlFor="department">Department</label>
            </div>
            <div className="form-group-en">
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                required 
                placeholder=" " 
              />
              <label htmlFor="subject">Subject</label>
            </div>
            <div className="form-group-en">
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows="2" 
                required 
                placeholder=" " 
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <div className="form-group-en">
              <input 
                type="file" 
                id="attachment" 
                name="attachment" 
                onChange={handleChange} 
              />
              <label htmlFor="attachment">CV Attachment</label>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
          {/* Image Container */}
          <div className="image-container">
            <img src={require("../../../Assets/Images/join-us.jpg")} alt="Project Management" />
          </div>
          
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default Join_us_en;

