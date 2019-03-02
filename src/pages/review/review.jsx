import React, { Component } from 'react';
import {
	Layout,
	Tabs
} from 'antd';
import 'antd/dist/antd.css';
import { browserHistory } from 'react-router';
import './review.css';
import OneWordPanel from '../../components/oneWordPanel/oneWordPanel';
import { postData } from '../../config/axios';

const { Content } = Layout;
const TabPane = Tabs.TabPane;

class Review extends Component {
	constructor(props) {
		super(props);
		this.state = {
			setting: 0
		};
	}

	componentWillMount() {
		postData('/auth', {}).then((response) => {
			console.log(response);
			if (response.result === false) {
				browserHistory.push('/usermain/login');
			}
		});
	}

	render() {
		return (
			<Content className="entire_review_container">
				<div className="review_container">
					<Tabs defaultActiveKey="1" type="card">
						<TabPane tab="四级" key="1">
							<OneWordPanel level="四级" mode="review" />
						</TabPane>
						<TabPane tab="六级" key="2">
							<OneWordPanel level="六级" mode="review" />
						</TabPane>
					</Tabs>
				</div>
			</Content>
		);
	}
}

export default Review;
