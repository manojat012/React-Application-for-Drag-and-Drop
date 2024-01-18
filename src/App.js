import React, { useState } from 'react';
import Header from './componernts/Header/Header';
import Footer from './componernts/Footer/Footer';
import DraggableList from './componernts/DraggableList/DraggableList';

const App = () => {
  const [cardData, setCardData] = useState([]);

  const handleCardData = (newFormData) => {
    // Update the state with the new card data
    setCardData([newFormData]);
  };

  return (
    <div>
      <Header onCardDataChange={handleCardData} />
      <DraggableList fdata={cardData} />
      <Footer />
    </div>
  );
};

export default App;
