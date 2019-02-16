import React, { Component } from 'react';
import {
	Input,
	Layout,
	Form,
	Icon,
	Button,
	Checkbox,
} from 'antd';
import 'antd/dist/antd.css';
import './login.css'

const {
	Header, Footer, Content,
} = Layout;

class Login extends Component {
	render() {
		return (
			<Layout>
				<Header
					style={{
						color: 'white',
						fontSize: '200%',
						textAlign: 'left',
					}}>
					iWord
        </Header>
				<Content>
					<div className="login_container">
						<Input
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="Username" />
						<Input
							prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
							type="password"
							placeholder="Password" />
						<Checkbox>
							记住我？
          	</Checkbox>
						<Button type="primary" className="login-form-button">
							登录
          	</Button>
						<a href="#">
							注册
          	</a>
					</div>

				</Content>
				<Footer>Copyright ©2019 iWord All Rights Reserved.</Footer>
			</Layout>



		)
	}
}

export default Login;