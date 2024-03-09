import React from "react";
import { services } from "../constants";
import Service from "../components/Service";

const Services = () => {
  return (
    <section className="max-container flex flex-wrap justify-center gap-9">
      {services.map((service) => (
        <Service key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
