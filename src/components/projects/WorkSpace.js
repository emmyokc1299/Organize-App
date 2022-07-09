import React, { Component } from 'react';
import './workspace.css';
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {BiPencil} from 'react-icons/bi'
import {FaTrash} from 'react-icons/fa'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import {connect} from 'react-redux';
import WorkItem from './WorkItem';
import EditModal from './EditModal'
import DeleteModal from './DeleteModal'

import {useEffect, useState} from 'react';

import data from './data'//

const WorkSpace = ({showModal, showDelete, projects, auth}) =>  {


    let [Projects, setProjects] = useState([])
    let [page, setPage] = useState(1)
    let resPerPage = 10
    const start = (page - 1) * resPerPage
    const end = page * resPerPage
    let [pages, setPages] = useState(1)

    useEffect(() => {
        projects && setProjects(projects)
        projects && setPages(Math.ceil(Projects.length / resPerPage))
    }, )
    

    const renderProjects = () => {
        return(
            Projects && (Projects.filter((el) => el.authorId == auth.uid).slice(start, end).map(el => <WorkItem key = {el.id} project = {el}/>))
        )
    }



    const onClick = (type) => {
        if(type === 'prev'){
            setPage(page - 1)
            console.log(page)
        }

    else if(type === 'next'){
            console.log(pages, page)
            setPage(page + 1)
            console.log(page)       
    }
    }
    


    return (
        <>
        <div className = 'work-space'>
            {Projects && renderProjects()}
        </div>
        <div className = 'paginate'>
            {page > 1 ? (<div className = 'left' onClick = {() => {onClick('prev')}}><FaAngleLeft size = '2x' color = '#ffa949'/></div>) : null}

            <div className = 'page'>{projects && page}</div>

            {page + 1 <= pages  ? <div className = 'right' onClick = {() => onClick('next')}><FaAngleRight size = '2x' color = '#ffa949'/></div> : null}
        </div>
        {showModal ? <EditModal />   /*<p>This is working</p>*/: null}
        {showDelete ? <DeleteModal /> : null }
        </>
    )
    

}

const mapStateToProps = (state) => ({
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    showModal: state.project.showModal,
    showDelete: state.project.showDelete
})

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects', orderBy: ['createdAt', 'desc']}
    ])
)(WorkSpace)



