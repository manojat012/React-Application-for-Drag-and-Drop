import React, { useState } from 'react';
import './AddForm.css';

const AddForm = ({ onClose, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    email: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate if all fields are filled
    if (!formData.name || !formData.phone || !formData.age || !formData.email) {
      alert('All fields are required');
      return;
    }

    // Validate if age is not less than 1
    if (parseInt(formData.age) < 1) {
      alert('Age should not be less than 1');
      return;
    }

    onFormSubmit(formData);
    onClose();
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
            <input className="form-input" type="text" id="itemName" name="name" placeholder="Name" onChange={handleInputChange} required />
          </div>
          <div className="form-col">
            <label className="form-label" htmlFor="itemPhoneNumber">Phone number:</label>
            <div className="phone-input">
              <input className="form-input" type="tel" id="phoneNumber" name="phone" placeholder="Phone Number" onChange={handleInputChange} required />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-col">
            <label className="form-label" htmlFor="itemAge">Age:</label>
            <input className="form-input" type="number" id="itemAge" name="age" placeholder="Age" onChange={handleInputChange} required />
          </div>

          <div className="form-col">
            <label className="form-label" htmlFor="itemEmail">Email:</label>
            <div className="phone-input">
              <input className="form-input" type="email" id="itemEmail" name="email" placeholder="mail-id" onChange={handleInputChange} required />
            </div>
          </div>
        </div>

        <div className="form-row-buttons">
          <div style={{ paddingRight: '10px' }}><button className="cancel-button" onClick={handleCancel}>Cancel</button></div>
          <button className="add-button" type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
