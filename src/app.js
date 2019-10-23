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

const appRoot = document.getElementById("app");

const renderIndecisionApp = () => {
  const template = (
    <div>
     <h1> {app.title} </h1>
     {app.subtitle && <p> {app.subtitle} </p>}
     <button onClick={removeAll}> Remove All </button>
     <p> {app.options.length > 0 ? "Here are your options" : "No options"} </p>
     <p> {app.options.length} </p>
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
