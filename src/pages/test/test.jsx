import React, { Component } from 'react';
import {
	Layout
} from 'antd';
import 'antd/dist/antd.css';
import './test.css';

const { Content } = Layout;

class Test extends Component {
	render() {
		return (
			<Content>
				<div>ccc</div>
			</Content>
		);
	}
}

export default Test;
