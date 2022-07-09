import React, { Component } from 'react';
import {BiPencil} from 'react-icons/bi'
import {FaTrash} from 'react-icons/fa'
import { connect } from 'react-redux';
import { displayDelete, displayModal, selectData } from '../../store/actions/projectActions';

import './workitem.css';


class WorkItem extends Component {

    state = {
        
    }

    handleClick = (event) => {
        event.preventDefault();
        this.props.displayModal()
        this.props.selectData(this.props.project)
    }

    handleDelete = (event) => {
        event.preventDefault()
        this.props.displayDelete()
        this.props.selectData(this.props.project)
    }

    render() {
        
        let {workName, price, dateAccepted, paid, review, status} = this.props.project
        workName = workName.length > 60 ? workName.slice(0, 60)+'...' : workName
        price = price.length > 6 ? '>$99999' : '$'+ price 
        return (
            <div className = 'work-item' >
                <div className = 'edit' onClick = {this.handleClick} ><BiPencil /></div> 

                <div className = 'row-job-name row-field'>
                    {workName}
                </div>
                <div className = 'row-date-accepted row-field'>
                    {dateAccepted} 
                </div>
                <div className = 'row-paid row-field'>
                    {paid ? 'Paid' : 'Not paid'}
                </div>
                <div className = 'row-status row-field'>
                    { review ? (status ? 'Done but under review' : 'Still ongoing and under review') : (status ? 'Done' : 'Still ongoing')} 
                </div>
                <div className="row-price row-field">
                    {price}
                </div>

                <div className = 'delete' onClick = {this.handleDelete}><FaTrash /></div>

            </div>

        )
    }
}



const mapDispatchToProps = dispatch => ({
    displayModal : () => dispatch(displayModal()),
    selectData: (data) => dispatch(selectData(data)),
    displayDelete: () => dispatch(displayDelete())
})


export default connect(null, mapDispatchToProps)(WorkItem);

