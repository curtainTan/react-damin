import React, { Component } from 'react'
import { Form, Icon, Input, Button, message } from 'antd';
import { withRouter } from "react-router-dom"

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  }


class myLoginForm extends Component {

    constructor( props ){
        super( props )
        this.state = {
            showPwd: false
        }
        this.showPassword = this.showPassword.bind( this )
    }

    componentDidMount(){
        console.log( this.props )
        this.props.form.setFieldsValue({
            username : "admin"
        })
    }

    showPassword(){
        this.setState({
            showPwd: !this.state.showPwd
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            if( values.username === "admin" ){
                if( values.password === "123456" ){
                    this.props.history.push( "/admin" )
                } else {
                    message.error('密码错误....');
                }
            } else {
                message.error('用户名错误....');
            }
          }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
        <Form 
        onSubmit={this.handleSubmit} 
        { ...formItemLayout } 
        className="login-form">
            <Form.Item
                label= "用户名"
                required={ false }
            >
            {getFieldDecorator('username', {
                rules: [
                    { required: true, message: '请输入用户名!' },
                    { min: 5, message: '最小长度为5!' }
                ],
            })(
                <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
                />,
            )}
            </Form.Item>
            <Form.Item
                label="密码"
                required={ false }
            >
            {getFieldDecorator('password', {
                rules: [
                    { required: true, message: '请输入密码!' },
                    { min: 6, message: '请输入最少6位数的密码!' }
                ],
            })(
                <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={ <Icon type={ this.state.showPwd ? "api" : "bug"} style={{ color: 'rgba(0,0,0,.25)' }} onClick={ this.showPassword } /> }
                type={ this.state.showPwd ? "text" : "password"}
                placeholder="Password"
                />,
            )}
            </Form.Item>
            <Form.Item
                wrapperCol = {{ span: 24 }}
            >
            <Button type="primary" block htmlType="submit" className="login-form-button">
                登录
            </Button>
            </Form.Item>
        </Form>
        )
    }
}

const LoginForm = Form.create({ name: "tan" })( myLoginForm )

export default withRouter(LoginForm)