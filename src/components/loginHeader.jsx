import React, { Component } from 'react';
import {
	Link,
	browserHistory
} from 'react-router';
import {
	Layout,
	Menu,
	Icon,
	Modal
} from 'antd';
import 'antd/dist/antd.css';
import { withCookies } from 'react-cookie';
import { postData } from '../config/fetch';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
let nickname = '';

class LoginHeader extends Component {
	constructor(props) {
		super(props);
		const { cookies } = this.props;
		if (cookies.get('userInfo')) {
			this.state = {
				username: cookies.get('userInfo').name,
				email: cookies.get('userInfo').email,
				visible: false
			};
		} else {
			this.state = {
				visible: false
			};
			browserHistory.push('/usermain/login');
		}
	}

	showModal = () => {
		this.setState({
			visible: true
		});
	}

	hideModal = () => {
		this.setState({
			visible: false
		});
	}

	onLogout = () => {
		const { cookies } = this.props;
		postData('/logout', {
			email: this.state.email
		}).then((data) => {
			console.log(data);
			if (data.message === true) {
				console.log(data.message);
				cookies.remove('userInfo');
				browserHistory.push('/usermain/login');
			} else {
				Modal.error({ title: '提示', content: '注销失败', onOk: this.setState({ visible: false }) });
			}
		}).catch((error) => {
			console.log(error);
			cookies.remove('userInfo', {
				path: '/'
			});
			browserHistory.push('/usermain/login');
		});
	}

	render() {
		const { cookies } = this.props;
		if (cookies.get('userInfo')) {
			nickname = this.state.username;
		}

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
						title={<span className="submenu-title-wrapper"><Icon type="user" />Hello! {nickname}</span>}
					>
						<MenuItemGroup title="用户中心">
							<Menu.Item key="setting"><Link to="/app/setting"><Icon type="setting" />用户设置</Link></Menu.Item>
							<Menu.Item key="logout" onClick={this.showModal}><Icon type="logout" />退出登录</Menu.Item>
						</MenuItemGroup>
					</SubMenu>
					<Modal
						title={<span><Icon type="question-circle" />提示</span>}
						okText="确认"
						cancelText="取消"
						visible={this.state.visible}
						onOk={this.onLogout}
						onCancel={this.hideModal}
					>
						您确定退出登录吗？
					</Modal>
				</Menu>
			</Header>
		);
	}
}

export default withCookies(LoginHeader);
