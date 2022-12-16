import { Button, Form, Input } from "antd"
import React from "react"
import { Link } from "react-router-dom"
import "./SignIn.scss"

const SignIn = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo)
  }

  return (
    <div className="main-sign-in">
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="sign-in-form"
        layout="vertical"
      >
        <strong className="title">Sign In</strong>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="username.." />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="password.." />
        </Form.Item>

        <Form.Item>
          <div className="button-group">
            <Button htmlType="submit" type="primary">
              Sign In
            </Button>
            <Button>I Forgot My Password</Button>
          </div>
        </Form.Item>
        <span className="register">
          Don't have an account?{" "}
          <Link to={"/sign-up"} className="register-link">
            Register
          </Link>
        </span>
      </Form>
    </div>
  )
}

export default SignIn
