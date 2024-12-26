import React from "react";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";
function AdminContact() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-contact", {
        ...values,
        _id: portfolioData.contact[0]._id,
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
        initialValues={portfolioData.contact[0]}
      >
        <Form.Item name="name" label="Name">
          <input placeholder="Name" />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <input placeholder="Email" />
        </Form.Item>
        <Form.Item name="mobile" label="Mobile Number">
          <input placeholder="Mobile Number" />
        </Form.Item>
        <Form.Item name="city" label="City">
          <input placeholder="City" />
        </Form.Item>
        <Form.Item name="country" label="Country">
          <input placeholder="Country" />
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
export default AdminContact;
