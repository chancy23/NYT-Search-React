import React, { Component } from 'react';
import Results from './components/Results';
import Search from './components/Search';
import Saved from './components/Saved';
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
    //if saved articles call the method to load them to the page
    this.getSavedArticles();
  };

  //include the this.state.query, startYear and endYear as params
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
  handleSaveArticle = (id) => {
    //this gets the props._id for the article that the button was clicked on and grabs the data associated with it
    const findArticleByID = this.state.results.find((el) => el._id === id);
    const articleToSave = {title: findArticleByID.headline.main, url: findArticleByID.web_url, date: findArticleByID.pub_date};
    console.log('article to save data', articleToSave);
    //call api method to save article (need to send the articles headline, link, and pub date)
    API.saveArticle(articleToSave)
      .then(this.getSavedArticles())
      .catch(err => console.log(err))
  };

  getSavedArticles = () => {
    API.getSavedArticles()
      .then(response => {
        // console.log("res from db", res);
        this.setState({savedArticles: response.data})
      })
      .catch(err => console.log(err))
  };

  handleDelete = (id) => {
    //get the article ID for the article delete button is on
    const findArticleByID = this.state.savedArticles.find((el) => el._id === id);
    const articleID = findArticleByID._id;
    // console.log('article id', articleID);
    API.deleteArticle(id)
      .then(() => {
        console.log('article removed from db:', articleID);
        this.getSavedArticles()
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
          handleSaveArticle={this.handleSaveArticle} 
        />
        <Saved 
          data={this.state.savedArticles}
          handleDelete={this.handleDelete}
        />
      </div>
    
    );
  }
}

export default App;
