import React from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Navigation from '../components/Navigation';
import Grid from '@material-ui/core/Grid';


export default class PersonList extends React.Component {

  state = {
    name: '',
    result: [],
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

    axios.get(`https://newsapi.org/v2/everything?q=apple&from=2020-01-18&to=2020-01-18&sortBy=popularity&apiKey=66d4965851db4b4b9300f15d13443cfe`)
      .then(res => {
        // console.log(res.data.articles);
        const result = res.data.articles;
        this.setState({ result });
        // console.log(this.state.result);
      })
  }


  render() {

    return (
      <div onLoad={this.MyApp}>

        <Navigation></Navigation>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
        <Grid container spacing={4}>


          {this.state.result.map((result, i) =>
            <Grid item md={3} sm={6}  >
              <Card id={i} author={result.author} title={result.title}
                description={result.description} url={result.urlToImage} date={result.publishedAt}
                content={result.content} />
            </Grid >

          )

          }


        </Grid>





      </div>
    )
  }
}
