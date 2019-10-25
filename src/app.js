import React from "react";
import ReactDOM from "react-dom";

let test = () => console.log("App.js is working from src directory");
test();

const appRoot = document.getElementById("app");

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleRandomPick = this.handleRandomPick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }

  componentDidMount() {
    console.log("componentDidMount!");
    const json = localStorage.getItem("options");
    if(json){
      const options = JSON.parse(json);
      this.setState(() => {
        return {
          options: options
        };
      })
    }
  }

  componentDidUpdate(prevProps,prevState) {
    console.log("componentDidUpdate!");
    if(prevState.options.length != this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options",json);
    }
  }

  componentWillUnmount() {
    console.log("haaaaah");
    //localStorage.clear(); //use this to wipe out local storage
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handleDeleteOption(option) {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((o) => option != o)
      };
    });
  }

  handleRandomPick() {
    const randomIndex = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomIndex];
    alert(option);
  }

  handleAddOption(option) {
    if(!option) {
      return "Enter valid value to add item!";
    }
    else if(this.state.options.indexOf(option) > -1) {
      return "This option already exits!"
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      };
    });
  }

  render() {
    const subtitle = "Life is weird";

    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0}
                handleRandomPick={this.handleRandomPick}/>
        <Options options={this.state.options}
                 handleDeleteOptions={this.handleDeleteOptions}
                 handleDeleteOption={this.handleDeleteOption}/>
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

const Header = (params) => {
  return (
    <div>
      <h1> {params.title} </h1>
      {params.subtitle && <h2> {params.subtitle} </h2>}
    </div>
  );
}

Header.defaultProps = {
  title: "Indecision"
};

const Action = (params) => {
  return (
    <div>
      <button onClick={params.handleRandomPick}
              disabled={!params.hasOptions}>
              What Should I Do?
      </button>
    </div>
  );
};

const Options = (params) => {
  return (
    <div>
      <button onClick={params.handleDeleteOptions}> Remove All </button>
      {params.options.length == 0 && <p> Please add an option to get started! </p>}
      <h5> {params.options.length} </h5>
      {
        params.options.map((option) => <Option key={params.options.indexOf(option)}
                                        optionText={option}
                                        handleDeleteOption={params.handleDeleteOption}/>)
      }
    </div>
  );
};

const Option = (params) => {
  return (
    <div>
      {params .optionText}
      <button onClick={(e) => {
        params.handleDeleteOption(params.optionText)
      }}> Remove </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    e.target.elements.option.value = "";
    this.setState(() => {
      return {
        error: error
      };
    });
  }

  render() {
    return (
      <div>
        {this.state.error && <p> {this.state.error} </p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button> Add Option </button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />,appRoot);

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
