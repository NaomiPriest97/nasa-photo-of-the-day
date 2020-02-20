import React, { Component } from "react";
import DateInput from "./components/DateInput";
import Photo from "./components/Photo.js.js";
import "./App.css";


function App() {
  
  return (
    <div className="App">
    
      <NasaList/>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import DateInput from "./components/DateInput";

class App extends Component {
  render() {
    return (
      <div>
        <h1>NASA's Astronomy Picture of the Day</h1>
        <DateInput />
        <Photo />
      </div>
    );
  }
}
export default App;