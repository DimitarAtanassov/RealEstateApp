import React, {useState} from 'react';
import './InputTextBox.css';

const InputTextBox = ({placeholder,onSubmit}) => {
    const [inputValue,setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(inputValue);
        setInputValue(''); // Clear input after submitting
    }


return (
    <form className = "input-textbox" onSubmit = {handleSubmit}>
        <input
            type="text"
            placeholder = {placeholder}
            value = {inputValue}
            onChange={handleChange}
        />
        <button type="submit">Submit</button>
    </form>
    );
};
export default InputTextBox;