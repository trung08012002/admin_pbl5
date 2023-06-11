import { Table } from "antd";
import useNotification from "antd/es/notification/useNotification";
import React, { useEffect, useState } from "react";
import apiService from "../api/apiService";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Account ID",
    dataIndex: "id_account",
    key: "id_account",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Star",
    dataIndex: "star",
    key: "star",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "img",
  },
  {
    title: "Number review",
    dataIndex: "number_review",
    key: "number_review",
  },
];

const Tableshop = () => {
  const [shopData, setShopData] = useState([]);
  const [api, contextHolder] = useNotification();
  useEffect(() => {
    apiService
      .getAllShop()
      .then((res) => setShopData(res.data.data))
      .catch((err) => api.error({ duration: 2, message: err.toString() }));
  }, []);
  return (
    <>
      {contextHolder}
      <Table dataSource={shopData} bordered columns={columns} />
    </>
  );
};

export default Tableshop;
