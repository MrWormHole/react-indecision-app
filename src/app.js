let test = () => console.log("App.js is working from src directory");
test();

const app = {
  title: "Indecision App",
  subtitle: "This is some info",
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if(option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderIndecisionApp();
  }
};

const removeAll = () => {
  app.options = [];
  renderIndecisionApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById("app");

const renderIndecisionApp = () => {
  const template = (
    <div>
     <h1> {app.title} </h1>
     {
       app.subtitle && <p> {app.subtitle} </p>
     }
     <p> {app.options.length > 0 ? "Here are your options" : "No options"} </p>
     <button onClick={removeAll}> Remove All </button>
     <button disabled={app.options.length == 0} onClick={onMakeDecision}> What should i do? </button>
     <ol>
     {
       app.options.map((option) => <li key={app.options.indexOf(option)}> {option} </li>)
     }
     </ol>
     <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button> Add Option </button>
     </form>
    </div>
  );
  ReactDOM.render(template,appRoot);
};

//renderIndecisionApp();

class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Life is weird";
    const options = ["Thing one","Thing two","Thing three","Thing four"];

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action/>
        <Options options={options}/>
        <AddOption/>
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
        <button> What Should I Do? </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <h5> {this.props.options.length} </h5>
        {
          this.props.options.map((option) => <Option key={this.props.options.indexOf(option)} optionText={option}/>)
          //this.props.options.map((option) => <p key={this.props.options.indexOf(option)}> {option} </p>)
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
  render() {
    return (
      <div>
        <h5> AddOption Component here </h5>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp/>,appRoot);

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
