import React from "react";
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

          <div className="w-full py-16 px-4 mt-20 mb-20">
            <div className="mx-auto max-w-4xl rounded-3xl border border-blackColor bg-white/5 p-8 shadow-2xl shadow-accent backdrop-blur-md">
              <div className="mb-10">
                <h2 className="text-4xl font-bold tracking-tight text-white">
                  Get in touch
                </h2>
                <p className="mt-3 text-base text-neutral-400">
                  Get in touch with Clifton Engineering to find the right
                  solution for your next project.
                </p>
              </div>

              <form
                className="flex flex-col gap-6"
                name="contact-form"
                action="/"
                method="POST"
                data-netlify="true"
                onSubmit={() => {
                  window.alert("Message submitted, thank you! :)");
                }}
              >
                <input type="hidden" name="form-name" value="contact-form" />

                {/* Honeypot */}
                <div className="hidden">
                  <label>
                    Fill this out if you're human:
                    <input title="text" type="text" name="bot-field" />
                  </label>
                </div>

                {/* Row 1 */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-neutral-300">
                      Name <span className="text-red-400">*</span>
                    </label>

                    <input
                      title="name"
                      type="text"
                      name="name"
                      required
                      className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition-all placeholder:text-neutral-500 focus:border-white/30 focus:ring-2 focus:ring-white/20"
                      placeholder="John Smith"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-neutral-300">
                      Email <span className="text-red-400">*</span>
                    </label>

                    <input
                      title="email"
                      type="email"
                      name="email"
                      required
                      className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition-all placeholder:text-neutral-500 focus:border-white/30 focus:ring-2 focus:ring-white/20"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-neutral-300">
                      Company <span className="text-red-400">*</span>
                    </label>

                    <input
                      title="company"
                      type="text"
                      name="company"
                      required
                      className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition-all placeholder:text-neutral-500 focus:border-white/30 focus:ring-2 focus:ring-white/20"
                      placeholder="Your company"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-neutral-300">
                      Country <span className="text-red-400">*</span>
                    </label>

                    <input
                      title="country"
                      type="text"
                      name="country"
                      required
                      className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition-all placeholder:text-neutral-500 focus:border-white/30 focus:ring-2 focus:ring-white/20"
                      placeholder="United Kingdom"
                    />
                  </div>
                </div>

                {/* Website */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-neutral-300">
                    Current website{" "}
                    <span className="text-neutral-500">(optional)</span>
                  </label>

                  <input
                    title="website"
                    type="url"
                    name="website"
                    className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition-all placeholder:text-neutral-500 focus:border-white/30 focus:ring-2 focus:ring-white/20"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-neutral-300">
                    Message <span className="text-red-400">*</span>
                  </label>

                  <textarea
                    className="min-h-[180px] rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition-all placeholder:text-neutral-500 focus:border-white/30 focus:ring-2 focus:ring-white/20"
                    title="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit */}
                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 text-sm font-semibold text-black transition-all duration-200 hover:scale-[1.02] hover:bg-neutral-200 active:scale-[0.98]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
