"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var test = function test() {
  return console.log("App.js is working from src directory");
};
test();

var appRoot = document.getElementById("app");

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handleRandomPick = _this.handleRandomPick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("componentDidMount!");
      var json = localStorage.getItem("options");
      if (json) {
        var options = JSON.parse(json);
        this.setState(function () {
          return {
            options: options
          };
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      console.log("componentDidUpdate!");
      if (prevState.options.length != this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("haaaaah");
      //localStorage.clear(); //use this to wipe out local storage
    }
  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(option) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (o) {
            return option != o;
          })
        };
      });
    }
  }, {
    key: "handleRandomPick",
    value: function handleRandomPick() {
      var randomIndex = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomIndex];
      alert(option);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return "Enter valid value to add item!";
      } else if (this.state.options.indexOf(option) > -1) {
        return "This option already exits!";
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat([option])
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var subtitle = "Life is weird";

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, { hasOptions: this.state.options.length > 0,
          handleRandomPick: this.handleRandomPick }),
        React.createElement(Options, { options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(params) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      " ",
      params.title,
      " "
    ),
    params.subtitle && React.createElement(
      "h2",
      null,
      " ",
      params.subtitle,
      " "
    )
  );
};

Header.defaultProps = {
  title: "Indecision"
};

var Action = function Action(params) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: params.handleRandomPick,
        disabled: !params.hasOptions },
      "What Should I Do?"
    )
  );
};

var Options = function Options(params) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: params.handleDeleteOptions },
      " Remove All "
    ),
    params.options.length == 0 && React.createElement(
      "p",
      null,
      " Please add an option to get started! "
    ),
    React.createElement(
      "h5",
      null,
      " ",
      params.options.length,
      " "
    ),
    params.options.map(function (option) {
      return React.createElement(Option, { key: params.options.indexOf(option),
        optionText: option,
        handleDeleteOption: params.handleDeleteOption });
    })
  );
};

var Option = function Option(params) {
  return React.createElement(
    "div",
    null,
    params.optionText,
    React.createElement(
      "button",
      { onClick: function onClick(e) {
          params.handleDeleteOption(params.optionText);
        } },
      " Remove "
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);
      e.target.elements.option.value = "";
      this.setState(function () {
        return {
          error: error
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          " ",
          this.state.error,
          " "
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            " Add Option "
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), appRoot);

/*class Counter extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
    };
  }

  handleAddOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    })
  }

  handleReset(){
    this.setState(() => {
      return {
        count: 0
      };
    })
  }

  componentDidMount() {
    const countStr = localStorage.getItem("count");
    const count = parseInt(countStr, 10);

    if(!isNaN(count)) {
      this.setState(() => {
        return {
          count: count
        };
      });
    }
  }

  componentDidUpdate(prevProps,prevState) {
    if(prevState.count != this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }

  render() {
    return(
      <div>
        <h1> Count: {this.state.count} </h1>
        <button onClick={this.handleAddOne}> +1 </button>
        <button onClick={this.handleMinusOne}> -1 </button>
        <button onClick={this.handleReset}> reset </button>
      </div>
    );
  }
}

ReactDOM.render(<Counter/>,appRoot);*/
