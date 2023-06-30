import React, { useRef, useState } from "react";

//import data
import data from "../NikeProducts.json";

const NikeProducts = () => {
  //destructure data
  const { shoes, hats } = data;

  //show & hide state
  const [show, setShow] = useState();

  const toggle = () => {
    setShow((prevShow) => !prevShow);
  };
  let nikeRef = useRef();
  React.useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!nikeRef.current.contains(e.target)) {
        setShow(false);
      }
    });
  });

  return (
    <div className="container max-w-[100%] ">
      <div
        ref={nikeRef}
        className="relative "
      >
        <button
          className="h-[100px] w-[200px] rounded-xl mt-2 bg-red-600 text-white font-medium
           text-[1.2rem] fixed top-1 z-10 px-[2px] transition-all"
          onClick={toggle}
        >
          NIKE PRODUCTS
        </button>
        <div>
          {show && (
            <div className="overflow-hidden">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-9 mt-[150px] transition-all">
                {shoes.map((products) => {
                  //destructure product shoes data
                  const { id, name, price, gender, img } = products;

                  return (
                    <div
                      key={id}
                      className="relative flex flex-col items-center text-center"
                    >
                      <h1 className="font-medium text-[3rem] absolute left-2">{id}</h1>
                      <h1 className="font-medium text-[1.5rem] lg:text-[1.7rem] xl:text-[1.9rem] absolute -top-5">
                        {name}
                      </h1>
                      <div>
                        <img className=" rounded-xl" src={img} alt="" />
                      </div>
                      <p className="font-light text-[1rem] absolute bottom-0 left-4">
                        {gender}
                      </p>
                      <p className="font-medium text-[1.5rem] absolute bottom-0 right-4">
                        $ {price}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
                {hats.map((products) => {
                  //destructure product hats data
                  const { id, name, price, img } = products;
                  return (
                    <div
                      key={id}
                      className="mb-10 relative flex flex-col items-center text-center "
                    >
                      <h1 className="font-medium text-center text-[2rem] absolute -top-5">
                        {name}
                      </h1>
                      <div>
                        <img className="rounded-xl" src={img} alt="" />
                      </div>
                      <p className="font-medium text-[1.5rem] absolute bottom-0 right-4">
                        $ {price}
                      </p>
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

export default NikeProducts;
