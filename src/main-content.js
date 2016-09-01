const React = require("react");
const ReactDOM = require("react-dom");
const createStore = require("./lib/create-store-child");

const rootElement = document.getElementById("root");

const props = JSON.parse(localStorage.getItem("props"));
console.log(props);

const Root = require("./Root");

ReactDOM.render(<Root {...props} />, rootElement);
