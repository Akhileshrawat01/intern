import React from 'react';
import './App.css';

import AnimatedModal from "./components/animated-modal.component";
import Cardcomponent from "./components/card";
import JsonDataDisplay from "./components/Table"
function App() {
  return (
    <div className="App">
      <AnimatedModal />
      <Cardcomponent /><br></br>
      <JsonDataDisplay />
    </div>
  );
}
export default App;