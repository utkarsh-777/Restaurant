import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import p1 from "../../images/p1.png";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.png";
import p4 from "../../images/p4.png";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="landingPage">
        <div
          className="landingPage__header"
          style={{ fontFamily: "Lobster,cursive", fontSize: "60px" }}
        >
          <div className="row">
            <div className="col">Lemon</div>
            <div style={{ textAlign: "right" }} className="col">
              <span>
                <button
                  onClick={() => navigate("/admin-login")}
                  className="btn btn-lg"
                  style={{backgroundColor:'white'}}
                >
                  Admin Login
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="landingPage__main">
          <div style={{ display: "flex" }}>
            <div
              className="landingPage__main--heading1"
              style={{ fontSize: "50px" }}
            >
              It’s not just Food.
              <br />
              It’s an
              <br /> Experience!
            </div>
            <div className="landingPage__main--divider">
              <div className="landingPage__main--divider-1"></div>
              <div className="landingPage__main--divider-2"></div>
              <div className="landingPage__main--divider-3"></div>
            </div>
            <div className="landingPage__main--heading2">
              Indulge into our fine dining
              <br /> with chef special dishes,
              <br /> drinks and more.....
              <br />
              <a
                href="/home"
                style={{ fontWeight: "bold", backgroundColor: "white" }}
                className="btn btn--animated u-margin-top-medium"
              >
                explore&nbsp;&nbsp;&nbsp;&rarr;
              </a>
            </div>
          </div>
        </div>

        <div className="landingPage2">
          <div className="landingPage2__main">
            <div className="row">
              <div className="col-3">
                <div className="landingPage2__main--imgdiv">
                  <img className="landingPage2__main--p1" src={p1} alt="p1" />
                </div>
              </div>
              <div className="col-3">
                <div className="landingPage2__main--imgdiv">
                  <img className="landingPage2__main--p2" src={p2} alt="p2" />
                </div>
              </div>
              <div className="col-3">
                <div className="landingPage2__main--imgdiv">
                  <img className="landingPage2__main--p3" src={p3} alt="p3" />
                </div>
              </div>
              <div className="col-3">
                <div className="landingPage2__main--imgdiv">
                  <img className="landingPage2__main--p4" src={p4} alt="p4" />
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-3">
                <div className="landingPage2__main--heading1">
                  Best in class <br /> Dining Experience
                </div>
              </div>
              <div className="col-3">
                <div className="landingPage2__main--heading2">Take away</div>
              </div>
              <div className="col-3">
                <div className="landingPage2__main--heading3">
                  Best Food Quality
                </div>
              </div>
              <div className="col-3">
                <div className="landingPage2__main--heading4">
                  Best in Food <br />
                  Safety
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer__iframe--div">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.07269872213!2d-0.0803804842271448!3d51.58523097964802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c11170df8eb%3A0x8509e6988b03e897!2sCafe%20Lemon!5e0!3m2!1sen!2sin!4v1650126581318!5m2!1sen!2sin"
            className="footer__iframe--iframe"
            allowFullScreen=""
            title="lemon"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="footer__contactus">
          <div className="footer__contactus--header">Contact Us</div>
          <div className="footer__contactus--content">
            <span>Mobile :- +14 8080-2222</span>
            <br />
            <span>Email :- lemon@gmail.com</span>
            <br />
            <span>
              Address :- 118 W Green Rd, South Tottenham, London N15 5AA, United
              Kingdom
            </span>
          </div>
        </div>

        <div className="footer__down">
          <div className="footer__down--center">
            <div className="footer__down--header">Lemon</div>
            <div className="footer__down--content">
              “One stop for all your hunger needs”
              <div className="row" style={{ marginBottom: "8rem" }}>
                <div className="col-6">+14 8080-2222</div>
                <div className="col-6">food@resonance.com</div>
              </div>
              <div>
                <span>
                  #420, St. Avn Road, Place Road, 3rd Street Downtown, London,
                  EC4Y 9BE
                </span>
                <br />
                <span>&#169; copyright, all rights reserved. 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
