import React, { useEffect } from "react";
import ServiceMainSection from "../../Components/SubComponents/ServiceComponents/ServiceSubComponents/ServiceMainSection";
import ContentMarketing from "../../Assets/Images/Services/DegitalMarketing/ContentMarketing.svg";
import Conversion from "../../Assets/Images/Services/DegitalMarketing/Conversion.svg";
import EmailSEO from "../../Assets/Images/Services/DegitalMarketing/EmailSEO.svg";
import PPCADVER from "../../Assets/Images/Services/DegitalMarketing/PPCADVER.svg";
import Reporting from "../../Assets/Images/Services/DegitalMarketing/Reporting.svg";
import SEOSearch from "../../Assets/Images/Services/DegitalMarketing/SEOSearch.svg";
import SocialMedia from "../../Assets/Images/Services/DegitalMarketing/SocialMedia.svg";
import analyst from "../../Assets/Images/Services/DegitalMarketing/analyst.svg";
import ContentCreator from "../../Assets/Images/Services/DegitalMarketing/ContentCreator.svg";
import EmailMarketing from "../../Assets/Images/Services/DegitalMarketing/EmailMarketing.svg";
import onlinemarketing from "../../Assets/Images/Services/DegitalMarketing/onlinemarketing.svg";
import paidadvertising from "../../Assets/Images/Services/DegitalMarketing/paidadvertising.svg";
import SocialmediaMarketing from "../../Assets/Images/Services/DegitalMarketing/SocialmediaMarketing.svg";
import {
  TwoPartGridLeft,
  TwoPartGridRight,
} from "../../Components/SubComponents/ServiceComponents/ServiceSubComponents/TwoPartGrid";
import IndustriesWeServe from "../../Components/SubComponents/About/IndustriesWeServe";
import WhyUsComp from "../../Components/SubComponents/ServiceComponents/ServiceSubComponents/WhyUsComp";
import MainHeader from "../../Components/SubComponents/Header/MainHeader";
import background from "../../Assets/Images/Services/DegitalMarketing/DIGITALMARKETINGBACKGROUND.jpg"

