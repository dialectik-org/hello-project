// @ts-ignore
import React, { useEffect, useState } from 'react';
// @ts-ignore
import Clock from 'react-clock';

import 'react-clock/dist/Clock.css';

export function RunningClock() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Current time:</p>
      <Clock value={value} />
    </div>
  );
}