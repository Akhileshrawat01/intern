import React from "react";
import AnimatedModal from "./components/animated-modal.component";
import Cardcomponent from "./components/card";
import JsonDataDisplay from "./components/Table";
import Notes from "./components/notes"
function App() {
  return (
    <div className="App">
      <AnimatedModal />
      <Cardcomponent />
      <br></br>
      <JsonDataDisplay />
      <br></br>
      <Notes /><br></br>
    </div>
  );
}
export default App;
