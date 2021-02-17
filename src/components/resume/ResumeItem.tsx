import React from "react";
import { ResumeItemTypes } from "../../types";

const ResumeItem = ({
  icon,
  companyName,
  duration,
  role,
  roleDescription,
  task,
}: ResumeItemTypes) => {
  return (
    <div className="timeline">
      <div className="timeline-icon">
        <i className={icon}></i>
      </div>
      <div className="timeline-content">
        <h3 className="title">
          {companyName} <span>{duration}</span>
        </h3>
        <div className="description">
          <div>
            <span>{role} : </span>
            {roleDescription}
          </div>
          <span>task:</span> {task}
        </div>
      </div>
    </div>
  );
};

export default ResumeItem;
