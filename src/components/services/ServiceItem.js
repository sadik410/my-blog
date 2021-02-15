import React from "react";
import PropTypes from "prop-types";

const ServiceItem = ({ icon, title, subtitle }) => {
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

ServiceItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

ServiceItem.defaultProps = {};

export default ServiceItem;
