import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './signup.css';
import 'antd/dist/antd.css';
import {
	Layout,
	Button,
	Divider,
	Form,
	Input
} from 'antd';

const {
	Content
} = Layout;

class Signup extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	}

	compareToFirstPassword = (rule, value, callback) => {
		const { form } = this.props;
		if (value && value !== form.getFieldValue('password')) {
			callback('两次输入密码不一致');
		} else {
			callback();
		}
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			labelCol: {
				xs: { span: 5 },
				sm: { span: 5 }
			},
			wrapperCol: {
				xs: { span: 15 },
				sm: { span: 15 }
			}
		};
		return (
			<Content>
				<div className="entire_signup_container">
					<div className="signup_container">
						<h1 style={{ textAlign: 'center' }}>用户信息注册</h1>
						<Button
							style={{
								width: '100px',
								marginLeft: '10px'
							}}
							onClick={() => {
								browserHistory.push('/usermain/login');
							}}
						>
						←返回登录
						</Button>
						<Divider />
						<Form onSubmit={this.handleSubmit} className="signup-form">
							<Form.Item
								{...formItemLayout}
								label="邮箱"
							>
								{getFieldDecorator('email', {
									rules: [{
										type: 'email',
										message: '请输入有效邮箱'
									}, {
										required: true,
										message: '请输入您的邮箱'
									}]
								})(
									<Input />
								)}
							</Form.Item>
							<Form.Item
								{...formItemLayout}
								label="密码"
							>
								{getFieldDecorator('password', {
									rules: [{
										required: true,
										message: '请输入密码'
									}, {
										validator: this.validateToNextPassword
									}]
								})(
									<Input type="password" />
								)}
							</Form.Item>
							<Form.Item
								{...formItemLayout}
								label="确认密码"
							>
								{getFieldDecorator('confirm', {
									rules: [{
										required: true,
										message: '请确认密码'
									}, {
										validator: this.compareToFirstPassword
									}]
								})(
									<Input type="password" onBlur={this.handleConfirmBlur} />
								)}
							</Form.Item>
							<Form.Item
								{...formItemLayout}
								label="设置昵称"
							>
								{getFieldDecorator('nickname', {
									rules: [{
										required: true,
										message: '请输入昵称'
									}, {
										max: 16,
										message: '字符超过限制！'
									}]
								})(
									<Input placeholder="请填写少于16个字符的昵称" />
								)}
							</Form.Item>
							<Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
								<Button type="primary" htmlType="submit">注册</Button>
							</Form.Item>
						</Form>
					</div>
				</div>
			</Content>
		);
	}
}

const SignUp = Form.create({ name: 'register' })(Signup);

export default SignUp;
