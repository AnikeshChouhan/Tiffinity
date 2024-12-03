import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-between items-center px-7 gap-5">
      <div>
        <div className="leading-relaxed pl-7 font-bold text-3xl md:text-5xl">
          <div className="leading-relaxed">Cook Like a Pro with</div>
          <div>
            Our
            <span className="text-orange-400 px-1"> Easy</span> and{" "}
            <span className="text-orange-400 px-1">Tasty</span>
          </div>
          <div className="leading-relaxed"> Recipes</div>
        </div>
        <p className=" mt-2 pl-7 text-[#9C9C9C] font-semibold text-lg">
          From Quick and easy meals to gourment delights <br /> , we have{" "}
          something for every test and occusion.
        </p>
        <div className="m-6">
          {" "}
          <button className="px-7 py-2 rounded-xl bg-orange-500 text-white  text-xl font-semibold">
            Explore all Recipes
          </button>
        </div>
      </div>
      <div>
        <img className="w-[35rem]" src="/Thali01.jfif" alt="" />
      </div>
    </div>
  );
};

export default Hero;
