import classNames from "classnames";
import ButtonBehaviour from "components/buttonBehaviour/buttonBehaviour";
import parseMD from "parse-md";
import React from "react";
import { componentProps } from "../baseComponent";
import "./socialMedia.scss";

type SocialMediaData = {
  name: string;
  icon: string;
  url: string;
  primaryColor?: string;
};

type Props = componentProps & {};

type State = {
  socialMedias: SocialMediaData[];
};

export class SocialMedia extends React.Component<Props, State> {
  componentDidMount() {
    const socialMedias = require.context(
      "content/socialMedias",
      false,
      /\.\/.*md/i
    );

    const socialMediaPromises: Promise<boolean>[] = [];
    const socialMedia: SocialMediaData[] = [];

    socialMedias.keys().forEach((markdownFile) => {
      const name = markdownFile.split(".", 2)[1] + ".md";
      const markdown = require("content/socialMedias" + name);

      socialMediaPromises.push(
        fetch(markdown)
          .then((response) => {
            // fetch markdown delivers the text of the markdown
            return response.text();
          })
          .then((text) => {
            // using parse-md library to split the text from the "metadata" at top of markdown.
            const { metadata } = parseMD(text);

            // push each metadata / content as a single BlogPost object to an array of BlogPosts.
            socialMedia.push({
              ...(metadata as SocialMediaData),
            });
            return true;
          })
          .catch((e) => {
            // this should never happen... but you know
            // console.log(e);
            return false;
          })
      );
    });

    Promise.all(socialMediaPromises).then(() => {
      socialMedia.sort();
      this.setState({
        socialMedias: socialMedia,
      });
    });
  }

  render() {
    if (!this.state) return;

    const { socialMedias } = this.state;

    return (
      socialMedias && (
        <div
          className={classNames("SocialMedia_root", this.props.rootclassname)}
        >
          {socialMedias.map((sm) => {
            return (
              <SocialMediaButton {...sm} modifiers={this.props.modifiers} />
            );
          })}
        </div>
      )
    );
  }
}

class SocialMediaButton extends React.Component<
  SocialMediaData & componentProps,
  {}
> {
  render() {
    return (
      <ButtonBehaviour
        modifiers={this.props.modifiers}
        style={{ backgroundColor: this.props.primaryColor || "#242424" }}
        rootclassname={classNames(
          "SocialMedia_button",
          this.props.rootclassname
        )}
        icon={this.props.icon}
        onSelect={() => this.onGoToSocialMedia(this.props.url)}
        type={"button"}
      />
    );
  }

  private onGoToSocialMedia = (link: string) => {
    // HACK to make sure link works.
    if (!link.includes("https://")) link = "https://" + link;
    window.location.replace(link);
  };
}
