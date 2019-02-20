import React, { Component } from 'react';
import {
	Layout,
	Tabs,
	Progress,
	Card,
	Icon,
	Rate
} from 'antd';
import 'antd/dist/antd.css';
import './recite.css';

const { Content } = Layout;
const TabPane = Tabs.TabPane;
const desc = ['收藏到单词本'];

class Recite extends Component {
	state = {
		value: 0
	}

	handleChange = (value) => {
		this.setState({ value });
	}

	render() {
		const { value } = this.state;

		return (
			<Content className="entire_recite_container">
				<div className="recite_container">
					<Tabs defaultActiveKey="1" type="card">
						<TabPane tab="四级" key="1">
							<div className="pane_container">
								<div className="word_container">
									<Card
										style={{ width: 600 }}
										actions={[<Icon type="check-circle" />, <Icon type="close-circle" />]}
									>
										<div className="one_word_container">
											<h1 style={{ fontSize: '45px', fontWeight: '700' }}>century</h1>
											<Rate
												count={1}
												tooltips={desc}
												onChange={this.handleChange}
												value={value}
												style={{ fontSize: 50, marginLeft: '20px', color: '#40a9ff' }}
											/>
										</div>
									</Card>
								</div>
								<div className="progress_container">
									<div className="progress">
										<span>今日背诵进度</span>
										<Progress type="circle" percent={77} />
									</div>
									<div className="progress">
										四级背诵进度
										<Progress type="circle" percent={42} />
									</div>
								</div>
							</div>
						</TabPane>
						<TabPane tab="六级" key="2">
							<div className="pane_container">
								<div className="word_container">
									<div className="one_word_container">
										Hello CET6!
									</div>
								</div>
								<div className="progress_container">
									<div className="progress">
										<span>今日背诵进度</span>
										<Progress type="circle" percent={66} />
									</div>
									<div className="progress">
										六级背诵进度
										<Progress type="circle" percent={53} />
									</div>
								</div>
							</div>
						</TabPane>
					</Tabs>
				</div>
			</Content>
		);
	}
}


export default Recite;
