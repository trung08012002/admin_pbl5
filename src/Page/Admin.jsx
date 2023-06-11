import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Typography } from "antd";
import Tableshop from "../components/TableShop";
import TableReview from "../components/TableReview";

const { Header, Sider, Content } = Layout;

const items = [
  { key: "1", label: "Shop" },
  { key: "2", label: "Review" },
];
const AdminPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [currenetSelect, setCurrentSelect] = useState("Shop");
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100%" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Typography.Text strong>Admin</Typography.Text>{" "}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onSelect={(ele) => {
            setCurrentSelect(items.find((item) => item.key === ele.key).label);
          }}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Shop",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Review",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {currenetSelect === "Shop" ? <Tableshop /> : null}
          {currenetSelect === "Review" ? <TableReview /> : null}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminPage;
