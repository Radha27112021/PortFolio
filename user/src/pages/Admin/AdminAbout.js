import React, { useState } from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

function AdminAbout() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const [skills, setSkills] = useState(portfolioData.about[0]?.skills || []);
  const onFinish = async (values) => {
    try {
      values.skills = skills;
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-about", {
        ...values,
        _id: portfolioData.about[0]._id,
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
  const handleSkillChange = (e) => {
    const value = e.target.value;
    const skillArray = value.split(",").map((skill) => skill.trim());
    setSkills(skillArray);
  };
  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          ...portfolioData.about[0],
          skills: portfolioData.about[0].skills.join(" , "),
        }}
      >
        <Form.Item name="description1" label="Description 1">
          <textarea placeholder="Describe in first way" />
        </Form.Item>
        <Form.Item name="description2" label="Description 2">
          <textarea placeholder="Describe in second way" />
        </Form.Item>
        <Form.Item name="skills" label="Skills">
          <Input
            placeholder="Enter skills separated by commas (e.g., React, Node.js, MongoDB)"
            value={skills.join(", ")}
            onChange={handleSkillChange}
          />
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

export default AdminAbout;
