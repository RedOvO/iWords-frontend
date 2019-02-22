import React, { Component } from 'react';
import {
	Layout
} from 'antd';
import 'antd/dist/antd.css';
import { CookiesProvider } from 'react-cookie';
import UnloginHeader from './components/unloginHeader';
import AllFooter from './components/allFooter';

class UserMain extends Component {
	render() {
		const { children } = this.props;
		return (
			<CookiesProvider>
				<Layout>
					<UnloginHeader />
					{children}
					<AllFooter />
				</Layout>
			</CookiesProvider>
		);
	}
}

export default UserMain;
