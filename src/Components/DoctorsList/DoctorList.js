import React from "react";
import docMan1 from "../../assest/doctorslist/doc-01.png";
import docMan2 from "../../assest/doctorslist/doc-02.png";
import docMan3 from "../../assest/doctorslist/doc-03.png";
import "./DoctorList.css";
const DoctorList = () => {
  const doctors = [
    {
      id: 1,
      image: docMan1,
      name: "Dr. UJJANINI DEB",
      title: "BDS (HONS), RAIPUR",
    },
    {
      id: 2,
      image: docMan2,
      name: "Dr. KRISHANU MAZUMDAR",
      title: "MBBS",
    },
    {
      id: 3,
      image: docMan3,
      name: "Dr. AYAN KUMAR NANDI",
      title: "BHMS",
    },
  ];
  return (
    <div className="doctolist_section">
      <h1 className="headding">OUR DOCTORS</h1>
      <div className="doctor_list">
        {doctors.map((doctor) => (
          <div className="doctor_box" key={doctor.id}>
            <img src={doctor.image} alt="" />

            <p
              style={{
                fontSize: "20px",
                margin: "10px 0px",
              }}
            >
              {doctor.name}
              <br /> {doctor.title}
            </p>

            <button className="booking_button">Book Appoinment</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
