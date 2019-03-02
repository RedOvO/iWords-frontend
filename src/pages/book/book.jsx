import React, { Component } from 'react';
import {
	Layout,
	Table,
	Tabs,
	Popconfirm
} from 'antd';
import 'antd/dist/antd.css';
import {
	Link,
	browserHistory
} from 'react-router';
import './book.css';

const { Content } = Layout;
const TabPane = Tabs.TabPane;

class Book extends Component {
	constructor(props) {
		super(props);
		const { cookies } = this.props;
		if (cookies.get('user')) {
			browserHistory.push('/usermain/login');
		}
		this.columns = [{
			title: '序号',
			dataIndex: 'key',
			render: text => <Link to="#">{text}</Link>,
			width: '8%'
		}, {
			title: '单词',
			className: 'column-word',
			dataIndex: 'word',
			width: '16%'
		}, {
			title: '解释',
			dataIndex: 'description'
		}, {
			title: '操作',
			width: '8%',
			render() {
				return (
					<Popconfirm
						title="是否删除该单词?"
						okText="确认"
						cancelText="取消"
						onConfirm={() => console.log('Delete')}
					>
						<Link to="#">删除</Link>
					</Popconfirm>
				);
			}
		}];

		this.data = [{
			key: '1',
			word: 'century',
			description: '世纪'
		}, {
			key: '2',
			word: 'apple',
			description: '苹果'
		}];
	}

	render() {
		return (
			<Content className="entire_book_container">
				<div className="book_container">
					<Tabs defaultActiveKey="1">
						<TabPane tab="四级" key="1">
							<Table
								columns={this.columns}
								dataSource={this.data}
								bordered
								title={() => '四级单词本'}
							/>
						</TabPane>
						<TabPane tab="六级" key="2">
							<Table
								columns={this.columns}
								dataSource={this.data}
								bordered
								title={() => '六级单词本'}
							/>
						</TabPane>
					</Tabs>
				</div>


			</Content>
		);
	}
}

export default Book;
