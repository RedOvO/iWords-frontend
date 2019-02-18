import React, { Component } from 'react';
import {
	browserHistory,
	Router,
	Route,
	//IndexRoute,
	IndexRedirect,
} from 'react-router';
import UserMain from '../UserMain'
import Login from '../pages/login/login'
import SignUp from '../pages/signup/signup'

class WebRouter extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path='/'>
					<IndexRedirect to='/login' />
					<Route path='login' Component={Login} />
					<Route path='signup' Component={SignUp} />
				</Route>
			</Router>
		)
	}
}

export default WebRouter;