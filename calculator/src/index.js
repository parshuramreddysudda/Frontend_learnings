import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';



class Car extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            input:"",
          firNum:"",
          operator:"",
          secNum:""
        };
        this.addtoInput=this.addtoInput.bind(this);
        this.addtoOperator=this.addtoOperator.bind(this);
        this.clearAll=this.clearAll.bind(this);
        this.evaluate=this.evaluate.bind(this);
      }

      addtoInput(event) {
        this.setState({ input: this.state.input + event.target.value });
        // alert(ev.target.value);
      }
      addtoOperator(event){
          
        console.log(event.target.value);

          this.setState({firNum: this.state.input});
          this.setState({operator: event.target.value});
          this.setState({input: ""});

    //    console.log(this.state.operator);

      }
      evaluateTest=(num1,num2,sign)=>{
        
        switch (sign) {
          case "+":
            return num1+num2;
          case "-":
            return num1-num2;
          default:
            return 0;
        }

      }
      evaluate() {
        this.state.secNum=this.state.input;
        if(this.state.operator === "+") {
          this.setState({
            input: parseInt(this.state.secNum) + parseInt(this.state.firNum)
          });
        }
        else if(this.state.operator === "-") {
          this.setState({
            input: parseInt(this.state.secNum) - parseInt(this.state.firNum)
          });
        }
        else if(this.state.operator === "*") {
          this.setState({
            input: parseInt(this.state.secNum) * parseInt(this.state.firNum)
          });
        }
        else if(this.state.operator === "/") {
          this.setState({
            input: parseInt(this.state.secNum) / parseInt(this.state.firNum)
          });
        }
        else if(this.state.operator === "%") {
          this.setState({
            input: parseInt(this.state.secNum) % parseInt(this.state.firNum)
          });
        }
      };
      clearAll(){
       

            this.setState({ input: "",
                            operator: "" 
          });
          };


 
 render(){
     return(
<div className="calculator card">

<input type="text" className="calculator-screen z-depth-1" value={this.state.input} disabled />

<div className="calculator-keys">

  <button type="button" onClick={this.addtoOperator} className="operator btn btn-info" value="+">+</button>
  <button type="button" onClick={this.addtoOperator}  className="operator btn btn-info" value="-">-</button>
  <button type="button" onClick={this.addtoOperator}  className="operator btn btn-info" value="*">&times;</button>
  <button type="button" onClick={this.addtoOperator}  className="operator btn btn-info" value="/">&divide;</button>


  <button type="button" value="7"  onClick={this.addtoInput} className="btn btn-light waves-effect">7</button>
  <button type="button" value="8" onClick={this.addtoInput}  className="btn btn-light waves-effect">8</button>
  <button type="button" value="9" onClick={this.addtoInput}  className="btn btn-light waves-effect">9</button>


  <button type="button" value="4" onClick={this.addtoInput}  className="btn btn-light waves-effect">4</button>
  <button type="button" value="5" onClick={this.addtoInput}  className="btn btn-light waves-effect">5</button>
  <button type="button" value="6" onClick={this.addtoInput}  className="btn btn-light waves-effect">6</button>


  <button type="button" value="1" onClick={this.addtoInput}  className="btn btn-light waves-effect">1</button>
  <button type="button" value="2" onClick={this.addtoInput} className="btn btn-light waves-effect">2</button>
  <button type="button" value="3" onClick={this.addtoInput}  className="btn btn-light waves-effect">3</button>


  <button type="button" value="0" onClick={this.addtoInput}  className="btn btn-light waves-effect">0</button>
  <button type="button" onClick={this.addtoOperator}  className="operator btn btn-info" value="%">%</button>
  <button type="button" onClick={this.clearAll} className="all-clear function btn btn-danger btn-sm" value="all-clear">AC</button>

  <button type="button" onClick={this.evaluate} className="equal-sign operator btn btn-default" value="=">=</button>

</div>
</div>

     )
 }
}
ReactDOM.render(<Car />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();