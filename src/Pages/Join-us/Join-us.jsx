import React, { useState } from 'react';
import NavBar from '../../Home/Header/NavBar';
import './Join-us.css';
import Footer from '../../Home/Footer/Footer';
import Contact from '../../Home/Contact/Contact';

function Join_us() {
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
    <div className="Join-us" id="Join-us" lang="ar">
      <div className="Join-us-Header Page-Header">
        <NavBar currentPage="join-us" />
        <h2 className="Page-Title">إنضم إلينا</h2>
      </div>

      
      {/* Page Body */}
      <div className='Join-us-body Page-Body'>
        <div className="Join-us-title Page-title-container">
          <h1 className="Services-title">إنضم لفريق 26 فكرة</h1>
          <p className="description"> اصبح فرد من العائلة الآن </p>
        </div>
        <div className="flex-container">
          {/* Image Container */}
          <div className="image-container">
            <img src={require("../../Assets/Images/join-us.jpg")}  />
          </div>
          <form className="Join-us-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleChange} 
                  required 
                  placeholder=" " 
                />
                <label htmlFor="firstName">الاسم الأول</label>
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleChange} 
                  required 
                  placeholder=" " 
                />
                <label htmlFor="lastName">اسم العائلة</label>
              </div>
            </div>
            <div className="form-group">
              <input 
                type="tel" 
                id="phoneNumber" 
                name="phoneNumber" 
                value={formData.phoneNumber} 
                onChange={handleChange} 
                required 
                placeholder=" " 
              />
              <label htmlFor="phoneNumber">رقم الهاتف</label>
            </div>
            <div className="form-group">
              <select 
                id="department" 
                name="department" 
                value={formData.department} 
                onChange={handleChange} 
                required
                placeholder=" " 
              >
                <option value="" disabled hidden></option>
                <option value="marketing">قسم التسويق</option>
                <option value="it">قسم تقنية المعلومات</option>
              </select>
              <label htmlFor="department">القسم</label>
            </div>
            <div className="form-group">
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                required 
                placeholder=" " 
              />
              <label htmlFor="subject">الموضوع</label>
            </div>
            <div className="form-group">
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows="2" 
                required 
                placeholder=" " 
              ></textarea>
              <label htmlFor="message">الرسالة</label>
            </div>
            <div className="form-group">
              <input 
                type="file" 
                id="attachment" 
                name="attachment" 
                onChange={handleChange} 
              />
              <label htmlFor="attachment"> السيرة الذاتية (CV) </label>
            </div>
            <button type="submit" className="submit-button">إرسال</button>
          </form>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default Join_us;
