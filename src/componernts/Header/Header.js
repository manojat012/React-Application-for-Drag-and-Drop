// Header.js
import React, { useState } from 'react';
import AddForm from '../AddForm/AddForm';
import './Header.css';

const Header = ({ onCardDataChange }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
    
    

    const handleOpenForm = () => {
      setIsFormOpen(true);
    };
  
    const handleCloseForm = () => {
      setIsFormOpen(false);
    };

  

  return (
    <header className="header-container">
      <label className="main-heading">Age Categorization</label>
      <button className="addButton" onClick={handleOpenForm}>
        + Add
      </button>
      {isFormOpen && <AddForm onClose={handleCloseForm} onFormSubmit={onCardDataChange} />}
    </header>
  );
};

export default Header;
