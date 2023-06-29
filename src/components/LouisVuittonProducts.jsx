import React, { useRef, useState } from "react";

// import data
import data from "../LouisVuittonProducts.json";

const LouisVuittonProducts = () => {
  //destructure LouisVuitton data
  const { handbags, shoes } = data;

  //show & hide state
  const [show, setShow] = useState();

  const toggle = () => {
    setShow((prevShow) => !prevShow);
  };
  let LVRef = useRef();
  React.useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!LVRef.current.contains(e.target)) {
        setShow(false);
      }
    });
  });

  return (
    <div className="px-[20px]">
    <div ref={LVRef} className="relative">

      <button
        className="h-[100px] w-[200px] rounded-xl mt-2 bg-red-600 text-white font-medium
         text-[1.2rem] ml-[250px] fixed top-1 z-10 px-[2px] transition-all"
        onClick={toggle}
      >
        Louis Vuitton
      </button>
      <div>

      {show && (
        <div className="overflow-hidden">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-[200px] mt-[150px] transition-all">
            {handbags.map((products) => {
              //destructure products data
              const { id, name, img, price } = products;
              return (
                <div
                  key={id}
                  className="mb-10 relative flex flex-col items-center text-center shadow-1"
                >
                  <h1 className="font-medium text-[1.5rem] absolute -top-5">
                    {name}
                  </h1>
                  <div className="relative">
                    <img
                      className="rounded-xl w-[300px] h-[300px]"
                      src={img}
                      alt=""
                    />
                    <p className="font-medium text-[1.5rem] absolute bottom-0 right-4">
                      $ {price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
            {shoes.map((products) => {
              const { id, name, img, price } = products;
              return (
                <div
                  key={id}
                  className="mb-10 relative flex flex-col items-center text-center shadow-1 "
                >
                  <h1 className="font-medium text-center text-[1.5rem] lg:text-[1.7rem] xl:text-[1.9rem] absolute -top-5">
                    {name}
                  </h1>
                  <div className="relative">
                    <img
                      className="rounded-xl w-[300px] h-[300px]"
                      src={img}
                      alt=""
                    />
                    <p className="font-medium text-[1.5rem] absolute bottom-0 right-4">
                      {price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      </div>
    </div>
    </div>
  );
};

export default LouisVuittonProducts;
