import React, { useState } from 'react';
import { evaluate } from 'mathjs'; // math libraries added to safely excute calculating functionality
import './calculator.css'; // css features 

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState(''); // state to help with calculator results display

  // handle button change as button are clicked - set to prevs value + added/ input value
  const handleButtonClick = (value) => {
    setDisplayValue((prevDisplay) => prevDisplay + value);
  };

  // calculates the number values placed in via evaluate -mathjs libraries via a try - catch work flow
  const handleCalculate = () => {
    try {
      const result = evaluate(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  // handle for functionality with clear button - when user wants to input new data, this will reset the calculator
  const handleClear = () => {
    setDisplayValue('');
  };

  // format of the calcultor to match a traditonal calculator
  return (
    <div className="calculator">
      <input type="text" className="screen" value={displayValue} readOnly />

      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="button"
                value="7"
                onClick={() => handleButtonClick('7')}
                className="number"
              />
            </td>
            <td>
              <input
                type="button"
                value="8"
                onClick={() => handleButtonClick('8')}
                className="number"
              />
            </td>
            <td>
              <input
                type="button"
                value="9"
                onClick={() => handleButtonClick('9')}
                className="number"
              />
            </td>
            <td>
              <input
                type="button"
                value="/"
                onClick={() => handleButtonClick('/')}
                className="operator"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="button"
                value="4"
                onClick={() => handleButtonClick('4')}
                className="number"
              />
            </td>
            <td>
              <input
                type="button"
                value="5"
                onClick={() => handleButtonClick('5')}
                className="number"
              />
            </td>
            <td>
              <input
                type="button"
                value="6"
                onClick={() => handleButtonClick('6')}
                className="number"
              />
            </td>
            <td>
              <input
                type="button"
                value="*"
                onClick={() => handleButtonClick('*')}
                className="operator"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="button"
                value="1"
                onClick={() => handleButtonClick('1')}
                className="number"
              />
            </td>
            <td>
              <input
                type="button"
                value="2"
                onClick={() => handleButtonClick('2')}
                className="number"
              />
            </td>
            <td>
              <input
                type="button"
                value="3"
                onClick={() => handleButtonClick('3')}
                className="number"
              />
            </td>
            <td>
              <input
                type="button"
                value="-"
                onClick={() => handleButtonClick('-')}
                className="operator"
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="button"
                value="0"
                onClick={() => handleButtonClick('0')}
                className="number"
              />
            </td>
            <td>
              <input
                type="button"
                value="."
                onClick={() => handleButtonClick('.')}
                className="decimal"
              />
            </td>
            <td>
              <input
                type="button"
                value="="
                onClick={handleCalculate}
                className="equal"
              />
            </td>
            <td>
              <input
                type="button"
                value="+"
                onClick={() => handleButtonClick('+')}
                className="operator"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <input type="button" value="C" onClick={handleClear} className="clear" />
    </div>
  );
};

export default Calculator;
