import React, { Component } from 'react';
import {
	Input,
	Layout,
	Form,
	Icon,
	Button,
	Checkbox,
	Carousel,
	Divider,
} from 'antd';
import {
	Link,
	browserHistory,
} from 'react-router';
import 'antd/dist/antd.css';
import './login.css'
import { getFileItem } from 'antd/lib/upload/utils';

const {
	Header, Footer, Content,
} = Layout;

class login extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
			this.props.form.validateFields((err, values) => {
				if (!err) {
					console.log('Received values of form: ', values);
				}
			});
	}

	render() {
		const {getFieldDecorator} = this.props.form;
		return (
			<Layout>
				<Header
					style={{
						color: 'white',
						fontSize: '200%',
					}}>
					iWord
        </Header>
				<Content className = "entire_login_container">
					<div className="login_container">
						<div className="login_container_left">
							<Carousel autoplay>
								<img src="https://media-image1.baydn.com/account/c904ba90e41ac6beadd8cdf4faa33bd295e44c5a5a58b7a0eda829806acc58e6.png"></img>
								<img src="https://media-image1.baydn.com/account/270b75bd758fb0630d9049115260248d40caec463f0bfbfa5ef6aa4126c07598.png"></img>
								<img src="https://media-image1.baydn.com/account/61cb85aee40a86fc12b220412cf366bfe805aecabd24a4e878ead8a47b56253f.png"></img>
							</Carousel>
						</div>
						<div className="login_container_right">
							<h1 style={{textAlign: 'center'}}>登录</h1>
							<Divider />
							<Form onSubmit={this.handleSubmit} className="login-form">
								<Form.Item>
									{getFieldDecorator('email', {
										rules: [{
											required: true,
											message: '请输入邮箱！',
										},{
											type: 'email',
											message: '请输入有效邮箱',
										}],
									})(
										<Input
											prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
											placeholder="E-mail" />
									)}
								</Form.Item>
								<Form.Item>
									{getFieldDecorator('password', {
										rules:[{
											required: true,
											message: '请输入密码！',
										}],
									})(
										<Input
											prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
											type="password"
											placeholder="Password" />
									)}
								</Form.Item>
								<Form.Item>
									{getFieldDecorator('remember', {
										valuePropName: 'checked',
										initialValue: true,
									})(
										<Checkbox>记住我？</Checkbox>
									)}
									<Button type="primary" htmlType="submit" className="login-form-button">
										登录
          				</Button>
									<Link
                		onClick={() => {
                  		browserHistory.push("/signup");
                		}}>
                		注册
                  </Link>
								</Form.Item>
							</Form>	
						</div>
					</div>

				</Content>
				<Footer 
					style={{
						textAlign: 'center',
					}}>
					Copyright ©2019 iWord All Rights Reserved.
				</Footer>
			</Layout>



		)
	}
}

const Login = Form.create({name : 'login'})(login);

export default Login;