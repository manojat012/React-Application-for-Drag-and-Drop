import React, { useState } from 'react';
import './CardDisplay.css';

const CardDisplay = ({ data, handleEdit, handleDelete }) => {
  const { name: initialName, email: initialEmail, phone: initialPhone, age: initialAge } = data;
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState(initialPhone);
  const [age, setAge] = useState(initialAge);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    // Prepare the edited data
    const editedData = {
      name,
      email,
      phone,
      age,
      // Add other fields as needed
    };

    // Call handleEdit with the updated data
    handleEdit(editedData);
    setIsEditMode(false);
  };

  return (
    <div className={`card ${isEditMode ? 'edit-mode' : ''}`}>
      <div className="card-actions">
        {isEditMode ? (
          // Save button with icon
          <button className="action-button save-button" onClick={handleSaveClick}>
            ✔
          </button>
        ) : (
          // Edit button with icon
          <button className="action-button edit-button" onClick={handleEditClick}>
            ✎
          </button>
        )}
        <div className='space-class' />
        {/* Delete button with icon */}
        <button className="action-button delete-button" onClick={() => handleDelete(data.email)}>
          ✖
        </button>
      </div>

      <div className="card-content">
        {isEditMode ? (
          // Render input fields for editing
          <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            {/* Repeat for other editable fields */}
          </>
        ) : (
          // Render plain text fields
          <>
            <p><b>Name:</b> {name}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Phone:</b> {phone}</p>
            <p><b>Age:</b> {age}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CardDisplay;
