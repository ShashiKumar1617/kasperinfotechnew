import React, { useEffect } from "react";
import Android from "../../Assets/Images/Services/Mobiledev/Android.svg";
import Backenddev from "../../Assets/Images/Services/Mobiledev/Backenddev.svg";
import Crossplatform from "../../Assets/Images/Services/Mobiledev/Crossplatform.svg";
import IOS from "../../Assets/Images/Services/Mobiledev/IOS.svg";
import mobilemaintanance from "../../Assets/Images/Services/Mobiledev/mobilemaintanance.svg";
import qualityassuarnce from "../../Assets/Images/Services/Mobiledev/qualityassuarnce.svg";
import security from "../../Assets/Images/Services/Mobiledev/security.svg";
import UIUXMOBILE from "../../Assets/Images/Services/Mobiledev/UIUXMOBILE.svg";
import webapp from "../../Assets/Images/Services/Mobiledev/webapp.svg";
import LaunchService from "../../Assets/Images/Services/Mobiledev/LaunchService.svg";
import MobileDevelopment from "../../Assets/Images/Services/Mobiledev/MobileDevelopment.svg";
import TestingQuality from "../../Assets/Images/Services/Mobiledev/TestingQuality.svg";
import DeploymentApp from "../../Assets/Images/Services/Mobiledev/DeploymentApp.svg";
import Design from "../../Assets/Images/Services/Mobiledev/Design.svg";
import Idea from "../../Assets/Images/Services/Mobiledev/Idea.svg";
import ServiceMainSection from "../../Components/SubComponents/ServiceComponents/ServiceSubComponents/ServiceMainSection";
import {
  TwoPartGridLeft,
  TwoPartGridRight,
} from "../../Components/SubComponents/ServiceComponents/ServiceSubComponents/TwoPartGrid";

import Illustrator from "../../Assets/Images/tech/MobileStacks/MOBILEUI/Illustrator.webp";
import Sketch from "../../Assets/Images/tech/MobileStacks/MOBILEUI/Sketch.webp";
import FIGMA from "../../Assets/Images/tech/MobileStacks/MOBILEUI/FIGMA.webp";
import MUI from "../../Assets/Images/tech/MobileStacks/MOBILEUI/MUI.webp";
import SwiftUi from "../../Assets/Images/tech/MobileStacks/MOBILEUI/SwiftUi.webp";
import UiKIT from "../../Assets/Images/tech/MobileStacks/MOBILEUI/UiKIT.webp";
import AppleUI from "../../Assets/Images/tech/MobileStacks/MOBILEUI/AppleUI.webp";
import AndroidStudio from "../../Assets/Images/tech/MobileStacks/MOBILELANGUAGE/AndroidStudio.webp";
import CSharp from "../../Assets/Images/tech/MobileStacks/MOBILELANGUAGE/CSharp.webp";
import Flutter from "../../Assets/Images/tech/MobileStacks/MOBILELANGUAGE/Flutter.webp";
import Nodejs from "../../Assets/Images/tech/MobileStacks/MOBILELANGUAGE/Nodejs.webp";
import Objectivec from "../../Assets/Images/tech/MobileStacks/MOBILELANGUAGE/Objectivec.webp";
import Python from "../../Assets/Images/tech/MobileStacks/MOBILELANGUAGE/Python.webp";
import Reactnative from "../../Assets/Images/tech/MobileStacks/MOBILELANGUAGE/Reactnative.webp";
import AWSMOBILE from "../../Assets/Images/tech/MobileStacks/Cloud&DB/AWSMOBILE.webp";
import Firebase from "../../Assets/Images/tech/MobileStacks/Cloud&DB/Firebase.webp";
import MongodbMob from "../../Assets/Images/tech/MobileStacks/Cloud&DB/MongodbMob.webp";
import MarinaDB from "../../Assets/Images/tech/MobileStacks/Cloud&DB/MarinaDB.webp";
import mysql from "../../Assets/Images/tech/MobileStacks/Cloud&DB/mysql.webp";
import postgresql from "../../Assets/Images/tech/MobileStacks/Cloud&DB/postgresql.webp";
import SQLLite from "../../Assets/Images/tech/MobileStacks/Cloud&DB/SQLLite.webp";
import GIT from "../../Assets/Images/tech/MobileStacks/Cloud&DB/GIT.webp";
import IndustriesWeServe from "../../Components/SubComponents/About/IndustriesWeServe";
import background from "../../Assets/Images/Services/Mobiledev/mOBILEdEVELOPMENTsERVICVES.jpg";
import MainHeader from "../../Components/SubComponents/Header/MainHeader";
import { Helmet } from "react-helmet";

