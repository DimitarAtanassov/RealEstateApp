import React from 'react';
import './App.css'; // Import any global CSS styles
import InputTextBox from './Components/InputTextBox/InputTextBox'; // Import the InputTextBox component

function App() {
  // Form Submission handler
  const handleSubmit = (inputValue) => {
    console.log("Submitted value:", inputValue);
  };

  return (
    <div className='App'>
      <h1>RealEstate Emigo</h1>
      <InputTextBox placeholder ="Enter a Property Address, City, or Zip..." onSubmit = {handleSubmit} />
    </div>
  );
}

export default App;
