import React, { Component } from 'react';
import {
	Layout,
	Tabs
} from 'antd';
import 'antd/dist/antd.css';
import './test.css';
import OneWordPanel from '../../components/oneWordPanel/oneWordPanel';

const { Content } = Layout;
const TabPane = Tabs.TabPane;

class Test extends Component {
	render() {
		return (
			<Content className="entire_test_container">
				<div className="test_container">
					<Tabs defaultActiveKey="1" type="card">
						<TabPane tab="四级" key="1">
							<OneWordPanel level="四级" mode="test" />
						</TabPane>
						<TabPane tab="六级" key="2">
							<OneWordPanel level="六级" mode="test" />
						</TabPane>
					</Tabs>
				</div>
			</Content>
		);
	}
}

export default Test;
