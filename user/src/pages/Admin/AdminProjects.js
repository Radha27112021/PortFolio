import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form, Input, message, Popconfirm } from "antd";
import axios from "axios";
import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice";

function AdminProjects() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { project } = portfolioData || {};
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [type, setType] = React.useState("add");

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        // Edit existing experience
        response = await axios.post("/api/portfolio/update-project", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        // Add new experience
        response = await axios.post("/api/portfolio/add-project", values);
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
      const response = await axios.post("/api/portfolio/delete-project", {
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
      <div className="flex justify-end sm:justify-center mb-4">
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModal(true);
          }}
        >
          Add Project
        </button>
      </div>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-1 mt-5">
          {project.map((item) => (
            <div
              key={item._id}
              className="border border-gray-700 p-4 bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg mx-auto"
            >
              <h2 className="text-yellow-400 text-xl font-semibold mb-3 hover:text-yellow-500">
                {item.title}
              </h2>
              {/* Technology Used */}
              <h4 className="text-gray-400 text-lg mb-2 italic">
                <span className="font-medium">Technology Used:</span>{" "}
                {item.technologyUsed}
              </h4>
              {/* Project Link */}
              <h2 className="text-blue-400 text-lg font-medium mb-2 hover:underline hover:text-blue-500">
                <a href={item.link}> {item.link}</a>
              </h2>
              {/* Description */}
              <p className="text-gray-300 text-sm mb-4">{item.description}</p>

              <div className="flex justify-end gap-2">
                {/* Edit Button */}
                <button
                  className="bg-blue-900 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-800"
                  onClick={() => {
                    setSelectedItemForEdit(item);
                    setShowAddEditModal(true);
                    setType("edit");
                  }}
                >
                  Edit
                </button>

                {/* Delete Button */}
                <Popconfirm
                  title="Are you sure you want to delete this project?"
                  onConfirm={() => onDelete(item)}
                  okText="Yes"
                  cancelText="No"
                >
                  <button className="bg-red-800 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-red-700">
                    Delete
                  </button>
                </Popconfirm>
              </div>
            </div>
        ))}
      </div>

      {(type === "add" || selectedItemForEdit) && (
        <Modal
          visible={showAddEditModal}
          title={selectedItemForEdit ? "Edit Project" : "Add Project"}
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
              name="title"
              label="Title"
              rules={[{ required: true, message: "Please input the title!" }]}
            >
              <Input placeholder="Title" />
            </Form.Item>
            <Form.Item
              name="technologyUsed"
              label="Technology Used"
              rules={[
                {
                  required: true,
                  message: "Please input the technology used in project!",
                },
              ]}
            >
              <Input placeholder="Technology Used" />
            </Form.Item>
            <Form.Item
              name="link"
              label="Link"
              rules={[
                { required: true, message: "Provide link address of project!" },
              ]}
            >
              <Input placeholder="Link" />
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

export default AdminProjects;
