import React, { Component } from 'react';
import {
	browserHistory,
	Router,
	Route,
	IndexRedirect
} from 'react-router';
import UserMain from '../userMain';
import App from '../App';
import Login from '../pages/login/login';
import SignUp from '../pages/signup/signup';
import Recite from '../pages/recite/recite';
import Book from '../pages/book/book';
import Test from '../pages/test/test';
import Review from '../pages/review/review';


class WebRouter extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/">
					<IndexRedirect to="/usermain/login" />
					<Route path="usermain" component={UserMain}>
						<Route path="login" component={Login} />
						<Route path="signup" component={SignUp} />
					</Route>
					<Route path="app" component={App}>
						<Route path="recite" component={Recite} />
						<Route path="book" component={Book} />
						<Route path="test" component={Test} />
						<Route path="review" component={Review} />
					</Route>
				</Route>
			</Router>
		);
	}
}

export default WebRouter;
