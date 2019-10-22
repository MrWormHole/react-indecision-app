let test = () => console.log("App.js is working from src directory");

test();

const app = {
  title: "Indecision App",
  subtitle: "This is some info",
  options: ["One","Two"]
};

const template = (
  <div>
   <h1> {app.title} </h1>
   {app.subtitle && <p> {app.subtitle} </p>}
   <p> {app.options.length > 0 ? "Here are your options" : "No options"} </p>
   <ol>
    <li> {app.options[0]} </li>
    <li> {app.options[1]} </li>
   </ol>
  </div>
);

const user = {
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
);
const appRoot = document.getElementById("app");

ReactDOM.render(template,appRoot);
