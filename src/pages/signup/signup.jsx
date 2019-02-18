import React, { Component } from 'react';
import './signup.css';
import 'antd/dist/antd.css';
import {
	Layout,
} from 'antd';

const {
	Header, Content, Footer,
} = Layout;

class SignUp extends Component {
	render() {
		return (
			<Layout>
				<Header
					style={{
						color: 'white',
						fontSize: '200%',
					}}>
					iWord
        </Header>
				<Content>
					<div className="entire_signup_container">
						<div className="signup_container">
							<h1>用户信息注册</h1>
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

export default SignUp;