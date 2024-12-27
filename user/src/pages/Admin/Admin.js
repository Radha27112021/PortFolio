import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import AdminProjects from "./AdminProjects";
import AdminExperiences from "./AdminExperiences";
import AdminContact from "./AdminContact";
import { useSelector } from "react-redux";

function Admin() {
  const { portfolioData } = useSelector((state) => state.root);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-login";
    }
  }, []);

  const tabItems = [
    { key: "1", label: "Introduction", children: <AdminIntro /> },
    { key: "2", label: "About", children: <AdminAbout /> },
    { key: "3", label: "Projects", children: <AdminProjects /> },
    { key: "4", label: "Experiences", children: <AdminExperiences /> },
    { key: "5", label: "Contact", children: <AdminContact /> },
  ];

  return (
    <div>
      <Header />
      <div className="flex gap-10 items-center p-5 justify-between">
        <div className="flex gap-10 items-center">
          <h1 className="text-4xl text-tertiary">Portfolio Admin</h1>
        </div>
        <button
          className="bg-blue-900 text-white py-2 px-4 rounded"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin-login";
          }}
        >
          Log Out
        </button>
      </div>
      <hr className="h-[2px] w-11/12 items-center bg-fifth mx-10 sm:mx-5" />
      {portfolioData && (
        <div className="p-5">
          <Tabs defaultActiveKey="1" tabPosition="left" items={tabItems} />
        </div>
      )}
    </div>
  );
}

export default Admin;
