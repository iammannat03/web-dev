import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 justify-center items-center flex-col w-full max-sm:w-full mb-4">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="sm:w-full sm:px-2">
        <div className="mt-4 flex justify-start gap-2.5">
          <img src={star} alt="rating" width={24} height={24} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            ({rating})
          </p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin whitespace-nowrap ">
          {name}
        </h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-xl">
          {price}
        </p>
      </div>
    </div>
  );
};

export default PopularProductCard;
