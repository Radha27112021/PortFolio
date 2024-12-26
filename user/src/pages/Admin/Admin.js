import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import AdminProjects from "./AdminProjects";
import AdminExperiences from "./AdminExperiences";
import AdminContact from "./AdminContact";
import { useSelector } from "react-redux";
const { TabPane } = Tabs;
function Admin() {
  const { portfolioData } = useSelector((state) => state.root);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-login";
    }
  }, []);
  return (
    <div>
      <Header />
      <div className="flex gap-10 items-center p-5 justify-between">
        <div className="flex gap-10 items-center ">
          <h1 className="text-4xl text-tertiary items-center ">
            Portfolio Admin
          </h1>
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
          <Tabs defaultActiveKey="1" tabPosition="left">
            <TabPane tab="Introduction" key="1">
              <AdminIntro />
            </TabPane>
            <TabPane tab="About" key="2">
              <AdminAbout />
            </TabPane>
            <TabPane tab="Projects" key="3">
              <AdminProjects />
            </TabPane>
            <TabPane tab="Experiences" key="4">
              <AdminExperiences />
            </TabPane>
            <TabPane tab="Contact" key="5">
              <AdminContact />
            </TabPane>
          </Tabs>
        </div>
      )}
    </div>
  );
}
export default Admin;
