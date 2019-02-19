import React, { Component } from 'react';
import {
	Link
} from 'react-router';
import {
	Layout,
	Menu
} from 'antd';
import 'antd/dist/antd.css';

const {
	Header
} = Layout;

class LoginHeader extends Component {
	render() {
		return (
			<Header>
				<div className="logo" />
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['1']}
					style={{ lineHeight: '64px' }}
				>
					<Menu.Item key="1">
						<Link to="/app/recite">
							背单词
						</Link>
					</Menu.Item>
					<Menu.Item key="2">
						<Link to="/app/book">
							单词本
						</Link>
					</Menu.Item>
					<Menu.Item key="3">
						<Link to="/app/test">
							考核
						</Link>
					</Menu.Item>
					<Menu.Item key="4">
						<Link to="/app/review">
							复习
						</Link>
					</Menu.Item>
				</Menu>
			</Header>
		);
	}
}

export default LoginHeader;
