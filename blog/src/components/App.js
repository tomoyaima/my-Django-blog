import React from "react";
import ReactDOM from "react-dom";
const App = () => {
  return (
    <div>
      <p>React here!</p>
      <a href="post/list">社畜ブログ</a>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));