import React, { Component } from 'react';
import {
	Layout,
} from 'antd';
import 'antd/dist/antd.css';

const {Header} = Layout;

class UnloginHeader extends Component {
	render() {
		return (
			<Header
				style={{
					color: 'white',
					fontSize: '200%',
				}}>
				iWord
      </Header>
		)
	}
}

export default UnloginHeader;