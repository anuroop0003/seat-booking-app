import React from "react";

const SeatingLegend: React.FC = () => {
  return (
    <div className="pb-40 sm:pb-20 flex gap-10 justify-center whitespace-nowrap">
      <span className="inline-flex flex-col sm:flex-row gap-2 justify-center items-center">
        <span className="text-white w-8 h-8 text-sm inline-flex justify-center items-center bg-primary-yellow rounded-md shadow-lg bg-opacity-10 backdrop-blur-lg cursor-not-allowed">
          R
        </span>
        <span className="text-white text-sm">Reserved</span>
      </span>
      <span className="inline-flex flex-col sm:flex-row gap-2 justify-center items-center">
        <span className="text-white w-8 h-8 text-sm inline-flex justify-center items-center bg-primary-yellow rounded-md shadow-lg bg-opacity-10 backdrop-blur-lg border border-primary-yellow cursor-pointer hover:shadow-sm">
          U
        </span>
        <span className="text-white text-sm">Un Reserved</span>
      </span>
      <span className="inline-flex flex-col sm:flex-row gap-2 justify-center items-center">
        <span className="text-black w-8 h-8 text-sm inline-flex justify-center items-center bg-primary-yellow rounded-md shadow-lg cursor-not-allowed">
          S
        </span>
        <span className="text-white text-sm">Selected</span>
      </span>
    </div>
  );
};

export default SeatingLegend;
