import React from "react";
import Button from "../components/Button";
import arrowRight from "../assets/icons/arrow-right.svg";
import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section
      id="special-offer"
      className="max-container max-sm:px-2 flex justify-between flex-wrap items-center max-xl:flex-col-reverse gap-10"
    >
      <div className="flex">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full justify-center items-center"
        />
      </div>
      <div className="flex flex-1 flex-col lg:min-w-lg">
        <h2 className="ont-palanquin capitalize text-4xl font-bold lg:min-w-2xl">
          <span className="text-coral-red inline-block mt-3">Special</span>{" "}
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a bshopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfil your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex flex-wrap gap-4 mt-11">
          <Button label="View Details" iconUrl={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            textColor="text-slate-gray"
            borderColor="border-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
