import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import Button from "@material-ui/core/Button";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
   <div>    
    <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
        <a href="/" className="navbar-brand d-flex w-50 mr-auto">Company</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
            <ul className="navbar-nav w-100 justify-content-center">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="//codeply.com">Codeply</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
            </ul>
            <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                <li className="nav-item">
                    <a className="nav-link" href="#">Right</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Right</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Right</a>
                </li>
            </ul>
        </div>
    </nav>
    </div>
  );
}

export default App;
