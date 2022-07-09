import React, { Component } from 'react';
import {BiX} from 'react-icons/bi';
import {connect} from 'react-redux';
import { removeModal, updateProject } from '../../store/actions/projectActions';

import './editmodal.css';

class EditModal extends Component {

    constructor(props){
        super(props)
        this.state = {
            workName: this.props.selectedData.workName,
            dateAccepted: this.props.selectedData.dateAccepted,
            paid: this.props.selectedData.paid,
            initial_paid: this.props.selectedData.paid,
            status: this.props.selectedData.status,
            initial_status: this.props.selectedData.status,
            price: this.props.selectedData.price,
            review: this.props.selectedData.review,
            initial_review: this.props.selectedData.review,
    }
}

    handleClose = event => {
        event.preventDefault();
        this.props.removeModal();
    }

    handleChange = event => {
        // this unusual handleChange look is to ensure that the boolean values
        // remain boolean values and not the string data type that onChange causes  
        let {value, name} = event.target
        if (value !== 'true' && value !== 'false'){
            this.setState({[name] : value})
        }
        else if ( value === 'true' || value === 'false'){
            this.setState({[name]: JSON.parse(value)})
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {workName, dateAccepted, paid, status, price, review} = this.state
        const {createdAt, authorId, id, displayName} = this.props.selectedData

        if(workName !== '' && dateAccepted !== '' && price !== ''){
            this.props.updateProject({workName, dateAccepted, paid, status, price, review, createdAt, authorId, id, displayName})
            this.props.removeModal()
        }
        else{
            alert("Please make sure no field is empty")
        }
    }





    render() {
        const {showModal} = this.props 
        console.log(this.state)
        return (
            <div className = {showModal ? 'modal display-block' : 'modal display-none'}>
                <section className = 'modal-main'>
                    <div className = 'edit-div'> 
                        <form className = 'edit-work' >
                            <div className = 'edit-work-input'>
                            <div className = 'edit-form-options'>Enter job name </div>
                                <input 
                                className = 'edit-work-name editing'
                                type = 'text'
                                name = 'workName'
                                value = {this.state.workName}
                                onChange = {this.handleChange}
                                />
                            </div>

                            <div className = 'edit-date-input'>
                            <div className = 'edit-form-options'>Date </div>
                                <input 
                                className = 'edit-date editing'
                                type = 'date'
                                name = 'dateAccepted'
                                value =  {this.state.dateAccepted}
                                onChange = {this.handleChange}
                                />
                            </div>

                            <div className = 'edit-paid-input'>
                                <div className = 'edit-form-options '>Paid?</div>
                                <select className = 'edit-paid editing'  name = 'paid' onChange = {this.handleChange}>
                                    {this.state.initial_paid ? (
                                        <>
                                            <option value =  {true}>Yes</option>
                                            <option value = {false}>No</option>
                                        </>
                                        ):  
                                        <> 
                                            <option value = {false}>No</option>
                                            <option value =  {true}>Yes</option>
                                        </> }
                                </select>
                            </div>

                            <div className = 'edit-status-input'>
                                <div className = 'edit-form-options'>Status</div>
                                <select className = 'edit-status editing'  name = 'status' onChange = {this.handleChange}>
                                    {this.state.initial_status ? (
                                    <>
                                        <option value =  {true}>Done</option>
                                        <option value = {false}>In Progress</option>
                                    </>
                                    ):  
                                    <> 
                                        <option value = {false}>In Progress</option>
                                        <option value =  {true}>Done</option>
                                    </> }
                                </select>
                            </div>

                            <div className = 'edit-price-input'>
                                <div className = 'edit-form-options'>Price</div>
                                <div>
                                    <span className = 'edit-dollar'>$</span>
                                    <input 
                                    className = 'edit-price editing'
                                    type = 'number'
                                    name = 'price'
                                    value = {this.state.price}
                                    onChange = {this.handleChange}
                                    />
                                </div>
                            </div>

                            <div className = 'edit-review-input'>
                                <div className = 'edit-form-options'>Review?</div>
                                <select className = 'edit-review editing'  name = 'review' onChange = {this.handleChange}>
                                    {this.state.initial_review ? (
                                        <>
                                            <option value =  {true}>Under review</option>
                                            <option value = {false}>No review</option>
                                        </>
                                    ):  <> 
                                            <option value = {false}>No review</option>
                                            <option value =  {true}>Under review</option>
                                        </>
                                    }
                                </select>
                            </div>
                        </form>
                    </div>

                    <div className = 'edit-button' onClick = {this.handleSubmit}>
                        Edit
                    </div>
                    <div className = 'cancel' onClick = {this.handleClose}>
                        <BiX />
                    </div>
                            
                </section>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    showModal: state.project.showModal,
    selectedData: state.project.selectedData
});

const mapDispatchToProps = dispatch => ({
    removeModal: () => dispatch(removeModal()),
    updateProject: (project) => dispatch(updateProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);