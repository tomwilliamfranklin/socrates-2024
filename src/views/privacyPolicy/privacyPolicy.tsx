import React from "react";
import "./privacyPolicy.scss";
import * as PRIVACY_POLICY from "content/pages/privacyPolicy.json";
import { marked } from "marked";

export class PrivacyPolicy extends React.Component<{}, {}> {
  componentDidMount() {
    //   const markdown = require("../../../content/site" + name);
  }

  render() {
    const data = PRIVACY_POLICY;

    const markdownParsed = marked.parse(data.body) as string;
    return (
      <div className="PrivacyPolicy_root">
        <div
          className="PrivacyPolicy_content"
          dangerouslySetInnerHTML={{ __html: markdownParsed }}
        ></div>
      </div>
    );
  }
}
