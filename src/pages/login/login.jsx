import React, { Component } from 'react'
import "./login.less"
import logo from "../../assets/image/h1.jpg"
import LoginForm from "./form"


export default class login extends Component {

    render() {
        return (
            <div className="login">
                <header className="login-header" >
                    <img src={ logo } alt="logo" />
                    <h1>React项目：admin</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <LoginForm />
                </section>
            </div>
        )
    }
}
