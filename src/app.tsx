import React, { useState } from 'react';
import './app.css';

const App = () => {
  const [num, setNum] = useState(0);
  return (
    <div className="app">
      <h1 className="text-3xl font-bold underline">{num}</h1>
      <button onClick={() => setNum(num + 1)}>add one</button>
      <br />
      <h2 className="text-dark bg-gold">tailwind css</h2>
      <h2 className="text-dark bg-red-50">bg-red-50</h2>
    </div>
  );
};

export default <App />;
