"use client";

import { useState } from 'react';
import styles from './page.module.css';

export default function Calculator() {
    const elems = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const operations = ['-', '+', '*', '/'];
    const [input, setInput] = useState('');
    const [isResult, setIsResult] = useState(false);

    const handleClick = (value) => {
      if (isResult) {
        setInput(value);
      setIsResult(false);
      } else {
        setInput((prev) => prev + value);
      }
    };  
    
    const handleClear = () => {
      setInput('');
      setIsResult(false);
    };  

    const handleBackspace = () => {
      setInput((prev) => prev.toString().slice(0, -1));
    };  

    const handleCalculate = () => {
      try {
        setInput(eval(input).toString());
        setIsResult(true);
      } catch (error) {
        setInput('Error');
        setIsResult(false);
      }
    };  

    return (
      <div className={styles.calculator}>
        <input type="text" value={input} readOnly className={styles.labelInput} />
        <div className={styles.buttons}>
          <div className={styles.buttons1}>
            {elems.map((elem, index) => (
              <button key={index} className={styles.button} onClick={() => handleClick(elem)}>
                {elem}
              </button>
            ))}
            <button className={styles.button} onClick={handleClear}>C</button>
            <button className={styles.button} onClick={handleBackspace}>⌫</button>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.buttons2}>
            {operations.map((operation, index) => (
              <button key={index} className={styles.button} onClick={() => handleClick(operation)}>
                {operation}
              </button>
            ))}
            <button className={styles.button} onClick={handleCalculate}>=</button>
          </div>
        </div>
      </div>
    );
}
