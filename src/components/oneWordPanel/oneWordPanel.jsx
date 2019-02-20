import React, { Component } from 'react';
import {
	Card,
	Icon,
	Rate,
	Progress
} from 'antd';
import 'antd/dist/antd.css';
import './oneWordPanel.css';


class OneWordPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0
		};
	}

	handleChange = (value) => {
		this.setState({ value });
	}

	render() {
		const { value } = this.state;
		return (
			<div className="panel_container">
				<div className="word_container">
					<Card
						style={{ width: 600 }}
						actions={[
							<span>
								<Icon type="check-circle" />
								认识
							</span>,
							<span>
								<Icon type="close-circle" />
								不认识
							</span>
						]}
					>
						<div className="one_word_container">
							<h1 style={{ fontSize: '45px', fontWeight: '700' }}>century</h1>
							<Rate
								count={1}
								tooltips={['收藏到单词本']}
								onChange={this.handleChange}
								value={value}
								style={{
									fontSize: 50,
									marginLeft: '20px',
									color: '#40a9ff'
								}}
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
						{this.props.level}背诵进度
						<Progress type="circle" percent={42} />
					</div>
				</div>
			</div>
		);
	}
}

export default OneWordPanel;
