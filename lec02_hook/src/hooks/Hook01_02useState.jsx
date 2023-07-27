import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const fn_havyWork = () => {
  for(let i=1;i<=1000; i++) {}
  console.log(`엄청 무거운 작업 실행중...`);
  return ['손흥민', '이강인', '김민재'];
}

const Hook01_02useState = () => {

  // const [변수명, set함수명] = useState(초기값);
  const [now, setNow] = useState("yyyy.MM/dd hh:mm.ss");
  const [input, setInput] = useState("");
  
  // 변수상태의 초기화 방법
  // const [users, setUsers] = useState(['손흥민', '이강인', '김민재']);
  // const [users, setUsers] = useState(fn_havyWork());    // 변수 상태가 변경할 때 마다 실행
  const [users, setUsers] = useState(() => fn_havyWork()); // 콜백함수는 초기화할 때 한 번만 실행

  const handleTimeClick = () => {
    const time = new Date();
    // console.log(time.toLocaleDateString() + " " + time.toLocaleTimeString());
    setNow(time.toLocaleDateString() + " " + time.toLocaleTimeString())
  }

  const handleOnChange = (e) => {
    // console.log(e.target.name + " = " + e.target.value);
    setInput(e.target.value);
  }

  const handleAddClick = (e) => {
    // console.log(e.target.name + " = " + e.target.value);
    // setUsers([input, ...users])
    setUsers((prevValue) => {
      // console.log(`이전의 값 : ${prevValue}`);
      console.log('이전의 값', prevValue);
      return [input, ...users]
    })
  }

  return (
    <div>
      <h3>현재시간 : {now}</h3>{'  '}
      <button className="btn btn-primary" onClick={handleTimeClick}>새로고침</button>
      <hr />
      <input type="text" name="userName" onChange={handleOnChange} value={input}/>{'  '}
      <button className="btn btn-success" name="btnAdd" onClick={handleAddClick}>추가</button>
      <hr />
      {users.map((user, idx) => {
        return <p key={idx}>{idx} : {user}</p>
      })}
    </div>
  );
};

export default Hook01_02useState;