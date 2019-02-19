import React, { Component } from 'react';
import {
	Layout,
	Tabs
} from 'antd';
import 'antd/dist/antd.css';
import './recite.css';

const { Content } = Layout;
const TabPane = Tabs.TabPane;

class Recite extends Component {
	render() {
		return (
			<Content className="entire_recite_container">
				<div className="recite_container">
					<Tabs defaultActiveKey="1" type="card">
						<TabPane tab="四级" key="1">
							<div className="cet4_container">
								四级
							</div>
						</TabPane>
						<TabPane tab="六级" key="2">
							<div className="cet6_container">
								六级
							</div>
						</TabPane>
					</Tabs>
				</div>
			</Content>
		);
	}
}


export default Recite;
