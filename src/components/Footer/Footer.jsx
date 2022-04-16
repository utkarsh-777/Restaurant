import React from "react";

const Footer = () => {
  return (
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
            <div className="row">
              <div className="col-2-of-4">+14 8080-2222</div>
              <div className="col-2-of-4">food@resonance.com</div>
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
  );
};

export default Footer;
