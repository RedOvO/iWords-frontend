import React, { Component } from 'react';
import {
	Layout,
	Tabs
} from 'antd';
import 'antd/dist/antd.css';
import { browserHistory } from 'react-router';
import './recite.css';
import OneWordPanel from '../../components/oneWordPanel/oneWordPanel';

const { Content } = Layout;
const TabPane = Tabs.TabPane;

class Recite extends Component {
	constructor(props) {
		super(props);
		const { cookies } = this.props;
		if (cookies.get('userInfo')) {
			this.state = {
				setting: cookies.get('userInfo').setting
			};
		} else {
			browserHistory.push('/usermain/login');
		}
	}

	render() {
		return (
			<Content className="entire_recite_container">
				<div className="recite_container">
					<Tabs defaultActiveKey="1" type="card">
						<TabPane tab="四级" key="1">
							<OneWordPanel level="四级" mode="recite" />
						</TabPane>
						<TabPane tab="六级" key="2">
							<OneWordPanel level="六级" mode="recite" />
						</TabPane>
					</Tabs>
				</div>
			</Content>
		);
	}
}


export default Recite;
