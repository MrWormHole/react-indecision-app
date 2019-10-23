let test = () => console.log("App.js is working from src directory");
test();

const appRoot = document.getElementById("app");

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleRandomPick = this.handleRandomPick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
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
    const title = "Indecision";
    const subtitle = "Life is weird";

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0} handleRandomPick={this.handleRandomPick}/>
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1> {this.props.title} </h1>
        <h2> {this.props.subtitle} </h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleRandomPick} disabled={!this.props.hasOptions}> What Should I Do? </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}> Remove All </button>
        <h5> {this.props.options.length} </h5>
        {
          this.props.options.map((option) => <Option key={this.props.options.indexOf(option)} optionText={option}/>)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p> {this.props.optionText} </p>
      </div>
    );
  }
}

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

ReactDOM.render(<IndecisionApp/>,appRoot);

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
