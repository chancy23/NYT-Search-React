import React from 'react';
import moment from 'moment';

const Saved = (props) => {
    return (
        <div>
            <h3>Saved Articles</h3>
            {/* .map() the saved articles array and render in this section */}
            {props.data.map((article, index) => (
                <div className='article' key={index}>
                    <h5>{article.title}</h5>
                    <h6>Published: {moment(article.date).format('MM/DD/YYYY h:MMA')}</h6>
                    <p><a href={article.url} rel='noopener noreferrer' target='_blank'>Link to Article</a></p>
                    <button onClick={() => props.handleDelete(article._id)}>Delete Article</button>
                </div>)
            )}
        </div>
    )
};

export default Saved