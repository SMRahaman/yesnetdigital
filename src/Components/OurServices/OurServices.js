import React from "react";
import "./OurServices.css";
import serimage1 from "../../assest/service/astro-service.jpg";
import serimage2 from "../../assest/service/doctor-service-02.jpg";
const OurServices = () => {
  const services = [
    {
      id: 1,
      image: serimage2,
      text: "Online Health Consultation with MBBS or BHMS or BDS Doctor Fees - 100 (INR)",
    },
    {
      id: 2,
      image: serimage1,
      text: "Online Astrology Consultation Fees - 100 (INR)",
    },
  ];
  return (
    <div>
      <h1 className="headding">OUR SERVICES</h1>
      <div className="our_services">
        {services.map((service) => (
          <div className="service_box" key={service.id}>
            <img src={service.image} alt="" />
            <div className="service_info">
              <p>{service.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ margin: "0px 100px 0px 100px" }}>
        <div>
          <h3 style={{ fontSize: "28px", marginBottom: "15px" }}>
            Online Health Consultation
          </h3>
          <p style={{ fontSize: "20px", textAlign: "justify" }}>
            You may avail online consultancy with doctors on Yesnet
            Digital.Normal medicines can be provided by the doctors if it is
            necessity. Doctors will not give any prescribed medication without
            any visual treatment. Only online consultancy will be provided for
            on behalf of the doctors on Yesnet Digital. For this consultation
            the person will come to know about their own disease and could
            discussed with the doctors in this regards. The doctor will counsel
            on the best place to get treatment,the specialist doctor of that
            particular diseases and guide you the further necessary stpes. By
            the counsel of doctors on Yesnet Digital you would able to get best
            treatment for your disease. All guidance will be provided verbally.
            You can be completely cured by taking the right treatment from the
            right place on the advice of the doctors on Yesnet Digital.
          </p>
        </div>
        <div style={{ marginTop: "100px", marginBottom: "100px" }}>
          <h3 style={{ fontSize: "28px", marginBottom: "15px" }}>
            Online Astrology Consultation
          </h3>
          <p style={{ fontSize: "20px", textAlign: "justify" }}>
            Yesnet Digital astro consultancy offers you astrology consultancy in
            online i.e. your fortune is forecasted by reading the lines of your
            palm through online.Yesnet Digital astro consultancy will listen all
            your problems and will come up the most proper solution in natural
            way and just generic advice. You may discussed about your concern
            related to your inner world, personality traits, love life,
            finances, professional life, marriage, marriage partners, parents,
            children, siblings, and friends in online consultancy and ask
            questions related to this issues and avail a guidance for remedial
            for this issues in your life. No rudraksha and maduli etc, are given
            or sold in online astro consultancy on Yesnet Digital. This
            consultation will give you a stress free life in future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
