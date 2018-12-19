import React from 'react';
import moment from 'moment';
// import React, {Component} from 'react';

// class Results extends Component {
//     state = {
//         results: [], 
//         saveArticle: false
//     }
//     render() {
//         return (
//             <div>
//                 <h3>Results Area</h3>
//                 {/* {console.log('props', props)} */}
            
//                 {this.state.results.map((article, index) => (
//                     <div className='article' key={index}>
//                         <h5>{article.headline.main}</h5>
//                         <h6>Published: {article.pub_date}</h6>
//                         <p><a href={article.web_url} rel='noopener noreferrer' target='_blank'>Link to Article</a></p>
//                         <button>Save Article</button>
//                     </div> 
//                     )
//                 )}
//             </div>
//         )
//     }
// };

const Results = (props) => {
    return (
        <div>
            <h3>Results Area</h3>
            {console.log('props', props)}
           
            {props.data.map((article, index) => (
                <div className='article' key={index}>
                    <h5>{article.headline.main}</h5>
                    <h6>Published: {moment(article.pub_date).format('MM/DD/YYYY h:MMA')}</h6>
                    <p><a href={article.web_url} rel='noopener noreferrer' target='_blank'>Link to Article</a></p>
                    <button onClick={props.handleSaveArticle}>Save Article</button>
                </div> 
                )
            )}
        </div>
    );
};

export default Results;