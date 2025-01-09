import React from "react";

const Button = ({ btnText }) => {
  return (
    <div className="flex justify-center">
      <button className="mt-6 md:mt-12 py-3 px-7 uppercase font-medium text-lg md:text-xl text-color-1f border-b-[3px] border-color-1f rounded-lg">
        {btnText}
      </button>
    </div>
  );
};

export default Button;
