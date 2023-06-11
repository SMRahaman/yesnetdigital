import React from "react";
import "./UpcommingEvent.css";
const UpcommingEvent = () => {
  return (
    <div>
      <div className="upcoming_section">
        <h1 className="headding" style={{ color: "white" }}>
          UPCOMING EVENTS
        </h1>
        <div className="event_section">
          <div className="event_title">
            <p>
              YESNETDIGITAL E-LEARNING PLATFORM GIVES YOU A CORPORATE
              ENVIRONMENT AND HELPFULL DIGITAL MARKETING COMMUNITY
            </p>
          </div>
          <div className="event">
            <ul>
              <li className="events">
                <div className="date_month">
                  <p
                    style={{
                      fontSize: "64px",
                      fontWeight: "bold",
                      color: "white",
                      lineHeight: "30px",
                    }}
                  >
                    25
                  </p>
                  <p
                    style={{
                      fontSize: "35px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    FEB
                  </p>
                </div>
                <div className="event_info">
                  <p style={{ fontSize: "28px", color: "white" }}>
                    WE HELD FREE TRAINING FOR DIGITAL MARKETING
                  </p>
                </div>
              </li>
              <div className="horaizental">
                <hr />
              </div>
              <li className="events">
                <div className="date_month">
                  <p
                    style={{
                      fontSize: "64px",
                      fontWeight: "bold",
                      color: "white",
                      lineHeight: "30px",
                    }}
                  >
                    02
                  </p>
                  <p
                    style={{
                      fontSize: "35px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    MAR
                  </p>
                </div>
                <div className="event_info">
                  <p style={{ fontSize: "28px", color: "white" }}>
                    WE HELD FREE TRAINING FOR BASIC SHARE MARKET KNOWLEDGE
                  </p>
                </div>
              </li>
              <div className="horaizental">
                <hr />
              </div>

              <li className="events">
                <div className="date_month">
                  <p
                    style={{
                      fontSize: "64px",
                      fontWeight: "bold",
                      color: "white",
                      lineHeight: "30px",
                    }}
                  >
                    20
                  </p>
                  <p
                    style={{
                      fontSize: "35px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    MAR
                  </p>
                </div>
                <div className="event_info">
                  <p style={{ fontSize: "28px", color: "white" }}>
                    WE HELD FREE TRAINING FOR BASIC CRYPTOCURRENCY KNOWLEDGE
                  </p>
                </div>
              </li>
              <div className="horaizental">
                <hr />
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ margin: "100px 100px" }}>
        <p style={{ fontSize: "28px" }}>
          Yesnetdigital E- Learning Platform is Manage by Yesnetdigital Ecomm
          private limited <br /> CIN-U72900WB2018PTC229391 <br /> GSTIN-
          19AABCY0701G1ZM <br />
          startup India -DIPP91749 <br /> ISO 9001:2015 No -IQMCB0421A <br /> TM
          Application Nummer-5768022 <br />
        </p>
      </div>
    </div>
  );
};

export default UpcommingEvent;
