import React from 'react';
import moment from 'moment';

const Saved = (props) => {
    return (
        <div>
            <h3>Saved Articles</h3>
            {/* .map() the saved articles array and render in this section */}
            {props.data.map((article, index) => (
                <div className='article' key={index}>
                    <h5>{article.headline.main}</h5>
                    <h6>Published: {moment(article.pub_date).format('MM/DD/YYYY h:MMA')}</h6>
                    <p><a href={article.web_url} rel='noopener noreferrer' target='_blank'>Link to Article</a></p>
                    <button id={article._id} onClick={props.handleDelete}>Delete Article</button>
                </div>)
            )}
        </div>
    )
};

export default Saved