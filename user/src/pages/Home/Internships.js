import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";
function Internships() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  // Destructure intern data from portfolioData
  const { intern } = portfolioData;
  return (
    <div>
      <SectionTitle title="Experiences" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-fourth w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {intern.map((item, index) => (
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
                {item.period || "Unknown Period"}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 sm:w-full">
          <h1 className="text-fifth text-xl">
            {intern[selectedItemIndex]?.title || "No Title"}
          </h1>
          <h1 className="text-tertiary text-xl">
            {intern[selectedItemIndex]?.company || "No Company"}
          </h1>
          <p className="text-tertiary">
            {intern[selectedItemIndex]?.description || "No Description"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Internships;
