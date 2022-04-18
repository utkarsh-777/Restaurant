import React from "react";
import Footer from "../../components/Footer/Footer";
import p1 from "../../images/p1.png";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.png";
import p4 from "../../images/p4.png";

const LandingPage = () => {
  return (
    <div className="main">
      <div className="landingPage">
        <div className="landingPage__header">Lemon</div>
        <div className="landingPage__main">
          <div style={{ display: "flex" }}>
            <div className="landingPage__main--heading1">
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
                href="#any"
                style={{ fontWeight: "bold" }}
                className="btn btn--white btn--animated u-margin-top-medium"
              >
                explore&nbsp;&nbsp;&nbsp;&rarr;
              </a>
            </div>
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
          <br/>
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
                Best in Food <br/>Safety
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
};

export default LandingPage;
