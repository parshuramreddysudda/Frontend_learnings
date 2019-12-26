import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Amcharts from '../src/amcharts/amchartWork';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondChart from '../src/amcharts/secChart';
import Third from '../src/amcharts/thirdPie';

const marginAuto={
    margin:'auto'
}

class Index extends React.Component{

constructor(props){
super(props);
this.state={
       
   comName:"Apple",
   pageName:"Dashboard",
   auth:"Login"

};
}


    render(){
        return(  
            
            <div>    
            <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
                <a href="/" className="navbar-brand d-flex w-50 mr-auto">{this.state.comName}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse w-100" >
                    <ul className="navbar-nav w-100 justify-content-center">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">{this.state.pageName}</a>
                        </li>
                      
                    </ul>
                    <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link" href="#">{this.state.auth}</a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
           

           
            <div className="container" style={marginAuto}>
             
           <div className="row">
<div className="col-md-6">
    <Amcharts/>

</div>
<div className="col-md-6">
    <SecondChart/>

</div>
<div className="col-md-6">
    
<Third></Third>
</div>
<div className="col-md-6">
    

</div>

           </div>
              
 
            </div>
            </div>
            )
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
