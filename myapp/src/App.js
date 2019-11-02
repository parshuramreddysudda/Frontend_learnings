import React from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <h1>This is the App JS folder</h1>
      </header>
    </div>
  );

}
 const testElement=(
   <div>
     <h2>This is the Main H2 component</h2>
     <img src={{logo}} className="App-logo" alt="This is the Logo Img"/>
   </div>
 );
 ReactDom.render(testElement,document.getElementById('test'));

export default App;
