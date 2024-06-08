import React, { useRef } from 'react'
import "./Home.css"
import circle_icon from "../components/circle.png"
import cross_icon from "../components/cross.png"

import { useState } from 'react';

let data = ["", "", "", "", "", "", "", "", ""];

const Home = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null)
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);
  let box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9]


  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      data[num] = "x";
      setCount(++count);
      console.log("this is good");
    }
    else {
      e.target.innerHTML = `<img src='${circle_icon}'>`
      data[num] = "O";
      setCount(++count);
    }
    checkWin()
  }

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    }
   else if  (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    }
    else if  (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    }
    else if  (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    }
    else if  (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    }
    else if  (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    }
    else if  (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
    else if  (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won([data[6]]);
    }
    else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    }
  }
  const won = (winner) => {
    setLock(true);
if(winner==="x"){
  titleRef.current.innerHTML=`Congratulations : <img src=${cross_icon}>`  
}
else{
   titleRef.current.innerHTML=`Congratulations : <img src=${circle_icon}>`
}
  }

const reset = ()=>{
  setLock(false);
  data = ["", "", "", "", "", "", "", "", ""];
  titleRef.current.innerHTML="Tic Tac Toe In <span>React<span/>"
  box_array.map((e)=>{
e.current.innerHTML=""
  })
}


  return (
    <div className='container'>
      <h1 ref={titleRef} className='title'>Tic Tac Toe Game In <span>React</span> </h1>
      <div className="board">
        <div className="raw1">
          <div ref={box1} className="boxes" onClick={(e) => { toggle(e, 0) }}></div>
          <div ref={box2} className="boxes" onClick={(e) => { toggle(e, 1) }}></div>
          <div ref={box3} className="boxes" onClick={(e) => { toggle(e, 2) }}></div>
        </div>
        <div className="raw2">
          <div ref={box4} className="boxes" onClick={(e) => { toggle(e, 3) }}></div>
          <div ref={box5} className="boxes" onClick={(e) => { toggle(e, 4) }}></div>
          <div ref={box6} className="boxes" onClick={(e) => { toggle(e, 5) }}></div>
        </div>
        <div className="raw3">
          <div ref={box7} className="boxes" onClick={(e) => { toggle(e, 6) }}></div>
          <div ref={box8} className="boxes" onClick={(e) => { toggle(e, 7) }}></div>
          <div ref={box9} className="boxes" onClick={(e) => { toggle(e, 8) }}></div>
        </div>

      </div>
      <button onClick={()=>{reset() }} className='reset'>Reset</button>

    </div>
  )
}

export default Home
