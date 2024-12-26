import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function EducationDetails() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  // Destructure education data from portfolioData
  const { education } = portfolioData || {};
  return (
    <div>
      <SectionTitle title="Education" />
      <div className="flex py-10 gap-20 sm:flex-col">
        {/* Education List */}
        <div className="flex flex-col gap-10 border-l-2 border-fourth w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {education.map((item, index) => (
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
                    : "text-tertiary "
                }`}
              >
                {item.title || "No Title"}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 sm:full">
          <h1 className="text-fifth text-xl">
            {education[selectedItemIndex]?.period || "No Period"}
          </h1>
          <h1 className="text-tertiary text-xl">
            {education[selectedItemIndex]?.description || "No Description"}
          </h1>
          <p className="text-tertiary">
            {education[selectedItemIndex]?.place || "No Place"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EducationDetails;
