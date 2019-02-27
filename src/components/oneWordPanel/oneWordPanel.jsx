import React, { Component } from 'react';
import {
	Card,
	Icon,
	Rate,
	Progress,
	Button
} from 'antd';
import 'antd/dist/antd.css';
import './oneWordPanel.css';


class OneWordPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
			showdesc: false,
			action: [
				<Button type="primary">
					<Icon type="check-circle" />
					认识
				</Button>,
				<Button type="primary" onClick={this.handleShowdesc}>
					<Icon type="close-circle" />
					不认识
				</Button>]
		};
	}

	handleChange = (value) => {
		this.setState({ value });
	}

	handleShowdesc = () => {
		this.setState({
			showdesc: true,
			action: [
				<Button type="primary" onClick={this.handleHidedesc}>
					<Icon type="step-forward" />
					下一个
				</Button>]
		});
	}

	handleHidedesc = () => {
		this.setState({
			showdesc: false,
			action: [
				<Button type="primary">
					<Icon type="check-circle" />
					认识
				</Button>,
				<Button type="primary" onClick={this.handleShowdesc}>
					<Icon type="close-circle" />
					不认识
				</Button>
			]
		});
	}

	render() {
		const { value } = this.state;
		return (
			<div className="panel_container">
				<div className="word_container">
					<Card
						style={{ width: 600 }}
						actions={this.state.action}
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
						{this.state.showdesc ? (
							<Card className="one_word_expression" bodyStyle={{ backgroundColor: 'rgb(240, 240, 240)' }}>
								<p style={{ fontSize: 15 }}>n. 世纪</p>
							</Card>
						) : null}
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
