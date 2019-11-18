import React, {Component} from 'react-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDom from 'react-dom';


// export default class Forms extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }
export default class PersonList extends React.Component{

    state={  
      hai:[]
    }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
      const hai=res.data;
      this.setState({hai});
    })
  }
  render() {
    return (
    <ul>{ this.state.hai.map(hai => [<li>{hai.name}</li>,<li>{hai.email}</li>])}
  </ul>
    )
  }
  }
  