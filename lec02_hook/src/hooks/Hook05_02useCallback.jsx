import React, { useCallback, useState } from 'react';
import Box from '../components/Box';

const Hook05_02useCallback = () => {

  const [isDark, setIsDark] = useState(false)
  const [size, setSize] = useState(185);

  // 1. 테마변경하기버튼을 클릭하면 박스스타일이 변경되지 않았음에도 
  //    Box.useEffect가 호출되는 문제가 발생!!
  // const boxStyle = () => {
  //   return {
  //     backgroundColor: 'mediumSeaGreen',
  //     width: `${size}px`,
  //     height: `${size}px`
  //   }
  // }

  // 2. 테마변경하기 클릭시 컴퍼넌트를 최적화하기 위해서 useCallback훅으로 정의
  const boxStyle = useCallback(() => {
    return {
      backgroundColor: 'mediumSeaGreen',
      width: `${size}px`,
      height: `${size}px`
    }   
  }, [size])


  return (
    <div  style={{ background: isDark ? 'black' : 'white'}}>
      <input type="number" 
        value={size}
        onChange={e => setSize(e.target.value)}
      />{'  '}
      <button onClick={() => setIsDark(!isDark)}>테마변경하기</button>
      <br />
      <Box boxStyle={boxStyle}/>
    </div>
  );
};

export default Hook05_02useCallback;