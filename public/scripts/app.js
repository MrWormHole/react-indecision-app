"use strict";

var test = function test() {
  return console.log("App.js is working from src directory");
};

test();

var app = {
  title: "Indecision App",
  subtitle: "This is some info",
  options: ["One", "Two"]
};

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
    "p",
    null,
    " ",
    app.options.length > 0 ? "Here are your options" : "No options",
    " "
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      " ",
      app.options[0],
      " "
    ),
    React.createElement(
      "li",
      null,
      " ",
      app.options[1],
      " "
    )
  )
);

var user = {
  userName: "Mike Tyson",
  userAge: 53,
  userLocation: "New York"
};

var getLocation = function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
  return undefined;
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    " Name: ",
    user.userName ? user.userName : "Anonymous",
    " "
  ),
  user.userAge && user.userAge > 18 && React.createElement(
    "p",
    null,
    " Age: ",
    user.userAge,
    " "
  ),
  getLocation(user.userLocation)
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
