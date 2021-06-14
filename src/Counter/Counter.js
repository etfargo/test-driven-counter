import React, {useState} from 'react';
import './Counter.css';

function Counter() {
    
    const[counterValue, setCounterValue] = useState(0);
    const[inputValue, setInputValue] = useState(1);

    const subFromCounter = () => {
        setCounterValue(parseInt(counterValue)-parseInt(inputValue));
    } 
    const addToCounter = () => {
        setCounterValue(parseInt(counterValue)+parseInt(inputValue));
    }
    return (
        <div className="Counter">
            <h1 data-testid="header">My Counter</h1>
            <h2 data-testid="counter" className={`${counterValue>=100 ? 'green' : ''}${counterValue<=-100 ? 'red' : ''}`}>
                {counterValue}
            </h2>
            <button data-testid="sub-btn" 
                onClick={() => {subFromCounter();}} >-</button>
            <input  className="text-center" type="number" 
                    data-testid="input" value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)}
                /> 
            <button data-testid="add-btn"
                    onClick={() => {addToCounter();} }
                >+</button>
        </div>
    );
}

export default Counter;