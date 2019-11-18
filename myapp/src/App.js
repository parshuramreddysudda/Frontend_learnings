import React, { Component } from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo, { ReactComponent } from './logo.svg';
import axios from 'axios';
import './App.css';

export default class PersonList extends React.Component{

  state={  
    Persons:[]
  };
}
function Api() {
  return (
  
     class App extends Component {
       constructor(){
         super();
       }
       componentWillMount(){
         this.getApi();
       }
       getApi(){
         var xr=new XMLHttpRequest();
         xr.addEventListener('load',() => {console.log(xr.response)}) ;
         xr.open('GET','https://dog.ceo/api/breeds/list/all');
         xr.send();
       }
     }
  );

}
const apiElement=(
  <div  className="card">
  <h2 style={{color:'black'}}>This is the testing Boostrap File</h2>
  <div className="row card">
    <div className="col-md-4">

    <img src={logo} className="App-logo" alt="This is the Logo Img"/>
    </div>
    <div className="col-md-4">
    <img src={logo} className="App-logo" alt="This is the Logo Img"/>
    </div>
    <div className="col-md-4">
    <img src={logo} className="App-logo" alt="This is the Logo Img"/>
      </div>


  </div>
  </div>
);
ReactDom.render(apiElement,document.getElementById('test'));

 const testElement=(
   <div>
     <h2>This is the Main H3 component</h2>
     <img src={logo} className="App-logo" alt="This is the Logo Img"/>
   </div>
 );
//  ReactDom.render(testElement,document.getElementById('test'));

export default App;
