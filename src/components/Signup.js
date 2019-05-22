import React, {Component} from 'react'
const initialState={
  a:'',
  b:'',
  c:''
}
export class Signup extends Component{
  constructor(){
    super();
    this.state={...initialState};
  }
  handleChange=(event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }
    
render(){
      console.log(initialState.a)
      console.log(this.state.a)
    return(
      <div>
        <input type="text" name="a" value={this.state.a} onChange={this.handleChange}></input><br/>
        <input type="text" name="b" value={this.state.b} onChange={this.handleChange}></input><br/>
        <input type="text" name="c" value={this.state.c} onChange={this.handleChange}></input>
      </div>
      
      )
  }
}