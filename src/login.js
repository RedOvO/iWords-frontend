import React, { Component } from 'react';
import {
	Input,
	Layout,
	//Form,
	Icon,
	Button,
	Checkbox,
	Carousel,
	Divider,
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
				<Content className = "entire_container">
					<div className="login_container">
						<div className="login_container_left">
							<Carousel autoplay>
								<div>
									<img src="https://media-image1.baydn.com/account/c904ba90e41ac6beadd8cdf4faa33bd295e44c5a5a58b7a0eda829806acc58e6.png"></img>
								</div>
    						<div>
									<img src="https://media-image1.baydn.com/account/270b75bd758fb0630d9049115260248d40caec463f0bfbfa5ef6aa4126c07598.png"></img>
								</div>
    						<div>
									<img src="https://media-image1.baydn.com/account/61cb85aee40a86fc12b220412cf366bfe805aecabd24a4e878ead8a47b56253f.png"></img>
								</div>
							</Carousel>
						</div>
						<div className="login_container_right">
							<h1>登录</h1>
							<Divider />
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
					</div>

				</Content>
				<Footer>Copyright ©2019 iWord All Rights Reserved.</Footer>
			</Layout>



		)
	}
}

export default Login;