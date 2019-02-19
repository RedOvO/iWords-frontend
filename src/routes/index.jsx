import React, { Component } from 'react';
import {
	browserHistory,
	Router,
	Route,
	IndexRoute,
	IndexRedirect,
} from 'react-router';
import UserMain from '../userMain';
import Login from '../pages/login/login';
import SignUp from '../pages/signup/signup';

class WebRouter extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={UserMain}>
					<IndexRedirect to='/login' />
					<Route path='login' component={Login} />
					<Route path='signup' component={SignUp} />
				</Route>
			</Router>
		)
	}
}

export default WebRouter;