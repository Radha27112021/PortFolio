import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form, Input, message, Popconfirm } from "antd";
import axios from "axios";
import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice";

function AdminExperiences() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const intern = portfolioData?.intern || [];
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [type, setType] = React.useState("add");

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        // Edit existing experience
        response = await axios.post("/api/portfolio/update-experience", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        // Add new experience
        response = await axios.post("/api/portfolio/add-experience", values);
      }
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        setSelectedItemForEdit(null);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      console.log(error);
      message.error("Something went wrong!");
    }
  };
  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/delete-experience", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-end sm:justify-center">
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModal(true);
          }}
        >
          Add Experience
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-1 mt-5">
        {intern.map((item) => (
          <div
            key={item._id}
            className="border border-gray-700 p-3 bg-gray-800 hover:bg-gray-700 transition-all duration-300"
          >
            <h1 className="text-yellow-400 text-xl font-semibold mb-3">
              {item.period}
            </h1>
            <h2 className="text-gray-300 text-lg font-medium mb-2">
              Role: {item.title}
            </h2>
            <h2 className="text-gray-400 text-lg mb-2 italic">
              {item.company}
            </h2>
            <p className="text-gray-300 text-sm">{item.description}</p>
            <div className="flex p-2 justify-start gap-5">
              <button
                className="bg-blue-900 text-white px-3 py-1 rounded-md"
                onClick={() => {
                  setSelectedItemForEdit(item);
                  setShowAddEditModal(true);
                  setType("edit");
                }}
              >
                Edit
              </button>
              <Popconfirm
                title="Are you sure you want to delete this experience?"
                onConfirm={() => onDelete(item)}
                okText="Yes"
                cancelText="No"
              >
                <button className="bg-red-800 text-white px-3 py-1 rounded-md">
                  Delete
                </button>
              </Popconfirm>
            </div>
          </div>
        ))}
      </div>
      {(type === "add" || selectedItemForEdit) && (
        <Modal
          open={showAddEditModal}
          title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
          footer={null}
          onCancel={() => {
            setShowAddEditModal(false);
            setSelectedItemForEdit(null);
          }}
        >
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={selectedItemForEdit}
          >
            <Form.Item
              name="period"
              label="Period"
              rules={[{ required: true, message: "Please input the period!" }]}
            >
              <Input placeholder="Period" />
            </Form.Item>
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: "Please input the title!" }]}
            >
              <Input placeholder="Title" />
            </Form.Item>
            <Form.Item
              name="company"
              label="Company"
              rules={[{ required: true, message: "Please input the company!" }]}
            >
              <Input placeholder="Company" />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                { required: true, message: "Please input the description!" },
              ]}
            >
              <Input.TextArea placeholder="Description" rows={4} />
            </Form.Item>
            <div className="flex justify-end gap-3 mt-4">
              <button
                className="border-primary bg-red-800 text-white px-5 py-2"
                onClick={() => {
                  setShowAddEditModal(false);
                  setSelectedItemForEdit(null);
                }}
              >
                Cancel
              </button>
              <button
                className="bg-blue-900 text-white px-5 py-2"
                htmlType="submit"
              >
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default AdminExperiences;
