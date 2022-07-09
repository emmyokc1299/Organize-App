import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger'
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './store/reducers/rootReducer';
import App from './App';
import thunk from 'redux-thunk'
import {createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'


/*
If you encounter any problems just delete the logger middleware below
*/

const store = createStore(rootReducer, 
    compose(applyMiddleware(logger, thunk.withExtraArgument({getFirebase, getFirestore})), reduxFirestore(firebase, fbConfig) 
))

const rrfConfig = {
    useFirestoreForProfile: true,
    userProfile: 'users',
}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(
    <Provider store = {store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);

