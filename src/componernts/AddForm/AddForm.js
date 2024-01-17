import React, { useState } from 'react';
import './AddForm.css';

const AddForm = ({ onClose, onFormSubmit  }) => {
    const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
  };
    const handleCancel = () => {
        onClose();
      };
    
  return (
    <div className="popup">
        <div className='popup-header'>
            <span id='plus'>+</span>
            <button className="close-button" onClick={handleCancel}>
            &times;
        </button>
        </div>
    <form onSubmit={handleSubmit}>
      <div className="form-row">
          <div className="form-col">
            <label className="form-label" htmlFor="itemName">Name:</label>
            <input className="form-input" type="text" id="itemName" name="name" placeholder="Name" onChange={handleInputChange}/>
          </div>
          <div className="form-col">
            <label className="form-label" htmlFor="itemPhoneNumber">Phone number:</label>
            <div className="phone-input">
              <input  style={{ width: '28px' }} className="form-input" type="tel" id="countryCode" name="countryCode" placeholder="+91" />
              <input className="form-input" type="tel" id="phoneNumber" name="phone" placeholder="Phone Number" onChange={handleInputChange} />
            </div>
          </div>
          
        </div>

        <div className="form-row">
            <div className="form-col">
            <label className="form-label" htmlFor="itemAge">Age:</label>
            <input className="form-input" type="number" id="itemAge" name="age" placeholder="Age" onChange={handleInputChange}/>
          </div>
       
          <div className="form-col">
            <label className="form-label" htmlFor="itemEmail">Email:</label>
            <div className="phone-input">
            <input className="form-input" type="email" id="itemEmail" name="email" placeholder="mail-id" onChange={handleInputChange}/>
            <input style={{ width: '70px' }} className="form-input" type="email" id="emailDomain" name="itemEmail" placeholder="@domain" />
            </div>
          </div>
        </div>

        <div className="form-row-buttons">
          <div style={{ paddingRight: '10px' }}><button className="cancel-button"  onClick={handleCancel}>Cancel</button></div>
          <button className="add-button" type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
