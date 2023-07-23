import { useState } from 'react';

function App() {
  const [calcu, setCalcu] = useState("");
  const [shedegi, setShedegi] = useState("");
  
  const ops = ['/', '*', '+', '-', '.', '%', '÷', '+/-'];

  const updateCalc = value => {
    if (
      ops.includes(value) && calcu === '0' ||
      ops.includes(value) && ops.includes(calcu.slice(-1)
      ) 
    )
    {
      return;
    }
    setCalcu(calcu + value);

    if(!ops.includes(value)) {
      setShedegi(eval(calcu + value).toString());    
    }
  
  }

  const finalShedegi = () => {
    setCalcu(eval(calcu).toString());
  }

  const cbutton = () => {
    if(calcu == '') {
      return;
    }
    const value = calcu.slice(0, -1);

    setCalcu(value);
  }
  return (
    <div className="App">
      <div className="main-calc">
        <div className="screen">
          {shedegi ? <span>({shedegi})</span> : ''}&nbsp;{ calcu || '0' }
        </div>
        <div className="keycaps">
          <button onClick={cbutton}>C</button>
          <button onClick={() => updateCalc('+/-')}>+/-</button>
          <button onClick={() => updateCalc('%')}>%</button>
          <button onClick={() => updateCalc('÷')}>÷</button>
          <button onClick={() => updateCalc('7')}>7</button>
          <button onClick={() => updateCalc('8')}>8</button>
          <button onClick={() => updateCalc('9')}>9</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('4')}>4</button>
          <button onClick={() => updateCalc('5')}>5</button>
          <button onClick={() => updateCalc('6')}>6</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={() => updateCalc('1')}>1</button>
          <button onClick={() => updateCalc('2')}>2</button>
          <button onClick={() => updateCalc('3')}>3</button>
          <button onClick={() => updateCalc('+')}>+</button>
        </div>
        <div className="ops">
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={finalShedegi}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
