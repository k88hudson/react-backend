const React = require("react");
const ReactDOM = require("react-dom/server");
const createStore = require("./lib/create-store-child");

const Root = require("./Root");

function saveHTML(count) {
  const html = ReactDOM.renderToString(<Root count={count} />);
  localStorage.setItem("props", JSON.stringify({count}));
  localStorage.setItem("html", html);
}

let count = 99;
const interval = setInterval(() => {
  saveHTML(count);
  if (count > 0 ) {
    count--;
  } else {
    clearInterval(interval);
  }
}, 1000);
