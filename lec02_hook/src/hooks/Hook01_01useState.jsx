import React from 'react';
import { useState } from 'react';

const Hook01_useState = () => {

  const [time, setTime] = useState(10);

  const changeTime = () => {
    let newTime;
    if(time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  }
  console.log(`time상태가 변경되어 화면이 랜더링되었습니다!`);
  
  return (
    <div>
      <h1>현재시간 : {time}시</h1>{'  '}
      <button onClick={changeTime}>현재시간은?</button>
    </div>
  );
};

export default Hook01_useState;