import React from 'react';
import axios from 'axios';
import Navigation from '../src/components/Navigation';


export default class PersonList extends React.Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const Appid = '6UT6K5-TKYR993W83';
    const user = {
      name: this.state.name
    };
    console.log(user.name);

    axios.get(`http://127.0.0.1:4010/pets`)
      .then(res => {console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <Navigation></Navigation>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}