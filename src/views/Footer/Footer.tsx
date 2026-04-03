import React from "react";
import "./Footer.scss";
import * as CONTACT_DETAILS from "content/site/contactDetails.json";
import * as SITE_SETTINGS from "content/site/config.json";
import { createValidImageURL } from "data/Utils";
import { SocialMedia } from "components/socialMedia/socialMedia";
import { Tab } from "components/Tab/tab";

type State = {
  hover: boolean;
};

class Footer extends React.Component<{}, State> {
  state = {
    hover: false,
  };

  render() {
    const contactDetails = CONTACT_DETAILS;
    const config = SITE_SETTINGS;
    return (
      <section className="Footer_root">
        <a href="http://fplreflib.findlay.co.uk/images/pdf/beeas/beeas-2014-winners.pdf">
          <img
            className="Footer_blogo"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxkeVpkfkioXByoCGnQugh7TrAh4UbfjH91w&s"
            }
            alt="grove group logo"
          />
        </a>
        <div className="Footer_menu">
          <Tab modifiers={"alt"} label="Home" to="/Home" />
          {/*           <Tab modifiers={"alt"} label="About Us" to="/About" /> */}
          <Tab modifiers={"alt"} label="Services" to="/Services" />
          {/*           <Tab modifiers={"alt"} label="Case Studies" to="/CaseStudies" /> */}
          <Tab modifiers={"alt"} label="Contact Us" to="/Contact" />
        </div>
        <div className="Footer_content">
          <div className="Footer_socials">
            <h5 className="font-semibold pb-2">Our Socials</h5>
            <SocialMedia />
          </div>
          <div className="Footer_address font-normal">
            <h6>{contactDetails.address}</h6>
            <h6>
              {contactDetails.phoneNumber} | {contactDetails.email}
            </h6>
          </div>
        </div>
      </section>
    );
  }

  private onFooterClick = () => {
    window.open("https://www.dota2.com/home");
  };
  private onHover = () => {
    this.setState({ hover: true });
  };
  private onLeaveHover = () => {
    this.setState({ hover: false });
  };
}

export default Footer;
