import React, { FormEvent, FormEventHandler } from "react";
import { ImageBanner } from "components/imageBanner/imageBanner";
import "./contact.scss";
import * as CONTACT_INFO from "content/pages/contact.json";
import * as CONTACT_DETAILS from "content/site/contactDetails.json";
import { marked } from "marked";
import {
  faPhone,
  faEnvelope,
  faMapMarker,
} from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialMedia } from "components/socialMedia/socialMedia";

type ContactState = {};

export class Contact extends React.Component<{}, ContactState> {
  componentDidMount() {}

  render() {
    const data = CONTACT_INFO;
    const contactDetails = CONTACT_DETAILS;

    const markdownParsed = marked.parse(data.body) as string;

    return (
      <div className="Contact_root">
        <ImageBanner src={data.thumbnail} title={data.title} />
        <div className="Contact_content">
          <div
            className="Contact_contentText"
            dangerouslySetInnerHTML={{ __html: markdownParsed }}
          />
          <div className="Contact_details">
            <div className="Contact_contentInner">
              <div className="Contact_contactInfo">
                <h4>Contact Details</h4>
                <div className="Contact_infoRow">
                  <FontAwesomeIcon
                    className="Contact_contactDetailsIcon"
                    icon={faPhone as IconProp}
                  />
                  <h6>{contactDetails.phoneNumber}</h6>
                </div>
                <div className="Contact_infoRow">
                  <FontAwesomeIcon
                    className="Contact_contactDetailsIcon"
                    icon={faEnvelope as IconProp}
                  />
                  <h6>{contactDetails.email}</h6>
                </div>
                <div className="Contact_infoRow">
                  <FontAwesomeIcon
                    className="Contact_contactDetailsIcon"
                    icon={faMapMarker as IconProp}
                  />
                  <h6>{contactDetails.address}</h6>
                </div>
                <br />
                <SocialMedia />
              </div>
              <div className="Contact_location">
                <iframe
                  title="Map for Clifton Technologies"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Grove%20Electrical%2015%20Kemp%20House,%20Brunel%20Rd,%20Corby+(Grove%20Electrical%20Engineering%20Ltd)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.maps.ie/distance-area-calculator.html">
                    measure acres/hectares on map
                  </a>
                </iframe>
              </div>
            </div>
          </div>

          {/* <div className="Contact_formContainer">
            <div className="Contact_formWrapper">
              <form
                id="contactForm"
                className="Contact_contactForm"
                onSubmit={this.onContactSubmit}
              >
                <p className="name-field">
                  <label>
                    Name <span>*</span>
                  </label>
                  <input type="text" name="name" id="name" required />
                </p>
                <p className="company-field">
                  <label>Company</label>
                  <input type="text" name="company" id="company" />
                </p>
                <p className="email-field">
                  <label>
                    Email <span>*</span>
                  </label>
                  <input type="email" name="email" id="email" required />
                </p>
                <p className="phone-field">
                  <label>Phone</label>
                  <input type="text" name="phone" id="phone" />
                </p>
                <p className="message-field full">
                  <label>Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    id="message"
                    required
                  ></textarea>
                </p>
                <p className="Contact_requiredField">
                  Required field <span>*</span>
                </p>
                <p className="Contact_submitButton">
                  <ButtonTile type="submit">Submit</ButtonTile>
                </p>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    );
  }

  private onContactSubmit: FormEventHandler<HTMLFormElement> = (
    e: FormEvent
  ) => {
    e.preventDefault();
    //Get value
    const name = this.getInputVal("name");
    const company = this.getInputVal("company");
    const email = this.getInputVal("email");
    const phone = this.getInputVal("phone");
    const message = this.getInputVal("message");
    // Save message
    this.saveMessage(name, company, email, phone, message);

    const formElement: any = document?.getElementById?.("contactForm");
    if (formElement != null) {
      const form: HTMLFormElement = formElement;
      form.reset?.();
    }
  };

  private getInputVal(id: string) {
    return (document?.getElementById?.(id) as HTMLFormElement).value ?? "";
  }

  private saveMessage(
    name: string,
    company: string,
    email: string,
    phone: number,
    message: string
  ) {}
}
