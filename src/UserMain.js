import React, {Component} from 'react';
import {
    Layout,
} from 'antd';
import 'antd/dist/antd.css';
import UnloginHeader from './components/unloginHeader';
import AllFooter from './components/allFooter';

class UserMain extends Component{
    render(){
        return(
            <Layout>
                <UnloginHeader/>
                {this.props.children};
                <AllFooter/>
            </Layout>
        )
    }
}

export default UserMain;