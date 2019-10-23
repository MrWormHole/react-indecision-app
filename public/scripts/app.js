"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
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
      "p",
      null,
      " ",
      app.options.length > 0 ? "Here are your options" : "No options",
      " "
    ),
    React.createElement(
      "button",
      { onClick: removeAll },
      " Remove All "
    ),
    React.createElement(
      "button",
      { disabled: app.options.length == 0, onClick: onMakeDecision },
      " What should i do? "
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

//renderIndecisionApp();

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp() {
    _classCallCheck(this, IndecisionApp);

    return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
  }

  _createClass(IndecisionApp, [{
    key: "render",
    value: function render() {
      var title = "Indecision";
      var subtitle = "Life is weird";
      var options = ["Thing one", "Thing two", "Thing three", "Thing four"];

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, null),
        React.createElement(Options, { options: options }),
        React.createElement(AddOption, null)
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          " ",
          this.props.title,
          " "
        ),
        React.createElement(
          "h2",
          null,
          " ",
          this.props.subtitle,
          " "
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          null,
          " What Should I Do? "
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      var _this5 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h5",
          null,
          " ",
          this.props.options.length,
          " "
        ),
        this.props.options.map(function (option) {
          return React.createElement(Option, { key: _this5.props.options.indexOf(option), optionText: option });
        })
        //this.props.options.map((option) => <p key={this.props.options.indexOf(option)}> {option} </p>)

      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          " ",
          this.props.optionText,
          " "
        )
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h5",
          null,
          " AddOption Component here "
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), appRoot);

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
