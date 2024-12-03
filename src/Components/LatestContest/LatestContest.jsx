import React from "react";

const LatestContest = () => {
  return (
    <div>
      <div className="flex justify-evenly items-center">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-xl font-semibold ">Join Our Latest Contest</h1>
          <p className="text-md font-semibold text-[#9c9c9c]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, quis.
          </p>
          <button className="font-semibold rounded-lg border-2 p-2 mt-4 border-green-600 hover:text-white hover:bg-orange-500">
            Explore Contest
          </button>
        </div>
        <div>
          <img src="GreenThali.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LatestContest;