const AppDevelopment = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
      <Helmet>
        <title>
        Mobile App Development Service Provider | Kasper Infotech
        </title>
        <meta
          name="discription"
          content="Explore our top-notch Mobile app development services. Our skilled team creates innovative and user-friendly apps tailored to your business needs."
        />
        <meta
          name="keywords"
          content="Mobile App Development"
        />
      </Helmet>
      <div className="HideServiceList">
        <MainHeader
          background={background}
          mainheading="MOBILE APP DEVELOPMENT COMPANY"
          subHeading="Kasper Infotech is a distinguished Mobile App Development Company celebrated for its expertise in mobile app development services. Our dedicated team of mobile app developers excels in creating custom mobile solutions tailored to your specific requirements. We take pride in delivering top-quality mobile app development services you can trust."
        />
        <ServiceMainSection
          highlights="OUR SERVICES"
          highlightsDouble="SERVICES"
          heading="Boost Your Digital Presence with Our Exceptional Mobile App Development Services."
        />
        <div className="row container m-auto">
          <TwoPartGridLeft
            title="UI/UX Design"
            Discription="The success of a mobile app greatly depends on the design. Services include user interface and user experience design, wireframing, prototyping and creating visually appealing and user-friendly app interfaces."
            ImageHandle={UIUXMOBILE}
          />
          <TwoPartGridRight
            title="iOS App Development"
            Discription="Our team excel in framing apps for Apple's iOS platform. We are skilled in Swift and Objective-C programming languages and stay up-to-date with the latest iOS guidelines and design principles."
            ImageHandle={IOS}
          />
          <TwoPartGridLeft
            title="Android App Development"
            Discription="Using Java and Kotlin, the two most popular programming languages for Android development, we are experts at building Android apps. We know various Android hardware and software."
            ImageHandle={Android}
          />
          <TwoPartGridRight
            title="Cross-Platform App Development"
            Discription="We can create apps that operate without any issues on iOS and Android devices saving you time and money. To do this, we use frameworks like React Native, Flutter or Xamarin."
            ImageHandle={Crossplatform}
          />
          <TwoPartGridLeft
            title="Backend Development"
            Discription="Most mobile apps also need a backend server to manage data storage, user authentication and other functions. Setting up servers, databases and APIs is part of backend development."
            ImageHandle={Backenddev}
          />
          <TwoPartGridRight
            title="Quality Assurance and Testing"
            Discription="Testing is required to ensure the app functions correctly and is free of bugs and vulnerabilities. Services include functional testing, usability testing, security testing and performance testing."
            ImageHandle={qualityassuarnce}
          />
          <TwoPartGridLeft
            title="Maintenance and Updates"
            Discription="After the app is live, ongoing maintenance is essential to fix bugs, enhance features and ensure compatibility with new device versions and operating system updates."
            ImageHandle={mobilemaintanance}
          />
          <TwoPartGridRight
            title="Progressive Web Apps"
            Discription="Our Progressive Web Apps offer an app-like experience through web browsers. They feature offline capabilities, fast loading times and responsive designs making them accessible on various devices."
            ImageHandle={webapp}
          />
          <TwoPartGridLeft
            title="Security"
            Discription="We provide essential services as part of our solid commitment to protecting customer data and application integrity. Some examples are state-of-the-art encryption, robust authentication protocols, and thorough assessments of risk exposure."
            ImageHandle={security}
          />
        </div>
        <IndustriesWeServe />
        <ServiceMainSection
          highlights="OUR DEVELOPMENT PROCESS"
          highlightsDouble="PROCESS"
          heading="Steps we follow to provide best quality services."
        />
        <div className="row container m-auto">
          <TwoPartGridLeft
            title="Idea "
            Discription="Using our mobile app development company, bring your creative concepts to life. We are experts in transforming the creative ideas that you have into high-standard, easy-to-use mobile applications that can be used in a variety of different markets."
            ImageHandle={Idea}
          />
          <TwoPartGridRight
            title="Design & Prototyping"
            Discription="Our expert designers create visual representations and interactive prototypes to showcase how your app will look and function. We focus on designs that are user-friendly and align with your brand."
            ImageHandle={Design}
          />
          <TwoPartGridLeft
            title="Development"
            Discription="Our skilled developers take the approved design and turn it into a working app. Using the latest technologies and best coding practices we build an app that's both robust and responsive. "
            ImageHandle={MobileDevelopment}
          />
          <TwoPartGridRight
            title="Testing & Quality Assurance"
            Discription="We subject the app to strict testing to ensure it works flawlessly. It contains checking for functionality, performance and security. Any issues are identified and resolved promptly to guarantee a smooth user experience."
            ImageHandle={TestingQuality}
          />
          <TwoPartGridLeft
            title="Deployment"
            Discription="Once the app is flawless then we prepare it for launch. We will help you navigate the app store submission process ensuring that your app meets all the requirements for a successful release."
            ImageHandle={DeploymentApp}
          />
          <TwoPartGridRight
            title="Post-Launch Support"
            Discription="Our commitment doesn't end with the launch. We offer continuous support and maintenance to keep your app running smoothly. We can also implement updates and new features as needed."
            ImageHandle={LaunchService}
          />
        </div>
        <br />
        <ServiceMainSection
          highlights="TECHNOLOGY WE USE"
          highlightsDouble="TECHNOLOGY"
          heading="Our expertise combined with these technologies allows us to craft Mobile applications that are not only robust and scalable but also innovative, all tailored precisely to meet our client's unique requirements."
        />
        <div className="Tech-images container m-auto">
          <h3 className="text-center text-uppercase fw-bolder mt-4">UI/UX</h3>
          <hr style={{ opacity: "10%" }} className="w-25 m-auto" />
          <div className="row w-flex justify-content-center text-success gap-3">
            <img
              title="Adobe Illustrator"
              style={{ width: "80px", height: "60px" }}
              src={Illustrator}
              alt=""
            />
            <img
              title="Sketch"
              style={{ width: "80px", height: "60px" }}
              src={Sketch}
              alt=""
            />
            <img
              title="MUI"
              style={{ width: "80px", height: "60px" }}
              src={MUI}
              alt=""
            />
            <img
              title="Figma"
              style={{ width: "80px", height: "60px" }}
              src={FIGMA}
              alt=""
            />
            <img
              title="Swift UI"
              style={{ width: "80px", height: "60px" }}
              src={SwiftUi}
              alt=""
            />
            <img
              title="UiKIT"
              style={{ width: "80px", height: "60px" }}
              src={UiKIT}
              alt=""
            />
            <img
              title="Apple UI"
              style={{ width: "80px", height: "60px" }}
              src={AppleUI}
              alt=""
            />
          </div>
        </div>
        <div className="Tech-images container m-auto">
          <h3 className="text-center text-uppercase fw-bolder mt-4">
            Development
          </h3>
          <hr style={{ opacity: "10%" }} className="w-50 m-auto" />
          <div className="row w-flex justify-content-center text-success gap-3">
            <img
              title="Android Studio"
              style={{ width: "80px", height: "60px" }}
              src={AndroidStudio}
              alt=""
            />
            <img
              title="C#"
              style={{ width: "80px", height: "60px" }}
              src={CSharp}
              alt=""
            />
            <img
              title="Flutter"
              style={{ width: "80px", height: "60px" }}
              src={Flutter}
              alt=""
            />
            <img
              title="Nodejs"
              style={{ width: "80px", height: "60px" }}
              src={Nodejs}
              alt=""
            />
            <img
              title="Python"
              style={{ width: "80px", height: "60px" }}
              src={Python}
              alt=""
            />
            <img
              title="Objective-C"
              style={{ width: "80px", height: "60px" }}
              src={Objectivec}
              alt=""
            />
            <img
              title="React Native"
              style={{ width: "80px", height: "60px" }}
              src={Reactnative}
              alt=""
            />
          </div>
        </div>
        <div className="Tech-images container m-auto">
          <h3 className="text-center text-uppercase fw-bolder mt-4 mb-1">
            Cloud & Database
          </h3>
          <hr style={{ opacity: "10%" }} className="w-75 m-auto" />
          <div className="row w-flex justify-content-center text-success gap-3">
            <img
              title="AWS"
              style={{ width: "80px", height: "60px" }}
              src={AWSMOBILE}
              alt=""
            />
            <img
              title="Firebase"
              style={{ width: "80px", height: "60px" }}
              src={Firebase}
              alt=""
            />
            <img
              title="MongoDB"
              style={{ width: "80px", height: "60px" }}
              src={MongodbMob}
              alt=""
            />
            <img
              title="MarinaDB"
              style={{ width: "80px", height: "60px" }}
              src={MarinaDB}
              alt=""
            />
            <img
              title="MySQL"
              style={{ width: "80px", height: "60px" }}
              src={mysql}
              alt=""
            />
            <img
              title="PostgreSQL"
              style={{ width: "80px", height: "60px" }}
              src={postgresql}
              alt=""
            />
            <img
              title="SQLLite"
              style={{ width: "80px", height: "60px" }}
              src={SQLLite}
              alt=""
            />
            <img
              title="GIT"
              style={{ width: "80px", height: "60px" }}
              src={GIT}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDevelopment;
