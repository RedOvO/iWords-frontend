import React, { Component } from 'react';
import {
	Layout
} from 'antd';
import 'antd/dist/antd.css';

const { Footer } = Layout;

class AllFooter extends Component {
	render() {
		return (
			<Footer
				style={{
					textAlign: 'center'
				}}
			>
				Copyright ©2019 iWord All Rights Reserved.
			</Footer>
		);
	}
}

export default AllFooter;
