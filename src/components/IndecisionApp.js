import React from "react";
import AddOption from "./AddOption";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  componentDidMount = () => {
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

  componentDidUpdate = (prevProps,prevState) => {
    console.log("componentDidUpdate!");
    if(prevState.options.length != this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options",json);
    }
  }

  componentWillUnmount = () => {
    console.log("haaaaah");
    //localStorage.clear(); //use this to wipe out local storage
  }

  handleDeleteOptions = () => {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handleDeleteOption = (option) => {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((o) => option != o)
      };
    });
  }

  handleRandomPick = () => {
    const randomIndex = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomIndex];

    this.setState(() => {
      return {
        selectedOption: option
      };
    });
  }

  handleOkayButton = () => {
    this.setState(() => {
      return {
        selectedOption: undefined
      };
    });
  }

  handleAddOption = (option) => {
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

  render = () => {
    const subtitle = "Life is weird";

    return (
      <div>
        <Header subtitle={subtitle}/>
        <div className="container">
        <Action hasOptions={this.state.options.length > 0}
                handleRandomPick={this.handleRandomPick}/>
        <div className="widget">
          <Options options={this.state.options}
                  handleDeleteOptions={this.handleDeleteOptions}
                  handleDeleteOption={this.handleDeleteOption}/>
          <AddOption handleAddOption={this.handleAddOption}/>
        </div>
        </div>
        <OptionModal selectedOption={this.state.selectedOption}
                     handleOkayButton={this.handleOkayButton}/>
      </div>
    );
  }
}
