import React from "react";
import { useSelector } from "react-redux";
import MyResume from "../../document/MyResume.pdf"; // Import the resume file

const Introo = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { welcomeText, name, caption, description } = intro[0];

  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-6 py-10">
      <h1 className="text-tertiary sm:text-1xl"> {welcomeText || ""}</h1>
      <h1 className="text-7xl sm:text-3xl text-fifth font-semibold">
        {name || ""}
      </h1>
      <h1 className="text-7xl sm:text-3xl text-tertiary font-semibold">
        {caption || ""}
      </h1>
      <p className="text-tertiary w-2/3">{description || ""}</p>
      <a
        href={MyResume}
        download="Radha_Kumari_Resume.pdf"
        className=" bg-fourth px-10 py-3 rounded text-tertiary text-xl"
      >
        Download My Resume
      </a>
    </div>
  );
};

export default Introo;
