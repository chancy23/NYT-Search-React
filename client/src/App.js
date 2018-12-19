import React, { Component } from 'react';
import Results from './components/Results';
import Search from './components/Search';
// import Saved from './components/Saved';
import './App.css';
import API from './utils/API';

class App extends Component {
  state = {
    query: '',
    startYear: '',
    endYear: '',
    results: [],
    savedArticles: []
  };

  componentDidMount() {
    console.log('componenet mounted');
    //if saved articles call the method to load them to the page
  };

  //need to include the this.state.query, startYear and endYear as params
  getArticles = () => {
    //format years to match the format required by NYT
    const formattedStartYear = this.state.startYear + '0101';
    const formattedEndYear = this.state.endYear + '1231';
    API.getArticles(this.state.query, formattedStartYear, formattedEndYear)
    .then((response) =>{
      console.log("start date", formattedStartYear);
      console.log("end date", formattedEndYear);
      this.setState({results: response.data.response.docs});
      console.log('results', this.state.results);
    })
    .catch(err => console.log(err))
  };

  handleInput = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.getArticles();
  };

  //need to fix this route, look at gitlab activities
  handleSaveArticle = (event) => {
    event.preventDefault();
    //call api method to save article
    API.postArticle()
    .then((response) => {
      this.setState({savedArticles: response})
    })
    .catch(err => console.log(err))
  };

  render() {
    return (
      <div>
        <h1>NYT Search React App</h1>
        <Search 
          query={this.state.query}
          startYear={this.state.startYear}
          endYear={this.state.endYear}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
        <Results 
        data={this.state.results}
        handleSaveArticle={this.handleSaveArticle} />
        {/* make a saved articles component */}
      </div>
    
    );
  }
}

export default App;
