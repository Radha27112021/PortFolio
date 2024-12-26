import React from "react";
import Header from "../../components/Header";
import Introo from "./Introo";
import About from "./About";
import Internships from "./Internships";
import ProjectDetails from "./ProjectDetails";
import EducationDetails from "./EducationDetails";
import Contact from "./Contact";
import LeftSider from "./LeftSider";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
const Index = () => {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <>
      <Header />
      {portfolioData && (
        <div className="bg-primary px-40 sm:px-12">
          <Introo />
          <About />
          <Internships />
          <ProjectDetails />
          <EducationDetails />
          <Contact />
          <Footer />
          <LeftSider />
        </div>
      )}
    </>
  );
};
export default Index;
