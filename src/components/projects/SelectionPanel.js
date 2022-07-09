import React, { Component } from 'react';
import './selectionpanel.css';

class SelectionPanel extends Component {
    render() {
        return (
            <div className = 'selection'>
                <div className = 'general'>
                    <p>General</p>
                </div>
                <div className = 'finished'>
                    <p>Finished</p>
                </div>
                <div className = 'unfinished'>
                    <p>Unfinished</p>
                </div>
                <div className = 'paid-for'>
                    <p>Paid</p>
                </div>
                <div className = 'unpaid'>
                    <p>Unpaid</p>
                </div>
                <div className = 'review'>
                    <p>Review</p>
                </div>

            </div>
        )
    }
}

export default SelectionPanel;
