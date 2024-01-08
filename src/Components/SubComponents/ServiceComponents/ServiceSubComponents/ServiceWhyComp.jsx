import React from "react";
import HighQuality from "../../../../Assets/Images/Services/WebDevelopment/HighQuality.png";
import Satisfaction from "../../../../Assets/Images/Services/WebDevelopment/Satisfaction.png";
import Unique from "../../../../Assets/Images/Services/WebDevelopment/Unique.png";
import ServiceMainSection from "./ServiceMainSection";

import './ServiceSubComp.css'
const ServiceWhyComp = () => {
  return (
    <>
      <div className="py-4">
        <div className="container pt-3 pb-1">
          <ServiceMainSection
            highlights="OUR STANDARD"
            highlightsDouble="STANDARD"
            heading="Empower Your Vision with Our Web App Development Experts"
          />
          <div className="row py-2">
            <div className="card-bg col-12 col-md-4 py-1 px-5">
              <div className="img-container w-10 d-flex">
                <img className="w-25 p-2" src={HighQuality} alt="" />
              </div>
              <div className="text-container">
                <p className="text-start py-2 px-3">
                  We are a team of experienced and knowledgeable web app
                  developers passionate about helping companies to grow.
                </p>
              </div>
            </div>
            <div className="card-bg col-12 col-md-4 py-1 px-5">
              <div className="img-container w-10 d-flex">
                <img className="w-25 p-2" src={Unique} alt="" />
              </div>
              <div className="text-container">
                <p className="text-start py-2 px-3">
                  Every business is unique, so we take the time to understand
                  your needs and goals before we start development.
                </p>
              </div>
            </div>
            <div className="card-bg col-12 col-md-4 py-1 px-5">
              <div className="img-container w-10 d-flex">
                <img className="w-25 p-2" src={Satisfaction} alt="" />
              </div>
              <div className="text-container">
                <p className="text-start py-2 px-3">
                  We provide a satisfaction guarantee on all our services and
                  are always accessible to address your questions and concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceWhyComp;
