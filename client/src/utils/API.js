//the api call to the NYT 
//this file communicates with the API Routes file, which commmunicates with the controller who talks to server.js
import axios from 'axios';

export default {
    //api call to the NYT api, need to include search term, and start and end years as params
    getArticles: (query, startYear, endYear) => {
        const apiKey = "api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
        return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?' + apiKey + '&q=' + query + '&begin_date=' + startYear + '&end_date=' + endYear)
    },
    //add article to the mongdb //look like above and then axios post to the apiroutes file post method
    postArticle: () => {
        return axios.post('../../routes/apiRoutes');
    }

    //remove article from mongoDB/saved articles
    //deleteArticle
};

//test api url
// https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=e076d947932e43b88a684636f60089fd&q=persia&begin-date=19900101&end-date=20001212