import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

export default class App extends React.Component{

      state={
        name:''
      }
      nameChange= event=>{
       this.setState({name:event.target.value});
      }
      nameSubmit= event=>{
        const name={
          name:this.state.name};
            
          axios.post('https://jsonplaceholder.typicode.com/users',{name}).then(res=>{

          console.log(res);
          console.log(res.data);
          });

        }
    render(){
  return(
 
<div>
        <form onSubmit={this.nameSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.nameChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    
     

    
  )

    }
}