import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Amcharts from '../src/amcharts/amchartWork';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondChart from '../src/amcharts/secChart';
import Third from '../src/amcharts/thirdPie';
import Fourth from '../src/amcharts/fourthChart';

const marginAuto = {
    margin: 'auto'
}

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            comName: "Apple",
            pageName: "Dashboard",
            auth: "Login"

        };
    }


    render() {
        return (

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
                        <div className="col-md-6" style={{margin:'2vh auto'}}>
                            <Amcharts />

                        </div>
                        <div className="col-md-6">
                            <SecondChart />

                        </div>
                        <div className="col-md-6">
                            <h4>Using Legends</h4>

                            <Third></Third>
                        </div>
                        <div className="col-md-6">
                            <h3>Disabling/ Enabling various Properties</h3>

<Fourth></Fourth>
                        </div>

                    </div>


                </div>

                <footer className="page-footer font-small blue pt-4">


                    <div className="container-fluid text-center text-md-left">


                        <div className="row">


                            <div className="col-md-6 mt-md-0 mt-3">


                                <h5 className="text-uppercase">This is the HEadimg</h5>
                                <p>Use row and cols content or company Info</p>

                            </div>


                            <hr className="clearfix w-100 d-md-none pb-3"/>


                                <div className="col-md-3 mb-md-0 mb-3">

                                    <h5 className="text-uppercase">Links</h5>

                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#!">Link 1</a>
                                        </li>
                                         
                                    </ul>

                                </div>



                                <div className="col-md-3 mb-md-0 mb-3">


                                    <h5 className="text-uppercase">Links</h5>

                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#!">Link 1</a>
                                        </li>
                                        
                                    </ul>



                                </div>
                           </div>

  </div>



                            <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="#"> Footer of {this.state.comName}</a>
                            </div>
 

</footer>

                    </div>
                    )
            }
        }
ReactDOM.render(<Index />, document.getElementById('root'));
                    
                    // If you want your app to work offline and load faster, you can change
                    // unregister() to register() below. Note this comes with some pitfalls.
                    // Learn more about service workers: https://bit.ly/CRA-PWA
                    serviceWorker.unregister();
