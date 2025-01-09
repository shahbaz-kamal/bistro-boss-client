import React from "react";

const Headline = ({ description, title }) => {
  return (
    <div className="my-8 md:my-16">
      <p className="italic text-center text-color-d9 text-base md:text-xl mb-3 md:mb-4">
        ---{description}---
      </p>

      <div className="text-center">
        <div className=" border-y-4 border-y-color-dark6 inline-block py-3 md:py-4 px-5 md:px-[30px]">
          <h3 className=" text-color-dark1 text-3xl md:text-[40px] ">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Headline;
