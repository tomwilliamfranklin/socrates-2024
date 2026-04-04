import { useEffect, useState } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import fontawesome from "@fortawesome/fontawesome";
import {
  faLongArrowAltRight,
  faPhone,
  faEnvelope,
  faMapMarker,
} from "@fortawesome/fontawesome-free-solid";
import * as CONTACT_DETAILS from "content/site/contactDetails.json";

import { SocialMedia } from "components/socialMedia/socialMedia";
import { Tab } from "components/Tab/tab";
import ButtonTile from "components/buttonTile/buttonTile";
import menuIcon from "../../images/close.svg";
import closeIcon from "../../images/close.svg";

fontawesome.library.add(faLongArrowAltRight, faPhone, faEnvelope, faMapMarker);

export default function Header() {
  const [scrolled, setScrolled] = useState(true);
  const [isHomePage, setIsHomePage] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();

  // reset homepage boolean and setScrolled to false
  useEffect(() => {
    const homePage = location.pathname === "/" || location.pathname === "/Home";
    const app = document.querySelector(".App");
    setIsHomePage(homePage);
    setScrolled(!homePage);

    // scroll to top of page on navigation change.
    app?.scrollTo(0, 0);
  }, [location]);

  // on scroll event
  useEffect(() => {
    const app = document.querySelector(".App");
    const homePage = location.pathname === "/" || location.pathname === "/Home";
    const onScroll = (e: any) => {
      setScrollTop(e.target?.scrollTop);
    };

    setScrolled((homePage && (scrollTop ?? 0) > 200) || !homePage);

    app?.addEventListener("scroll", onScroll);
    return () => app?.removeEventListener("scroll", onScroll);
  }, [scrollTop, location.pathname]);

  const showMobileMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const contactDetails = CONTACT_DETAILS;

  return (
    <>
      <div className="Header_topInfo p-2 bg-whiteColorDark text-blackColor pb-12 pt-5">
        <div className="flex justify-center items-center space-x-6">
          <FontAwesomeIcon
            className="Header_contactDetailsIcon"
            icon={faPhone as IconProp}
          />
          <h6>{contactDetails.phoneNumber}</h6>
          <FontAwesomeIcon
            className="Header_contactDetailsIcon"
            icon={faEnvelope as IconProp}
          />
          <h6>{contactDetails.email}</h6>
          <FontAwesomeIcon
            className="Header_contactDetailsIcon"
            icon={faMapMarker as IconProp}
          />
          <h6>{contactDetails.address}</h6>
          <SocialMedia
            rootclassname="Header_contentDetailsSocialMedia"
            modifiers="smallIcon"
          />
        </div>
      </div>
      <div className={classNames("Header_container", { scrolled })}>
        <section
          className={classNames("Header_root", {
            scrolled,
            homepage: isHomePage,
          })}
        >
          <div
            className={classNames(
              "Header_content",
              { scrolled, showMenu },
              "bg-whiteColor text-blackColor items-center p-12"
            )}
          >
            <div className={classNames("Header_contentInner", { scrolled })}>
              <div
                className={classNames("flex items-center", {
                  scrolled,
                })}
              >
                <Link className="alt items-center" to="/">
                  {/* <img
                    className="Header_logo"
                    src={createValidImageURL(config.logo)}
                    alt="Clifton Technologies"
                  /> */}
                  <h3>Clifton Technology</h3>
                  <h5 className="text-secondAccent">
                    Design <span className="text-blackColor">•</span>{" "}
                    Development
                    <span className="text-blackColor">•</span> Testing
                  </h5>
                </Link>
              </div>
              <div className={classNames("Header_menu", { scrolled })}>
                <Tab
                  modifiers={classNames({ scrolled })}
                  label="Home"
                  to="/Home"
                />
                {/*                 <Tab
                  modifiers={classNames({ scrolled })}
                  label="About Us"
                  to="/About"
                /> */}
                <Tab
                  modifiers={classNames({ scrolled })}
                  label="Services"
                  to="/Services"
                />
                {/*                 <Tab
                  modifiers={classNames({ scrolled })}
                  label="Case Studies"
                  to="/CaseStudies"
                /> */}
                <Tab
                  modifiers={classNames({ scrolled }, "special")}
                  label="Contact Us"
                  to="/Contact"
                  children={
                    <FontAwesomeIcon
                      className="Header_arrowIcon"
                      icon={faLongArrowAltRight as IconProp}
                    />
                  }
                />
              </div>
            </div>
            <div
              className={classNames("Header_mobile", { scrolled, showMenu })}
            >
              <div className="Header_headerMobile aboveNotch alt">
                {/* <img
                  className="Header_logo"
                  src={createValidImageURL(config.logo)}
                  alt="Clifton Technologies"
                /> */}
                <h3>Clifton Technology</h3>
                <h5 className="text-secondAccent">
                  Design <span className="text-blackColor">•</span> Development
                  <span className="text-blackColor">•</span> Testing
                </h5>
              </div>
              <ButtonTile
                modifiers={classNames("alt", { scrolled, showMenu })}
                icon={showMenu ? closeIcon : menuIcon}
                onSelect={showMobileMenu}
              />
            </div>
          </div>
        </section>

        {showMenu && (
          <div className={classNames("Header_mobileView", { scrolled })}>
            <div className={classNames("Header_mobileViewInner", { scrolled })}>
              <div className={classNames("Header_mobileMenu", { scrolled })}>
                <Tab
                  modifiers={classNames("alt", { scrolled, showMenu })}
                  label="Home"
                  to="/Home"
                  navclass={classNames({ scrolled, showMenu })}
                  onSelect={closeMenu}
                />
                {/*                 <Tab
                  modifiers={classNames("alt", { scrolled, showMenu })}
                  label="Company"
                  to="/About"
                  navclass={classNames({ scrolled, showMenu })}
                  onSelect={closeMenu}
                /> */}
                <Tab
                  modifiers={classNames("alt", { scrolled, showMenu })}
                  label="Services"
                  to="/Services"
                  navclass={classNames({ scrolled, showMenu })}
                  onSelect={closeMenu}
                />
                {/*                 <Tab
                  modifiers={classNames("alt", { scrolled, showMenu })}
                  label="Case Studies"
                  to="/CaseStudies"
                  navclass={classNames({ scrolled, showMenu })}
                  onSelect={closeMenu}
                /> */}
                <Tab
                  modifiers={classNames("alt", { scrolled, showMenu })}
                  label="Contact Us"
                  to="/Contact"
                  navclass={classNames({ scrolled, showMenu })}
                  onSelect={closeMenu}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
