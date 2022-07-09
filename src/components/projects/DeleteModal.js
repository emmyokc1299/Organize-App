import React, { Component } from 'react';
import {connect} from 'react-redux';
import { deleteProject, removeDelete } from '../../store/actions/projectActions';

import './deletemodal.css';

class EditModal extends Component {

    constructor(props){
        super(props)
        this.state = {

    }
}

    handleClose = event => {
        event.preventDefault();
        this.props.removeDelete();
    }

    

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.deleteProject(this.props.selectedData)
        this.props.removeDelete()

    }

    render() {
        const {showDelete, selectedData} = this.props 
        return (
            <div className = {showDelete ? 'deletemodal display-block' : 'deletemodal display-none'}>
                <section className = 'deletemodal-main'>
                    <div className = 'delete-div'> 
                       {`Are you sure you want to delete this project on ${selectedData.workName} ? `} 
                    </div>

                    <div className = 'delete-button' onClick = {this.handleSubmit}>
                        Yes
                    </div>
                    <div className = 'cancel-delete' onClick = {this.handleClose}>
                        No
                    </div>
                            
                </section>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    showDelete: state.project.showDelete,
    selectedData: state.project.selectedData
});

const mapDispatchToProps = dispatch => ({
    removeDelete: () => dispatch(removeDelete()),
    deleteProject: project => dispatch(deleteProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);