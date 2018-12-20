import React from 'react';

const Search = (props) => {
    return (
        <div>
            <h3>Search Area</h3>
            <form>
                {/* wrap in a form element and make separate component */}
                <input
                    name='query'
                    value={props.query}
                    onChange={props.handleInput}
                    placeholder='Search Term'
                />
                <input
                    name='startYear'
                    value={props.startYear}
                    onChange={props.handleInput}
                    placeholder='Start Year'
                />
                <input
                    name='endYear'
                    value={props.endYear}
                    onChange={props.handleInput}
                    placeholder='End Year'
                />
                <button name='submit' onClick={props.handleSubmit}>Submit</button>
            </form>
        </div>
    )
};

export default Search;