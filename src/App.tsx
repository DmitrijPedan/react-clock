import React from 'react';
import Clock from "./components/clock/Clock";
import './App.scss';

function App() {
  return (
    <div className="app">
				<Clock size={'60vh'}/>
    </div>
  );
}

export default App;
