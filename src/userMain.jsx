import React, { Component } from 'react';
import {
	Layout
} from 'antd';
import 'antd/dist/antd.css';
import UnloginHeader from './components/unloginHeader';
import AllFooter from './components/allFooter';

class UserMain extends Component {
	render() {
		const { children } = this.props;
		return (
			<Layout>
				<UnloginHeader />
				{children}
				<AllFooter />
			</Layout>
		);
	}
}

export default UserMain;
