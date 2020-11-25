import React, { useState } from 'react';
import Counter from './Counter.js'
import './App.css';

function App (){

  let[count, setCount] = useState(0);
  let[dayTime, setDayTime] =useState(false);

  return(
    <div className={`container ${dayTime ? `morningpic` :`nightpic`}`}> 
      <Counter Counter={count}/>
      <br />
      <p className="text2">It's {dayTime ? `Morning` : `Night`}</p>
      <br />
      <div>
        <button className="btn1" onClick={() => setCount(--count)}>Decrement</button>
        <button className="btn2" onClick={() => setDayTime(!dayTime)}>Update Day Time</button>
        <button className="btn3" onClick={() => setCount(++count)}>Increment</button>
      </div>
    </div>
  );
}

export default App;