import React from "react";
import SectionTitle from "../../components/SectionTitle";
import MyImage from "../../image/MyImage.jpeg";
import { useSelector } from "react-redux";
function About() {
  const { portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { description1, description2, skills } = about[0];
  return (
    <div className="py-8">
      <SectionTitle title="About" />
      <div className="flex items-center w-full  sm:flex-col">
        <div className="flex justify-center lg:w-1/2 w-full mb-6 lg:mb-0">
          <img
            src={MyImage}
            alt="Radha Kumari"
            className="h-[50vh] w-1/2 lg:w-full  rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-5 w-full lg:w-3/4 lg:pl-8 text-center lg:text-left py-10">
          <p className="text-tertiary">{description1 || ""}</p>
          <p className="text-tertiary">{description2 || ""}</p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-fourth text-xl">
          Here are a few technologies I've been working with recently:-{" "}
        </h1>
        <div className="flex flex-wrap gap-4 mt-5">
          {skills.map((skills) => (
            <div className="border border-fifth py-3 px-5">
              <h1 className="text-fourth">{skills || ""}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