const DigitalMarketing = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
      <MainHeader
        background={background}
        mainheading="DIGITAL MARKETING AGENCY"
        subHeading="Kasper Infotech is not merely a company; we are a team of dedicated professionals passionate about crafting outstanding digital marketing solutions. Our years of expertise make us a reliable partner for innovative digital marketing strategies."
      />
      <ServiceMainSection
        highlights="OUR SERVICES"
        highlightsDouble="SERVICES"
        heading="In the modern business environment building a strong online presence is important for companies whether small startups or large businesses. We provide digital marketing services designed to increase your brand awareness and deliver real, measurable results."
      />
      <div className="row container m-auto">
        <TwoPartGridLeft
          title="Search Engine Optimization (SEO)"
          Discription=""
          ImageHandle={SEOSearch}
          list1="Improve your website's visibility in search engines. "
          list2="Increase organic traffic and generate leads."
          list3="Stay ahead of your competitors with ongoing SEO efforts."
          bracket1="💠"
          bracket2="💠"
          bracket3="💠"
        />
        <TwoPartGridRight
          title="Pay-Per-Click (PPC) Advertising"
          Discription=""
          ImageHandle={PPCADVER}
          list1="Run targeted and cost-effective advertising campaigns. "
          list2="Reach potential customers with the right ads at the right time. "
          list3="Maximize your return on investment (ROI) with continuous optimization."
          bracket1="💠"
          bracket2="💠"
          bracket3="💠"
        />
        <TwoPartGridLeft
          title="Social Media Marketing"
          Discription=""
          ImageHandle={SocialMedia}
          list1="Make a strong presence on famous social media platforms."
          list2="Better content helps you to connect with your users easily."
          list3="Use sponsored advertising to reach more people."
          bracket1="💠"
          bracket2="💠"
          bracket3="💠"
        />
        <TwoPartGridRight
          title="Content Marketing"
          Discription=""
          ImageHandle={ContentMarketing}
          list1="Create valuable and relevant content. "
          list2="Boost your business' image as an industry leader. "
          list3="Drive traffic and generate leads with strategic content."
          bracket1="💠"
          bracket2="💠"
          bracket3="💠"
        />
        <TwoPartGridLeft
          title="Email Marketing"
          Discription=""
          ImageHandle={EmailSEO}
          list1="Develop personalized email campaigns."
          list2="Create leads and maintain customer relationships."
          list3="Monitor email performance for ongoing improvement."
          bracket1="💠"
          bracket2="💠"
          bracket3="💠"
        />
        <TwoPartGridRight
          title="Conversion Rate Optimization (CRO)"
          Discription=""
          ImageHandle={Conversion}
          list1="Increase the percentage of website visitors converted into customers. "
          list2="Improve user experience, forms and landing pages."
          list3="Continuously develop strategies based on data and user behaviour."
          bracket1="💠"
          bracket2="💠"
          bracket3="💠"
        />
        <TwoPartGridLeft
          title="Analytics and Reporting"
          Discription=""
          ImageHandle={Reporting}
          list1="Learn crucial facts about the effectiveness of your digital marketing. "
          list2="Make informed decisions based on data."
          list3="Track ROI and monitor the effectiveness of your marketing campaigns."
          bracket1="💠"
          bracket2="💠"
          bracket3="💠"
        />
      </div>
      <br />
      <br />
      <ServiceMainSection
        highlights="WHY US"
        highlightsDouble="WHY US"
        heading="Why Kasper Infotech is the best choice for selecting from the top Web Application Development Companies in India"
      />
      <WhyUsComp
        whytext1="Kasper Infotech has ten years of experience improving the online presence of businesses of all sizes."
        whytext2="Our team develops strategies specifically tailored to your needs and is up-to-date on the latest technological advancements."
        whytext3="We focus on results, setting specific goals and tracking your development to achieve visible results."
        whytext4="Our agency offers affordable prices and quality services without breaking your budget."
      />
      <IndustriesWeServe />
      <ServiceMainSection
        highlights="OUR DIGITAL MARKETING PROCESS"
        highlightsDouble="PROCESS"
        heading="Kasper Infotech is known as a Digital Marketing Company which provides different types of digital marketing services not just in India but all over the world. It helps businesses grow their online presence and reach new customers through digital marketing. Our digital marketing process is tailored to each business's specific needs and goals."
      />
      <br />
      <div className="row container m-auto HideServiceList">
        <TwoPartGridLeft
          title="Strategy Development"
          Discription="Firstly work with you to understand your business, target audience and goals. We then develop a complete digital marketing strategy outlining the channels and methods we will use to reach your target audience and achieve your desired results."
          ImageHandle={onlinemarketing}
        />
        <TwoPartGridRight
          title="Content Creation"
          Discription="Create high-quality content that is informative, attractive and relevant content to your target audience. This content attracts visitors to your website builds relationships with potential customers and drives sales."
          ImageHandle={ContentCreator}
        />
        <TwoPartGridLeft
          title="SEO"
          Discription="An important part of digital marketing is SEO or search engine optimization. Optimizing websites for search engine rankings raises their online visibility and increases organic traffic, which in turn improves a brand's online presence and supports consumer interaction."
          ImageHandle={SocialMedia}
        />
        <TwoPartGridRight
          title="Social Media Marketing"
          Discription="Use social media tools to connect with and engage the people you want to reach. We create and share content, run social media ads and participate in social media conversations."
          ImageHandle={SocialmediaMarketing}
        />
        <TwoPartGridLeft
          title="Email Marketing"
          Discription="Our team build and enable an email list of your potential and existing customers. We send them regular emails with valuable content, special offers and updates about your business."
          ImageHandle={EmailMarketing}
        />
        <TwoPartGridRight
          title="Paid Advertising"
          Discription="We use online advertising platforms to place ads on websites, social media platforms and other digital channels. It can be a cost-effective way to reach a large audience and promote products or services."
          ImageHandle={paidadvertising}
        />
        <TwoPartGridLeft
          title="Analytics and Reporting"
          Discription="The results of your digital marketing efforts are closely observed by our marketing staff. This proactive approach allows us to assess their effectiveness and make the necessary adjustments so that your plans always produce optimal results."
          ImageHandle={analyst}
        />
      </div>
    </>
  );
};

export default DigitalMarketing;
