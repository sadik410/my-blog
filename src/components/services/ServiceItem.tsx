import React from "react";
import { ServiceItemTypes } from "../../types";

const ServiceItem = ({ icon, title, subtitle }: ServiceItemTypes) => {
  return (
    <div className="service  col-xs-12 col-sm-4 ">
      <div className="service__icon">
        <i className={`${icon} `} />
      </div>
      <h4>{title}</h4>
      <p>{subtitle}</p>
    </div>
  );
};

export default ServiceItem;
