import React, { Component } from 'react';
import {
	Link
} from 'react-router';
import {
	Layout,
	Menu,
	Icon
} from 'antd';
import 'antd/dist/antd.css';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.MenuItemGroup;

class LoginHeader extends Component {
	render() {
		return (
			<Header>
				<div className="logo" />
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['recite']}
					style={{ lineHeight: '64px' }}
				>
					<Menu.Item key="recite">
						<Link to="/app/recite">
							背单词
						</Link>
					</Menu.Item>
					<Menu.Item key="book">
						<Link to="/app/book">
							单词本
						</Link>
					</Menu.Item>
					<Menu.Item key="test">
						<Link to="/app/test">
							考核
						</Link>
					</Menu.Item>
					<Menu.Item key="review">
						<Link to="/app/review">
							复习
						</Link>
					</Menu.Item>
					<SubMenu
						style={{ float: 'right' }}
						title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}
					>
						<MenuItemGroup title="Item 1">
							<Menu.Item key="setting:1">Option 1</Menu.Item>
							<Menu.Item key="setting:2">Option 2</Menu.Item>
						</MenuItemGroup>
						<MenuItemGroup title="Item 2">
							<Menu.Item key="setting:3">Option 3</Menu.Item>
							<Menu.Item key="setting:4">Option 4</Menu.Item>
						</MenuItemGroup>
					</SubMenu>
				</Menu>
			</Header>
		);
	}
}

export default LoginHeader;
