import React from "react";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";
function AdminIntro() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-intro", {
        ...values,
        _id: portfolioData.intro[0]._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      console.log(error);
    }
  };
  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData.intro[0]}
      >
        <Form.Item name="welcomeText" label="Welcome Text">
          <input placeholder="Welcome Text" />
        </Form.Item>
        <Form.Item name="name" label="Name">
          <input placeholder="Name" />
        </Form.Item>
        <Form.Item name="caption" label="Caption">
          <input placeholder="Caption" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <textarea placeholder="Description" />
        </Form.Item>
        <div className="flex justify-end sm:justify-center">
          <button className="px-8 py-3  bg-blue-900 text-white" type="submit">
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
}
export default AdminIntro;
