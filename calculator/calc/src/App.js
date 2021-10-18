import React, { Component } from "react";
import Button from "./components/Button";
import "./css/styles.css";

//import Button from './component/Button';

class App extends Component{
  // iniate the state 
  constructor(props)
  {
    super(props);

    this.state = {
      current: '0',
      previous: [],
      reset: false,
    }
  }
  // reset function for the buttons
  reset = ()=>
  {
    this.setState({current: '0', previous: [], reset: false})
  }
  // add data to the current state
  addToCurrent = (tag) => 
  {
    console.log(tag)
    if(["/","x","*","-"].indexOf(tag) > - 1)
    {
      let {previous} = this.state;
      previous.push(this.state.current + tag)
      this.setState({previous, reset: true});
    } 
    else
    {
      if ((this.state.current === "0" && tag !== ".") || this.state.reset)
      {
        this.setState({current: tag, reset: false})
      }
      else
      {
        this.setState({current: this.state.current + tag })
      }
    }  
  }

  calculate = (tag) => 
  {
    let {current, previous, reset} = this.state

    if (previous.length > 0)
    {
      current = eval(String(previous[previous.length - 1] + current))
      this.setState({current, previous: [], reset:true})
    }
  }

  render(){

    const buttons = [
      {tag: 'C', cols: 3, action: this.reset },
      {tag: '/', cols: 1, action: this.addToCurrent},
      {tag: '7', cols: 1, action: this.addToCurrent},
      {tag: '8', cols: 1, action: this.addToCurrent},
      {tag: '9', cols: 1, action: this.addToCurrent},
      {tag: '*', cols: 1, action: this.addToCurrent},
      {tag: '4', cols: 1, action: this.addToCurrent},
      {tag: '5', cols: 1, action: this.addToCurrent},
      {tag: '6', cols: 1, action: this.addToCurrent},
      {tag: '-', cols: 1, action: this.addToCurrent},
      {tag: '1', cols: 1, action: this.addToCurrent},
      {tag: '2', cols: 1, action: this.addToCurrent},
      {tag: '3', cols: 1, action: this.addToCurrent},
      {tag: '+', cols: 1, action: this.addToCurrent},
      {tag: '0', cols: 2, action: this.addToCurrent},
      {tag: '.', cols: 1, action: this.addToCurrent},
      {tag: '=', cols: 1, action: this.calculate},
    ];

    return (
      <div className="App">
        {this.state.previous.length > 0 ? 
          <div className="floaty-last">{this.state.previous[this.state.previous.length - 1]} </div>
        : null
        }
          <input className="result" type="text" value={this.state.current} ></input>

          {buttons.map((btn, i) => 
            {
              return <Button key={i} tag={btn.tag} cols={btn.cols} action={ (tag) => btn.action(tag)} />
            })
          }
      </div>
    )
  }
}

export default App;

//  Executing JavaScript from a string is an enormous security risk. It is far too easy for a bad actor to run arbitrary code when you use eval()