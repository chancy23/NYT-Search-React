//the api call to the NYT 
//this file communicates with the Routes > API folder, which commmunicates with the controller who talks to server.js
import axios from 'axios';

export default {
    // call to the NYT api
    getArticles: (query, startYear, endYear) => {
        const apiKey = "api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
        return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?' + apiKey + '&q=' + query + '&begin_date=' + startYear + '&end_date=' + endYear)
    },
    //add article to the mongdb //look like above and then axios post to the apiroutes file post method
    saveArticle: (articleData) => {
        return axios.post('/api/articles', articleData);
    },
    //retrieve all saved articles from mongodb
    getSavedArticles: () => {
        return axios.get('/api/articles')
    }

    //remove article from mongoDB/saved articles need to reference ID from DB
    //deleteArticle
};

//test api url
// https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=e076d947932e43b88a684636f60089fd&q=persia&begin-date=19900101&end-date=20001212