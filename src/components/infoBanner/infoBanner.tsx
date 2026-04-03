import classNames from "classnames";
import React from "react";
import { componentProps } from "../baseComponent";
import "./infoBanner.scss";

type Props = componentProps & {
  title?: string;
  description?: string;
  src: string;
};

type State = {};

export class InfoBanner extends React.Component<Props, State> {
  state = {};

  render() {
    const { rootclassname, modifiers, title, description, src, children } =
      this.props;
    return (
      <div className={classNames("InfoBanner_root", rootclassname, modifiers)}>
        <div className={classNames("InfoBanner_content", modifiers)}>
          <div className={classNames("InfoBanner_text", modifiers)}>
            <h6>{title}</h6>
            <p dangerouslySetInnerHTML={{ __html: description ?? "" }}></p>
            <div className={classNames("InfoBanner_buttons", modifiers)}>
              {children}
            </div>
          </div>
          <img
            className={classNames("InfoBanner_image", modifiers)}
            src={src}
            alt=""
          />
        </div>
      </div>
    );
  }
}
