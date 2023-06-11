import { Form, Input, Checkbox, Button, Card } from "antd";
import useNotification from "antd/es/notification/useNotification";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../api/apiService";
import { TOKEN_KEY } from "../constants";
const LoginPage = () => {
  const [api, contextHolder] = useNotification();
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      setSubmitting(true);
      const remember = values.remember;
      delete values.remember;
      values["remember_me"] = remember ? 1 : 0;
      const res = await apiService.login(values);
      localStorage.setItem(TOKEN_KEY, res["data"]["access_token"]);
      navigate("/admin", { replace: true });
    } catch (error) {
      api.error({ duration: 2, message: error.toString() });
    } finally {
      setSubmitting(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "center ",
        alignItems: "center",
        height: "100%",
        backgroundImage:
          "linear-gradient(to right top, #4084eb, #00a2fc, #00bdff, #00d5fe, #0decf6)",
      }}
    >
      {contextHolder}
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" loading={submitting}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginPage;
