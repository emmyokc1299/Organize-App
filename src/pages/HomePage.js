import React, { Component } from 'react';
import WorkForm from '../components/projects/WorkForm'
import WorkSpace from '../components/projects/WorkSpace'
import Search from '../components/projects/Search'
import SelectionPanel from '../components/projects/SelectionPanel'
import './homepage.css';

const  Homepage  = () => {
 
    return (
        <div className = 'home-page'>
            <WorkForm />
            <Search />
            <SelectionPanel />
            <WorkSpace />
        </div>
)
}


export default Homepage;

