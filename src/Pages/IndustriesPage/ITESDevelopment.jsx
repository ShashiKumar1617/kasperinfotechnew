import React, { useEffect } from "react";
import ServiceMainSection from "../../Components/SubComponents/ServiceComponents/ServiceSubComponents/ServiceMainSection";
import {
  TwoPartGridLeft,
  TwoPartGridRight,
} from "../../Components/SubComponents/ServiceComponents/ServiceSubComponents/TwoPartGrid";
import ITESAppImages from "../../Assets/Images/Industries/ITES/ITESAppImages.webp";
import DataEntry from "../../Assets/Images/Industries/ITES/DataEntry.svg";
import CustomerSupport from "../../Assets/Images/Industries/ITES/CustomerSupport.svg";
import Ecommerce from "../../Assets/Images/Industries/ITES/Ecommerce.svg";
import UXUIDesign from "../../Assets/Images/Industries/ITES/UXUIDesign.svg";
import Cybersecurity from "../../Assets/Images/Industries/ITES/Cybersecurity.svg";
import CloudComputing from "../../Assets/Images/Industries/ITES/CloudComputing.svg";
import AgileDevelopment from "../../Assets/Images/Industries/ITES/AgileDevelopment.svg";
import DevOps from "../../Assets/Images/Industries/ITES/DevOps.svg";
import CloudAdoption from "../../Assets/Images/Industries/ITES/CloudAdoption.svg";
import CybersecurityMeasures from "../../Assets/Images/Industries/ITES/CybersecurityMeasures.svg";
import Intelligence from "../../Assets/Images/Industries/ITES/Intelligence.svg";
import Governance from "../../Assets/Images/Industries/ITES/Governance.svg";

import JavaScript from "../../Assets/Images/tech/ProgLang/JavaScript.webp";
import TypeScript from "../../Assets/Images/tech/ProgLang/TypeScript.webp";
import python from "../../Assets/Images/tech/ProgLang/python.webp";
import Java from "../../Assets/Images/tech/ProgLang/Java.webp";
import CLang from "../../Assets/Images/tech/ProgLang/CLang.webp";
import Kotlin from "../../Assets/Images/tech/ProgLang/Kotlin.webp";
import Php from "../../Assets/Images/tech/ProgLang/Php.webp";
import swift from "../../Assets/Images/tech/ProgLang/swift.webp";
import Ruby from "../../Assets/Images/tech/ProgLang/Ruby.webp";
import angular from "../../Assets/Images/tech/Framework/angular.webp";
import ReactIMG from "../../Assets/Images/tech/Framework/React.webp";
import Vue from "../../Assets/Images/tech/Framework/Vue.webp";
import django from "../../Assets/Images/tech/Framework/django.webp";
import laravel from "../../Assets/Images/tech/Framework/laravel.webp";
import springbot from "../../Assets/Images/tech/Framework/springbot.webp";
import asp from "../../Assets/Images/tech/Framework/asp.webp";
import codeignaater from "../../Assets/Images/tech/Framework/codeignaater.webp";
import AWS from "../../Assets/Images/tech/CloudandDB/AWS.webp";
import Azure from "../../Assets/Images/tech/CloudandDB/Azure.webp";
import GoogleCloud from "../../Assets/Images/tech/CloudandDB/GoogleCloud.webp";
import Mongo from "../../Assets/Images/tech/CloudandDB/Mongo.webp";
import mysql from "../../Assets/Images/tech/CloudandDB/mysql.webp";
import salesforce from "../../Assets/Images/tech/CloudandDB/salesforce.webp";
import AmazonDynamoDb from "../../Assets/Images/tech/CloudandDB/AmazonDynamoDb.webp";
import IBM from "../../Assets/Images/tech/CloudandDB/IBM.webp";
import MarinaDB from "../../Assets/Images/tech/CloudandDB/MarinaDB.webp";
import MsSQLServer from "../../Assets/Images/tech/CloudandDB/MsSQLServer.webp";
import redis from "../../Assets/Images/tech/CloudandDB/redis.webp";

