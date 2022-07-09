import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './components/layout/Header'
import SignInAndSignUpPage from './pages/Sign-in-and-Sign-up'
import HomePage from './pages/HomePage' 


class App extends React.Component{
 
  render(){

    return (
      <BrowserRouter>
        <div className = 'App'>
          <Header />
          <Switch>
          {<Route exact path = '/' render = {props => (
              <HomePage {...props} />
            )} />}

            
            { <Route  
            exact path = '/signin'
            render = {() => this.props.auth.uid ? (<Redirect to = '/' />) : ( <SignInAndSignUpPage /> )} /> }

          </Switch>
        </div>
      </BrowserRouter>
    )
  }
};

const mapStateToProps = (state) => {
  return{
      authError: state.auth.authError,
      auth: state.firebase.auth
  }
}


export default connect(mapStateToProps)(App)

