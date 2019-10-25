import React from "react";
import AddOption from "./AddOption";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";

export default class IndecisionApp extends React.Component {
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
