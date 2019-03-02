import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
	Layout
} from 'antd';
import 'antd/dist/antd.css';
import AllFooter from './components/allFooter';
import LoginHeader from './components/loginHeader';

class App extends Component {
	render() {
		const { children } = this.props;
		return (
			<Layout>
				<LoginHeader />
				{children}
				<AllFooter />
			</Layout>
		);
	}
}

export default App;
