"use strict";

var test = function test() {
  return console.log("App.js is working from src directory");
};

test();

var app = {
  title: "Indecision App",
  subtitle: "This is some info",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderIndecisionApp();
  }
};

var removeAll = function removeAll() {
  app.options = [];
  renderIndecisionApp();
};

var appRoot = document.getElementById("app");

var renderIndecisionApp = function renderIndecisionApp() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      " ",
      app.title,
      " "
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      " ",
      app.subtitle,
      " "
    ),
    React.createElement(
      "button",
      { onClick: removeAll },
      " Remove All "
    ),
    React.createElement(
      "p",
      null,
      " ",
      app.options.length > 0 ? "Here are your options" : "No options",
      " "
    ),
    React.createElement(
      "p",
      null,
      " ",
      app.options.length,
      " "
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: app.options.indexOf(option) },
          " ",
          option,
          " "
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        " Add Option "
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderIndecisionApp();

/*const user = {
  userName: "Mike Tyson",
  userAge: 53,
  userLocation: "New York"
};

let getLocation = (location) => {
  if(location) {
    return <p>Location: {location}</p>;
  }
  return undefined;
};

const templateTwo = (
  <div>
    <h1> Name: {user.userName ? user.userName : "Anonymous"} </h1>
    {(user.userAge && user.userAge > 18) && <p> Age: {user.userAge} </p>}
    {getLocation(user.userLocation)}
  </div>
);*/

/*let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const templateTwo = (
        <div>
          <h1> Count: {count}</h1>
          <button onClick={addOne} className="button"> +1 </button>
          <button onClick={minusOne} className="button"> -1 </button>
          <button onClick={reset} className="button"> Reset </button>
        </div>
    );
    ReactDOM.render(templateTwo,appRoot);
};

renderCounterApp();*/
