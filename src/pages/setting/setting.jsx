import React, { Component } from 'react';
import {
	Switch,
	Input,
	Layout
} from 'antd';
import 'antd/dist/antd.css';
import { withCookies } from 'react-cookie';
import './setting.css';

const { Content } = Layout;

class Setting extends Component {
	render() {
		return (
			<Content className="entire_setting_container">
				<div className="setting_container">
					<h2>每日背诵计划<Input style={{ width: '15px' }} />个</h2>
					<h2>是否开启四级背诵<Switch /></h2>
					<h2>是否开启六级背诵<Switch /></h2>
				</div>
			</Content>
		);
	}
}

export default withCookies(Setting);
