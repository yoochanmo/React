import React, { useState } from 'react';
import Page from '../pages/Page';

// 부모의 데이터를 자식에게 전달할 경우 props를 통해서 전달하게 되는 경우
// 수 많은 자식컴퍼넌트가 있을 경우에 모든 자식컴퍼넌트에게 props를 전달하게
// 되는 문제가 발생한다. 이럴 경우 react는 useContext라는 API를 제공한다.
// Context를 전역적인 데이터로 부모컴퍼넌트에서 정의하게 되면 props를 자식에게
// 전달하지 않아도 자식컴퍼넌트에서 공유할 수 있도록 한다.
//
// useContext 훅은 Context로 정의된 정보를 자식컴퍼넌트에서 사용할 수 있게 한다.
// Context를 사용하면 prpos를 사용하지 않아도 되는 것 처럼 볼 수 있으나 실제로
// Context를 사용할 경우 컴퍼넌트를 재사용하기가 어려워지는 단점이 있다.
// 따라서, Context를 사용할 경우 꼭 필요할 때만 사용하는 것을 권장한다.
// props를 전달하는 것을 Props Drilling이라 하는데 Props Drilling을 피하기 위한
// 목적이라면 Componet Composition(컴퍼넌트합성)을 고려해야 한다.

const Hook06_01useContext = () => {

  const [isDark, setIsDark] = useState(false);

  return (
      <Page isDark={isDark} setIsDark={setIsDark} />
  );
};

export default Hook06_01useContext;