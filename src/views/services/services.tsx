import React from "react";
import { ImageBanner } from "components/imageBanner/imageBanner";
import "./services.scss";
import * as SERVICES_INFO from "content/pages/services.json";
import { marked } from "marked";
import RotatingCircles from "components/circleAnimation/circleAnimation";

export class Services extends React.Component<{}, {}> {
  componentDidMount() {
    //   const markdown = require("../../../content/site" + name);
  }

  render() {
    const data = SERVICES_INFO;
    const markdownParsed = marked.parse(data.body) as string;

    return (
      <div className="Services_root">
        <ImageBanner src={data.thumbnail} title={data.title} />
        <div className="absolute left-96 top-82 opacity-10 scale-150">
          <RotatingCircles
            rings={[
              {
                color: "var(--accent)",
                speed: 8,
                direction: 1,
                dasharray: "6 4",
                opacity: 0.8,
              },
              {
                color: "var(--secondAccent)",
                speed: 15,
                direction: -1,
                dasharray: "12 6",
                opacity: 0.6,
              },
            ]}
          />
        </div>
        <div className="absolute right-16 top-96 opacity-30 scale-100">
          <RotatingCircles
            rings={[
              {
                color: "var(--accent)",
                speed: 8,
                direction: 1,
                dasharray: "6 4",
                opacity: 0.8,
              },
              {
                color: "var(--secondAccent)",
                speed: 15,
                direction: -1,
                dasharray: "12 6",
                opacity: 0.6,
              },
              {
                color: "var(--accent)",
                speed: 8,
                direction: 1,
                dasharray: "6 4",
                opacity: 0.8,
              },
            ]}
          />
        </div>

        <div
          className="Services_content"
          dangerouslySetInnerHTML={{ __html: markdownParsed }}
        ></div>
      </div>
    );
  }
}
