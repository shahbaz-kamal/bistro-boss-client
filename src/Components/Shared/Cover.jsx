import React from "react";

const Cover = ({ img, title, description }) => {
  return (
    <div
      className="hero h-[700px]"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 h-[700px]"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="flex flex-col items-center justify-center bg-color-cover py-20 px-24  lg:py-28 lg:px-64">
          <h1 className="mb-5 text-5xl md:text-7xl font-bold font-cinzel">
            {title}
          </h1>
          <p className="mb-5 font-semibold font-cinzel text-xl md:text-2xl">
            {description}
          </p>
       
        </div>
      </div>
    </div>
  );
};

export default Cover;
