import { Table } from "antd";
import useNotification from "antd/es/notification/useNotification";
import React, { useState, useEffect } from "react";
import apiService from "../api/apiService";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Food ID",
    dataIndex: "id_food",
    key: "id_food",
  },
  {
    title: "User ID",
    dataIndex: "id_user",
    key: "id_user",
  },
  {
    title: "Description",
    dataIndex: "des",
    key: "des",
  },
  {
    title: "Create at",
    dataIndex: "thoigian",
    key: "createat",
  },
  {
    title: "Star",
    dataIndex: "star",
    key: "star",
  },
];
const TableReview = () => {
  const [review, setReview] = useState([]);
  const [api, contextHolder] = useNotification();
  // eslint-disable-next-line no-undef
  useEffect(() => {
    apiService
      .getAllReview()
      .then((res) => setReview(res.data.data))
      .catch((err) => api.error({ duration: 2, message: err.toString() }));
  }, []);
  return (
    <>
      {contextHolder}
      <Table dataSource={review} bordered columns={columns} />
    </>
  );
};

export default TableReview;
