import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";
function ProjectDetails() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { project } = portfolioData || {};

  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-fourth w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {project.map((project, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => {
                setSelectedItemIndex(index);
              }}
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-fifth border-fifth border-l-4 -ml-[3px] bg-[#dda04e] py-2 w-38"
                    : "text-tertiary"
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <div className="flex flex-col gap-5 sm:w-full">
            <h1 className="text-fifth text-xl">
              {project[selectedItemIndex]?.title || "No Title"}
            </h1>
            <h1 className="text-tertiary text-xl">
              {project[selectedItemIndex]?.technologyUsed ||
                "No Technology Used"}
            </h1>
            <p className="text-tertiary">
              {project[selectedItemIndex]?.description || "No Description"}
            </p>
            {project[selectedItemIndex]?.link && (
              <a
                href={project[selectedItemIndex]?.link}
                className="text-tertiary text-xl underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Project
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
