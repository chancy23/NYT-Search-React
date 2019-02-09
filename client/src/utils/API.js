//this file communicates with the Routes > API folder, which commmunicates with the controller who talks to server.js

import axios from 'axios';

export default {
  // call to the NYT api when using search
  getArticles: (query, startYear, endYear) => {
    const apiKey = "api-key=N5P6S7I1ytguwuyoVy2i2g4Qzmtduo3Q";
    return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?' + apiKey + '&q=' + query + '&begin_date=' + startYear + '&end_date=' + endYear)
  },
  //add article to the db
  saveArticle: (articleData) => {
    return axios.post('/api/articles', articleData);
  },
  //retrieve all saved articles from the db
  getSavedArticles: () => {
    return axios.get('/api/articles')
  },
  //remove article from mongoDB/saved articles need to reference ID from DB
  deleteArticle: (id) => {
    return axios.delete('/api/articles/' + id)
  }
};