//import the react and the react-dom libraries
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//create react component
const App = function () {
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter namee:
      </label>
      <input id="name" type="text" />
      <button
        style={{ backgroundColor: "blue", color: "white", border: "1px" }}
      >
        {getButtonText()}
      </button>
    </div>
  );
};

function getButtonText() {
  return "Click Me !";
}
// take the react component and show it on screen
ReactDOM.render(<App />, document.querySelector("#root"));

if (module.hot) {
  module.hot.accept();
}
