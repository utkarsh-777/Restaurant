import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__down">
        <div className="footer__down--center">
          <div className="footer__down--header">Lemon</div>
          <div className="footer__down--content">
            “One stop for all your hunger needs”
            <div className="row" style={{marginBottom:'8rem'}}>
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
  );
};

export default Footer;
