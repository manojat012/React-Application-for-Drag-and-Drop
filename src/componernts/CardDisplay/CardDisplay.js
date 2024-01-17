import React from 'react';
import './CardDisplay.css';

const CardDisplay = ({ data, handleEdit, handleDelete }) => {
  const { name, email, phone, age } = data;

  return (
    <div className="card">
      <div className="card-actions">
        {/* Edit button with icon */}
        <button className="action-button edit-button" onClick={() => handleEdit(data)}>
            ✎ 
        </button>
        <div className='space-class' />
        {/* Delete button with icon */}
        <button className="action-button delete-button" onClick={() => handleDelete(data.email)}>
            ✖ 
        </button>
      </div>

      <div className="card-content">
        <p><b>Name:</b> {name}</p>
        <p><b>Email:</b> {email}</p>
        <p><b>Phone:</b> {phone}</p>
        <p><b>Age:</b> {age}</p>
      </div>
    </div>
  );
};

export default CardDisplay;
