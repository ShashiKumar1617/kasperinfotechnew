import React from "react";
import { BsBuildingsFill, BsFillCreditCard2FrontFill } from "react-icons/bs";
import {
  IoBagHandle,
  IoBookSharp,
  IoShareSocialSharp,
  IoAirplaneSharp,
} from "react-icons/io5";
import {
  MdHealthAndSafety,
  MdSportsCricket,
  MdBusinessCenter,
} from "react-icons/md";
import { FaRobot } from "react-icons/fa6";
import { PiTelevisionFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import '../IndustryComponents/IndustryComponentStyle.css'
import ServiceMainSection from "../ServiceComponents/ServiceSubComponents/ServiceMainSection";

const IndustriesWeServe = () => {
  return (
    <div>
      <section className="home-Testimonials py-5 mb-3 ">
        <ServiceMainSection
          highlights=" INDUSTRIES WE SERVE"
          highlightsDouble="INDUSTRIES"
          heading="Our team is always curious and eager to explore the latest programming languages, frameworks, platforms, and databases. We stay up-to-date with the industry's advancements."
        />
        <div className="industries-container mt-4 mb-3 m-auto container d-flex flex-wrap justify-content-center aline-item-center">
          <Link
            to="/travel-app-development-company"
            className="industries-card d-flex flex-column flex-sm-row justify-content-between aline-item-center p-2 gap-2 text-decoration-none"
          >
            <div className="ic-img">
              <IoAirplaneSharp className="industries-icons" />
            </div>
            <div className="ic-content">
              <h5>Traveling</h5>
            </div>
          </Link>
          <Link className="industries-card d-flex flex-column flex-sm-row justify-content-between aline-item-center p-2 gap-2 text-decoration-none">
            <div className="ic-img">
              <BsBuildingsFill className="industries-icons" />
            </div>
            <div className="ic-content">
              <h5>Real Estate</h5>
            </div>
          </Link>
          <Link
            to="/Social-Network-app-development"
            className="industries-card d-flex flex-column flex-sm-row justify-content-between aline-item-center p-2 gap-2 text-decoration-none"
          >
            <div className="ic-img">
              <IoShareSocialSharp className="industries-icons" />
            </div>
            <div className="ic-content">
              <h5>Social Media</h5>
            </div>
          </Link>
          <Link
            to="/HealthCare-&-Fitness"
            className="industries-card d-flex flex-column flex-sm-row justify-content-between aline-item-center p-2 gap-2 text-decoration-none"
          >
            <div className="ic-img">
              <MdHealthAndSafety className="industries-icons" />
            </div>
            <div className="ic-content">
              <h5>Health & Fitness</h5>
            </div>
          </Link>
          <Link
            to="/media-entertainment-app-development"
            className="industries-card d-flex  flex-column flex-sm-row justify-content-between aline-item-center p-2 gap-2 text-decoration-none"
          >
            <div className="ic-img">
              <PiTelevisionFill className="industries-icons" />
            </div>
            <div className="ic-content">
              <h5>Entertainment</h5>
            </div>
          </Link>
          <Link
            to="/Ecommerce-app-development"
            className="industries-card d-flex flex-column flex-sm-row justify-content-between aline-item-center p-2 gap-2 text-decoration-none"
          >
            <div className="ic-img">
              <IoBagHandle className="industries-icons" />
            </div>
            <div className="ic-content">
              <h5>E-commerce</h5>
            </div>
          </Link>
          <Link
            to="/education-app-development"
            className="industries-card d-flex flex-column flex-sm-row justify-content-between aline-item-center p-2 gap-2 text-decoration-none"
          >
            <div className="ic-img">
              <IoBookSharp className="industries-icons" />
            </div>
            <div className="ic-content">
              <h5>Education</h5>
            </div>
          </Link>
          <Link
            to="/Finance-app-development"
            className="industries-card d-flex flex-column flex-sm-row justify-content-between aline-item-center p-2 gap-2 text-decoration-none"
          >
            <div className="ic-img">
              <BsFillCreditCard2FrontFill className="industries-icons" />
            </div>
            <div className="ic-content">
              <h5>Banking & Finance</h5>
            </div>
          </Link>
          <Link
            to="/sports-app-development-company"
            className="industries-card d-flex flex-column flex-sm-row justify-content-between aline-item-center p-2 gap-2 text-decoration-none"
          >
            <div className="ic-img">
              <MdSportsCricket className="industries-icons" />
            </div>
            <div className="ic-content">
              <h5>Sports</h5>
            </div>
          </Link>
          <Link
            to="/ITES-App-Development"
            className="industries-card d-flex flex-column flex-sm-row justify-content-between aline-item-center p-2 gap-2 text-decoration-none"
          >
            <div className="ic-img">
              <FaRobot className="industries-icons" />
            </div>
            <div className="ic-content">
              <h5>ITES</h5>
            </div>
          </Link>
          <Link
            to="/Business-app-development"
            className="industries-card d-flex  flex-column flex-sm-row justify-content-between aline-item-center p-2 gap-2 text-decoration-none"
          >
            <div className="ic-img">
              <MdBusinessCenter className="industries-icons" />
            </div>
            <div className="ic-content">
              <h5>Business</h5>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndustriesWeServe;
