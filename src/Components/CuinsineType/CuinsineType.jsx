import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
const CuinsineType = () => {
  return (
    <div>
      <section>
        <div className="flex flex-col items-center justify-center mt-7">
          {" "}
          <h1 className="font-extrabold text-3xl">Explore by Cuinsine Type</h1>
          <p className="px-10 py-3 text-[#9c9c9c] font-semibold text-lg">
            from comfort food classics to exotic flavors,our featured <br />{" "}
            recipes are sure to impress.
          </p>
        </div>

        <div
          id="scroll"
          className="flex justify-start items-center overflow-auto "
        >
          <div className=" p-2 inline-block bg-white rounded-2xl m-4 shadow-xl hover:shadow-2xl">
            <div
              className="w-52 h-52 rounded-3xl p-2 ml-5 mt-3 bg-cover bg-center  flex items-end bg-no-repeat"
              style={{
                backgroundImage: "url('/thali Png/5thali.png')",
              }}
            >
              <div className="flex justify-end items-end text-gray-500">
                {" "}
                <p className="">Appentizers and Snacks</p>
                <p className="t">
                  {" "}
                  <AiOutlineArrowRight />
                </p>
              </div>
            </div>
          </div>

          <div className="p-2 inline-block bg-white rounded-2xl m-4 shadow-xl hover:shadow-2xl">
            <div
              className="w-52 h-52 inline-block p-2 ml-5 mt-3 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/thali Png/2thali.png')",
              }}
            ></div>
          </div>
          <div className="p-2 inline-block bg-white rounded-2xl m-4 shadow-xl hover:shadow-2xl">
            <div
              className="w-52 h-52 inline-block p-2 ml-5 mt-3 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/thali Png/3thali.png')",
              }}
            ></div>
          </div>
          <div className="p-2  inline-block bg-white rounded-2xl m-4 shadow-xl hover:shadow-2xl">
            <div
              className="w-52 h-52 inline-block p-2 ml-5 mt-3 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/thali Png/6thali.png')",
              }}
            ></div>
          </div>
          <div className="p-2  inline-block bg-white rounded-2xl m-4 shadow-xl hover:shadow-2xl">
            <div
              className="w-52 h-52 inline-block p-2 ml-5 mt-3 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/thali Png/6thali.png')",
              }}
            ></div>
          </div>
          <div className="p-2  inline-block bg-white rounded-2xl m-4 shadow-xl hover:shadow-2xl">
            <div
              className="w-52 h-52 inline-block p-2 ml-5 mt-3 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/thali Png/6thali.png')",
              }}
            ></div>
          </div>
          <div className="p-2  inline-block bg-white rounded-2xl m-4 shadow-xl hover:shadow-2xl">
            <div
              className="w-52 h-52 inline-block p-2 ml-5 mt-3 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/thali Png/6thali.png')",
              }}
            ></div>
          </div>
          <div className="p-2  inline-block bg-white rounded-2xl m-4 shadow-xl hover:shadow-2xl">
            <div
              className="w-52 h-52 inline-block p-2 ml-5 mt-3 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/thali Png/6thali.png')",
              }}
            ></div>
          </div>
        </div>
        <div className=" flex justify-center gap-7 pt-7">
          <p className="hover:bg-orange-400 rounded-full text-3xl">
            <BsArrowLeftCircle />
          </p>
          <p className="hover:bg-orange-400 rounded-full text-3xl">
            <BsArrowRightCircle />
          </p>
        </div>
      </section>
    </div>
  );
};

export default CuinsineType;
