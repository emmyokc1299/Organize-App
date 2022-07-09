import React, { Component } from 'react';
import {FaSistrix} from 'react-icons/fa';

import './search.css';

class Search extends Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    handleChange = event => {
        // In this handleChange function, as the value in the search field changes, the rows of the data will be
        // displayed  will be based on the value of the search field whenever that value changes 
        console.log('change');

    }

    handleSubmit = event => {
        event.preventDefault();
        console.log('submit')
    }


    render() {
        return (
            <div className = 'search'>
                <form onSubmit = {this.handleSubmit} className = 'search-form'>
                    <input 
                        className = 'search-input'
                        name = 'search'
                        type = 'text'
                        value = {this.state.searchInput}
                        onChange = {this.handleChange}
                        placeholder = 'Search by job name...'
                    />

                    <button type = 'submit' className = 'search-button'>
                        <FaSistrix  size = '2x' />
                    </button>
                </form>
            </div>
        )
    }
}

export default Search;
