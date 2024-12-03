import React from "react";
const fulInformation = () => {
  return (
    <p>
      Paneer Butter Masala: A creamy and spicy paneer curry. Chana Masala: A
      tangy and mildly spiced chickpea curry. Aloo Gobi: A dry preparation of
      potato and cauliflower with aromatic spices. Dal Tadka: Lentils tempered
      with ghee, garlic, and spices. Naan Bread: Soft and fluffy Indian bread
      garnished with sesame seeds. Steamed Basmati Rice: Perfectly cooked
      long-grain rice. Gulab Jamun: Soft milk-based sweet dumplings soaked in
      sugar syrup. Pickle and Chutney: For an added burst of flavor.
    </p>
  );
};
const Recipes = () => {
  return (
    <div>
      <section className="bg-[#FFFCF5]">
        <div className="flex flex-col items-center justify-center mt-5 pt-10">
          {" "}
          <h1 className="font-extrabold text-3xl">
            Popular Racipes You Can't Miss
          </h1>
          <p className="px-10 py-3 text-[#9c9c9c] font-semibold text-lg">
            from comfort food classics to exotic flavors,our featured <br />{" "}
            recipes are sure to impress.
          </p>
        </div>

        <div
          id="scroll"
          className="flex justify-center items-center overflow-auto  p-10"
        >
          <div className=" inline-block bg-white rounded-2xl m-4 shadow-xl hover:shadow-3xl">
            <div
              className="w-56 h-52 inline-block p-2 ml-5 mt-3 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/thali Png/5thali.png')",
              }}
            >
              {/* <img
              className="w-52 rounded-3xl "
              src="thali Png/1thali.png"
              alt=""
            /> */}
            </div>
            <div className="flex flex-col justify-start items-center">
              <h1 className="p-1 ml-3 text-lg font-semibold ">
                Deluxe North Indian Thali
              </h1>
              <p className="p-1 ml-3 text-[#9c9c9c] text-center">
                A flavorful and satisfying <br />
                assortment of North Indian <br />
                dishes served on a single platter.
              </p>
              <button
                className="p-2 ml-3 text-sm font-semibold text-center border border-black my-2 rounded-lg hover:bg-orange-400"
                onClick={() => {
                  fulInformation;
                }}
              >
                See Full Detail
              </button>
            </div>
          </div>
          <div className=" inline-block bg-white rounded-2xl m-4 shadow-xl hover:shadow-2xl">
            <div
              className="w-60 h-52 inline-block p-2 ml-5 mt-3 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/thali Png/2thali.png')",
              }}
            >
              {/* <img
              className="w-52 rounded-3xl "
              src="thali Png/1thali.png"
              alt=""
            /> */}
            </div>
            <div className="flex flex-col justify-start items-center">
              <h1 className="p-1 ml-3 text-lg font-semibold ">
                Deluxe North Indian Thali
              </h1>
              <p className="p-1 ml-3 text-[#9c9c9c] text-center">
                A flavorful and satisfying <br />
                assortment of North Indian <br />
                dishes served on a single platter.
              </p>
              <button
                className="p-2 ml-3 text-sm font-semibold text-center border border-black my-2 rounded-lg hover:bg-orange-400"
                onClick={() => {
                  fulInformation;
                }}
              >
                See Full Detail
              </button>
            </div>
          </div>
          <div className=" inline-block bg-white rounded-2xl m-4 shadow-xl hover:shadow-2xl">
            <div
              className="w-52 h-52 inline-block p-2 ml-5 mt-3 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/thali Png/3thali.png')",
              }}
            >
              {/* <img
              className="w-52 rounded-3xl "
              src="thali Png/1thali.png"
              alt=""
            /> */}
            </div>
            <div className="flex flex-col justify-start items-center">
              <h1 className="p-1 ml-3 text-lg font-semibold ">
                Deluxe North Indian Thali
              </h1>
              <p className="p-1 ml-3 text-[#9c9c9c] text-center">
                A flavorful and satisfying <br />
                assortment of North Indian <br />
                dishes served on a single platter.
              </p>
              <button
                className="p-2 ml-3 text-sm font-semibold text-center border border-black my-2 rounded-lg hover:bg-orange-400"
                onClick={() => {
                  fulInformation;
                }}
              >
                See Full Detail
              </button>
            </div>
          </div>
          <div className=" inline-block bg-white rounded-2xl m-4 shadow-xl hover:shadow-2xl">
            <div
              className="w-52 h-52 inline-block p-2 ml-5 mt-3 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/thali Png/6thali.png')",
              }}
            >
              {/* <img
              className="w-52 rounded-3xl "
              src="thali Png/1thali.png"
              alt=""
            /> */}
            </div>
            <div className="flex flex-col justify-start items-center">
              <h1 className="p-1 ml-3 text-lg font-semibold ">
                Deluxe North Indian Thali
              </h1>
              <p className="p-1 ml-3 text-[#9c9c9c] text-center">
                A flavorful and satisfying <br />
                assortment of North Indian <br />
                dishes served on a single platter.
              </p>
              <button
                className="p-2 ml-3 text-sm font-semibold text-center border border-black my-2 rounded-lg hover:bg-orange-400"
                onClick={() => {
                  fulInformation;
                }}
              >
                See Full Detail
              </button>
            </div>
          </div>
          <div className=" inline-block bg-white rounded-2xl m-4 shadow-xl hover:shadow-2xl">
            <div
              className="w-52 h-52 inline-block p-2 ml-5 mt-3 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/thali Png/6thali.png')",
              }}
            >
              {/* <img
              className="w-52 rounded-3xl "
              src="thali Png/1thali.png"
              alt=""
            /> */}
            </div>
            <div className="flex flex-col justify-start items-center">
              <h1 className="p-1 ml-3 text-lg font-semibold ">
                Deluxe North Indian Thali
              </h1>
              <p className="p-1 ml-3 text-[#9c9c9c] text-center">
                A flavorful and satisfying <br />
                assortment of North Indian <br />
                dishes served on a single platter.
              </p>
              <button
                className="p-2 ml-3 text-sm font-semibold text-center border border-black my-2 rounded-lg hover:bg-orange-400"
                onClick={() => {
                  fulInformation;
                }}
              >
                See Full Detail
              </button>
            </div>
          </div>
          <div className=" inline-block bg-white rounded-2xl m-4 shadow-xl hover:shadow-2xl">
            <div
              className="w-52 h-52 inline-block p-2 ml-5 mt-3 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/thali Png/6thali.png')",
              }}
            >
              {/* <img
              className="w-52 rounded-3xl "
              src="thali Png/1thali.png"
              alt=""
            /> */}
            </div>
            <div className="flex flex-col justify-start items-center">
              <h1 className="p-1 ml-3 text-lg font-semibold ">
                Deluxe North Indian Thali
              </h1>
              <p className="p-1 ml-3 text-[#9c9c9c] text-center">
                A flavorful and satisfying <br />
                assortment of North Indian <br />
                dishes served on a single platter.
              </p>
              <button
                className="p-2 ml-3 text-sm font-semibold text-center border border-black my-2 rounded-lg hover:bg-orange-400"
                onClick={() => {
                  fulInformation;
                }}
              >
                See Full Detail
              </button>
            </div>
          </div>
          <div className=" inline-block bg-white rounded-2xl m-4 shadow-xl hover:shadow-2xl">
            <div
              className="w-52 h-52 inline-block p-2 ml-5 mt-3 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/thali Png/6thali.png')",
              }}
            >
              {/* <img
              className="w-52 rounded-3xl "
              src="thali Png/1thali.png"
              alt=""
            /> */}
            </div>
            <div className="flex flex-col justify-start items-center">
              <h1 className="p-1 ml-3 text-lg font-semibold ">
                Deluxe North Indian Thali
              </h1>
              <p className="p-1 ml-3 text-[#9c9c9c] text-center">
                A flavorful and satisfying <br />
                assortment of North Indian <br />
                dishes served on a single platter.
              </p>
              <button
                className="p-2 ml-3 text-sm font-semibold text-center border border-black my-2 rounded-lg hover:bg-orange-400"
                onClick={() => {
                  fulInformation;
                }}
              >
                See Full Detail
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recipes;
