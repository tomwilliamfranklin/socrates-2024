import React from "react";
import "./homepage.scss";
import parseMD from "parse-md";
import * as HOME_INFO from "content/site/home.json";
import * as SITE_SETTINGS from "content/site/config.json";
import classNames from "classnames";
import { CaseStudy, CoreValue } from "data/DataTypes";
import YoutubeIFrame from "components/youtubeIframe/youtubeIframe";
import { PillarInfo } from "components/pillarInfo/pillarInfo";
import { Banner } from "components/banner/banner";
import { Tab } from "components/Tab/tab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLongArrowAltRight } from "@fortawesome/fontawesome-free-solid";

type State = {
  coreValues: CoreValue[];
  caseStudies: CaseStudy[];
  instagramTitle: string;
};

export class Homepage extends React.Component<{}, State> {
  async componentDidMount() {
    // TODO Put all of this data getting into a data.ts file so its all self contained.
    const caseStudyMarkdownFiles = require.context(
      "content/caseStudies",
      false,
      /\.\/.*md/i
    );

    const coreValuesFiles = require.context(
      "content/coreValues",
      false,
      /\.\/.*md/i
    );

    const caseStudiesPromises: Promise<boolean>[] = [];
    const caseStudies: CaseStudy[] = [];

    caseStudyMarkdownFiles.keys().forEach((markdownFile) => {
      const name = markdownFile.split(".", 2)[1] + ".md";
      const markdown = require("content/caseStudies" + name);

      // push each "fetch" of an article to a array of promises. We then listen for when all these promises are finished later, to set them to state.
      caseStudiesPromises.push(
        fetch(markdown)
          .then((response) => {
            // fetch markdown delivers the text of the markdown
            return response.text();
          })
          .then((text) => {
            // using parse-md library to split the text from the "metadata" at top of markdown.
            const { metadata, content } = parseMD(text);

            // push each metadata / content as a single BlogPost object to an array of BlogPosts.
            caseStudies.push({
              ...(metadata as CaseStudy),
              content,
              id: markdownFile,
            });
            return true;
          })
          .catch((e) => {
            // this should never happen... but you know
            //  console.log(e);
            return false;
          })
      );
    });

    const coreValuesPromises: Promise<boolean>[] = [];
    const coreValues: CoreValue[] = [];

    coreValuesFiles.keys().forEach((markdownFile) => {
      const name = markdownFile.split(".", 2)[1] + ".md";
      const markdown = require("content/coreValues" + name);

      coreValuesPromises.push(
        fetch(markdown)
          .then((response) => {
            // fetch markdown delivers the text of the markdown
            return response.text();
          })
          .then((text) => {
            // using parse-md library to split the text from the "metadata" at top of markdown.
            const { metadata } = parseMD(text);

            // push each metadata / content as a single BlogPost object to an array of BlogPosts.
            coreValues.push({
              ...(metadata as CoreValue),
            });
            return true;
          })
          .catch((e) => {
            // this should never happen... but you know
            //  console.log(e);
            return false;
          })
      );
    });

    Promise.all(caseStudiesPromises).then(() => {
      caseStudies.sort((a, b) => {
        return b.date.getTime() - a.date.getTime();
      });

      const f = caseStudies.splice(0, 3);

      this.setState({ caseStudies: f });
    });

    Promise.all(coreValuesPromises).then(() => {
      coreValues.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });

      this.setState({ coreValues });
    });
  }

  render() {
    const homeData = HOME_INFO;
    const config = SITE_SETTINGS;

    if (!this.state || !this.state.caseStudies || !this.state.coreValues)
      return;
    return (
      <div className="Homepage_root">
        <div
          className={classNames(
            "relative text-blackColor bg-whiteColor w-full text-center pb-10 pt-20 top-24"
          )}
        >
          <h1 className="font-medium break-keep">
            World-class Robotics. Proven Results.
          </h1>
        </div>
        <YoutubeIFrame src={homeData.video}></YoutubeIFrame>
        <div className="Homepage_content">
          <PillarInfo
            pillars={this.state.coreValues.map((cv) => {
              return (
                <>
                  {/* <img src={createValidImageURL(cv.cover)} alt={cv.title} /> */}
                  <div
                    className={`text-blackColor text-left rounded-md p-20 flex-1 ${cv.pillarType}`}
                  >
                    <h4 className="text-blackColor font-light">{cv.title}</h4>
                    <h3 className="text-secondAccent font-semibold">
                      {cv.description}
                    </h3>
                  </div>
                </>
              );
            })}
          />
          <Banner modifiers="alt2 alignCenter marginBottom">
            <div>
              <h1 className="font-normal break-keep text-blackColor">
                Creating the standard for innovative technologies
              </h1>
              <br />
              <div className="Banner_table">
                <p>
                  No empty promises. No buzzwords. Just practical engineering
                  which delivers. Our engineers bring over two decades of
                  real-world experience creating and rolling out systems that
                  take on demanding, repetitive tasks with consistency. Every
                  solution is shaped by what’s been proven in practice, with a
                  single focus: empowering people to do more.
                  <br />
                  <br />
                  <Tab
                    modifiers={classNames("special noMargin")}
                    label="Get a quote"
                    to="/Contact"
                    children={
                      <FontAwesomeIcon
                        className="Header_arrowIcon"
                        icon={faLongArrowAltRight as IconProp}
                      />
                    }
                  />
                </p>
                <img
                  className="Banner_image"
                  alt=""
                  src={"./images/image-asset.jpeg"}
                />
              </div>
            </div>
          </Banner>
        </div>
      </div>
    );
  }
}
