import React from 'react';
import Header from './componernts/Header/Header';
import Footer from './componernts/Footer/Footer';
import DraggableList from './componernts/DraggableList/DraggableList';

const App = () => {

  return (
    <div>
      <Header />
      <DraggableList />
      <Footer/>
    </div>
  );
};

export default App;