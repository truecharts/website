import React from "react";

const SectionTitle = ({ coloredTitle, firstTitle, secondTitle }) => {
  return (
    <div className="container lg mx-auto">
      <div className="grid grid-cols-1 pb-2 text-center wow animate__animated animate__fadeInUp">
        <h3 className="mb-6 mt-8 md:text-4xl text-3xl md:leading-normal leading-normal font-bold">
          {firstTitle}{" "}
          <span className="after:absolute after:right-0 after:left-0 after:bottom-1 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/30 relative text-indigo-600">
            {coloredTitle}
            <div className="absolute right-0 left-0 bottom-0 lg:h-3 h-2 w-auto rounded-md bg-indigo-600/30"></div>
          </span>{" "}
          {secondTitle}
        </h3>
      </div>
    </div>
  );
};

export default SectionTitle;
