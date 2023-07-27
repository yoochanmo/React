import React, { useState } from 'react';
import Timer from '../components/Timer';

const Hook02_02useEffect = () => {

  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
};

export default Hook02_02useEffect;