import TechStacks from "../../Components/SubComponents/TechStacks";
import IndustriesWeServe from "../../Components/SubComponents/About/IndustriesWeServe";
import SingleTools from "../../Components/SubComponents/ServiceComponents/ServiceSubComponents/SingleTools";
import { GiCargoShip, GiReceiveMoney } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { FaCashRegister } from "react-icons/fa6";
import { BiSolidFactory } from "react-icons/bi";
import { PiBooksBold } from "react-icons/pi";
import IndistryHeaderComp from "../../Components/SubComponents/IndustryComponents/IndistryHeaderComp";
import { Helmet } from "react-helmet";
const ITESDevelopment = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
    <Helmet>
        <title>
        Best Information Technology Enabled Services |Kasper InfoTech
        </title>
        <meta
          name="discription"
          content="Boost your business with Information Technology Enabled Services quality Services Explore our solutions for efficiency and growth."
        />
        <meta
          name="keywords"
          content="Information Technology Enabled Services"
        />
      </Helmet>
      <IndistryHeaderComp
        HeaderImage={ITESAppImages}
        heading="Information Technology Enable Services"
        subheading="Kasper InfoTech leads the way in Information Technology Enabled Services. We empower businesses with advanced technology solutions improving efficiency, productivity, and innovation. Experience transformative IT services with us."
      />
      <ServiceMainSection
        highlights="Our key ITES offerings Services include"
        highlightsDouble="SERVICES"
        heading="The Information Technology Enabled Service at Kasper InfoTech provides a diverse and wide range of solutions customized to meet the dynamic needs of businesses across various industries."
      />
      <div className="row container m-auto">
        <TwoPartGridLeft
          title="Custom Software Development" 
          list1="Tailored Solutions: Crafting bespoke software solutions that precisely align with a company's requirements, effectively addressing their specific challenges."
          list2="Multi-Platform Expertise: Demonstrated proficiency in developing applications for a diverse range of platforms, including web, mobile, and desktop environments."
          ImageHandle={DataEntry}
        />
        <TwoPartGridRight
          title="Mobile App Development"
          list1="Platform Diversity: Implementing strategies to guarantee uniform performance and user experience, irrespective of the device or operating system being utilized."
          list2="User-Centric Design: Meticulously crafting intuitive interfaces that not only prioritize user satisfaction but also foster deep engagement and positive interactions."
          ImageHandle={CustomerSupport}
        />
        <TwoPartGridLeft
          title="Web Application Development"
          list1="Responsive Design: Skillfully constructing web applications that effortlessly adjust to an array of screen sizes and devices for an optimal user experience."
          list2="Scalability and Performance: Expertly designing solutions capable of efficiently managing heightened user loads and processing large volumes of data seamlessly."
          ImageHandle={Ecommerce}
        />
        <TwoPartGridRight
          title="UX/UI Design Services"
          list1="User-Centered Design: Employing in-depth user research, and personas, to make well-informed design decisions that prioritize user satisfaction and engagement."
          list2="Prototyping and Wireframing: Employing specialized tools to develop interactive prototypes offering a visual representation of the user's journey through the interface."
          ImageHandle={UXUIDesign}
        />
        <TwoPartGridLeft
          title="Cybersecurity Solutions"
          list1="Security Assessments and Audits: In order to better protect against potential attacks, it is important to analyze systems, locate vulnerabilities, and evaluate risks."
          list2="Implementing Security: Setting up firewalls, encrypting data, instituting access controls, and taking other precautions are all important forms of data protection."
          ImageHandle={Cybersecurity}
        />
        <TwoPartGridRight
          title="Cloud Computing Services"
          list1="Migration and Integration: Integrating cloud solutions with the information technology infrastructure that is already in place in order to increase scalability."
          list2="Infrastructure and Platforms: Providing a solution that incorporates both Infrastructure as a Service and Platform as a Service into one cohesive offering."
          ImageHandle={CloudComputing}
        />
      </div>
      <IndustriesWeServe />
      <ServiceMainSection
        highlights="Advantages of our ITES Services"
        highlightsDouble="ADVANTAGE"
        heading="These advantages include increased efficiency and customer service. Here are some key benefits of ITES"
      />
      <div className="row container m-auto">
        <TwoPartGridLeft
          title="Agile Development"
          list1="Iterative Approach: The purpose of breaking down large projects into more manageable chunks known as iterations or sprints is at the heart of agile software development."
          list2="Cross-Functional Teams: Agile teams are often made up of personnel who possess a wide range of talents (including designers, testers, and developers, among others)."
          ImageHandle={AgileDevelopment}
        />
        <TwoPartGridRight
          title="DevOps Integration"
          list1="Continuous Integration (CI): Continuous Integration (CI) is the practice of repeatedly integrating new or revised code from various developers into a central repository."
          list2="Continuous Deployment (CD): The process of deploying code changes to production after they have successfully passed automated tests is automated by CD."
          ImageHandle={DevOps}
        />
        <TwoPartGridLeft
          title="Cloud Adoption"
          list1="Scalability and Flexibility: Cloud services allow users to dynamically assign resources to meet their demands in real-time, improving flexibility and efficiency."
          list2="Data Security and Compliance: To protect their client's data, cloud companies make available extensive security measures and compliance frameworks."
          ImageHandle={CloudAdoption}
        />
        <TwoPartGridRight
          title="Cybersecurity Measures"
          list1="Security Layers: A recommended security measure is to combine the usage of intrusion detection systems, firewalls, antivirus software, and encryption techniques."
          list2="Training and Awareness: It is absolutely necessary to educate staff members on the most effective cybersecurity practices as well as the potential threats they confront."
          ImageHandle={CybersecurityMeasures}
        />
        <TwoPartGridLeft
          title="Artificial Intelligence & Machine Learning Integration"
          list1="Predictive Analytics: Using algorithms based on artificial intelligence and machine learning to analyze vast datasets in order to draw findings or make recommendations."
          list2="Automating repetitive tasks: By employing AI and ML in the automation of mundane procedures, human resources can be redirected to perform work that is more strategic."
          ImageHandle={Intelligence}
        />
        <TwoPartGridRight
          title="Data Governance and Compliance"
          list1="Protecting Data: Putting in place guidelines and procedures to guarantee compliance with all applicable data protection regulations (including GDPR and HIPAA) respectively."
          list2="Data Quality and Integrity: Putting into place procedures that will ensure the data's quality, consistency, and reliability at all times will be a step in the right direction"
          ImageHandle={Governance}
        />
      </div>
      <br />
      <br />
      <ServiceMainSection
        highlights="TECHNOLOGY WE USE"
        highlightsDouble="TECHNOLOGY"
        heading="Our team is always curious and eager to explore the latest programming languages, frameworks, platforms, and databases. We stay up-to-date with the industry's advancements."
      />
      <TechStacks
        Filter1="Programming Languages"
        Filter2="Platform & Frameworks"
        Filter3="Cloud & Database"
        page1Image1={JavaScript}
        page1Image2={TypeScript}
        page1Image3={python}
        page1Image4={Java}
        page1Image5={CLang}
        page1Image6={Kotlin}
        page1Image7={Php}
        page1Image8={swift}
        page1Image9={Ruby}
        page2Image1={ReactIMG}
        page2Image2={angular}
        page2Image3={Vue}
        page2Image4={django}
        page2Image5={laravel}
        page2Image6={springbot}
        page2Image7={asp}
        page2Image8={codeignaater}
        page3Image1={AWS}
        page3Image2={Azure}
        page3Image3={GoogleCloud}
        page3Image4={Mongo}
        page3Image5={mysql}
        page3Image6={salesforce}
        page3Image7={AmazonDynamoDb}
        page3Image8={IBM}
        page3Image9={MarinaDB}
        page3Image10={MsSQLServer}
        page3Image11={redis}
      />
      <br />
      <br />
      <ServiceMainSection
        highlights="Our Impact in Information Technology Services"
        highlightsDouble="Our Impact"
      />
      <br />
      <div className="row container m-auto HideServiceList row-gap-5 mt-5">
        <div className="col-12 col-md-6">
          <SingleTools
            Icons={<MdHealthAndSafety />}
            heading="Healthcare"
            paragraph="Telemedicine: The use of Information Technology enables remote consultations, monitoring, and diagnosis, and improving patient outcomes."
          />
        </div>
        <div className="col-12 col-md-6">
          <SingleTools
            Icons={<GiReceiveMoney />}
            heading="Finance"
            paragraph="Algorithmic Trading: Information Technology services play a crucial role in the development and implementation of algorithmic trading strategies, and market efficiency."
          />
        </div>
        <div className="col-12 col-md-6">
          <SingleTools
            Icons={<FaCashRegister />}
            heading="Retail"
            paragraph="Data Analytics: Information Technology services help retailers analyze customer data to understand preferences, optimize inventory, and personalize marketing strategies."
          />
        </div>
        <div className="col-12 col-md-6">
          <SingleTools
            Icons={<BiSolidFactory />}
            heading="Manufacturing"
            paragraph="CAD/CAM Systems: Computer-Aided Design (CAD) and Computer-Aided Manufacturing (CAM) systems, prototyping, and manufacturing processes."
          />
        </div>
        <div className="col-12 col-md-6">
          <SingleTools
            Icons={<PiBooksBold />}
            heading="Education"
            paragraph="E-learning Platforms: IT services have facilitated the growth of online education, providing access to educational resources, and remote collaboration tools."
          />
        </div>
        <div className="col-12 col-md-6">
          <SingleTools
            Icons={<GiCargoShip />}
            heading="Transportation"
            paragraph="GPS and Navigation Systems:  Information Technology services power GPS technology, enabling accurate navigation, route optimization, and real-time tracking in transportation and logistics."
          />
        </div>
      </div>
    </>
  );
};

export default ITESDevelopment;
