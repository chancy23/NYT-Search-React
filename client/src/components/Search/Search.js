import React from 'react';
import './Search.css';

const Search = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col s12 center header">
                    <h4>Search</h4>
                </div>
            </div>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                            name='query'
                            value={props.query}
                            onChange={props.handleInput}
                            placeholder='Search Term'
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input
                            name='startYear'
                            value={props.startYear}
                            onChange={props.handleInput}
                            placeholder='Start Year'
                            />
                        </div>
                        <div className="input-field col s6">
                            <input
                            name='endYear'
                            value={props.endYear}
                            onChange={props.handleInput}
                            placeholder='End Year'
                            />
                        </div>
                    </div>
                    <button className='btn waves-effect waves-light submitBtn' name='submit' onClick={props.handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
};

export default Search;