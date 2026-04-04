import classNames from "classnames";
import React from "react";
import { componentProps } from "../baseComponent";
import "./imageBanner.scss";
import { PhasingGrid } from "components/PhasingGrid/phasingGrid";

type Props = componentProps & {
  src?: string;
  title?: string;
  description?: string;
};

type State = {};

export class ImageBanner extends React.Component<Props, State> {
  state = {};

  render() {
    const { rootclassname, modifiers, title, description } = this.props;

    // let source = createValidImageURL(src);

    return (
      <div className={classNames("ImageBanner_root", rootclassname, modifiers)}>
        <div className="w-full h-full absolute opacity-60">
          <PhasingGrid />
        </div>
        <div className={classNames("ImageBanner_image", modifiers)} />
        <div className={classNames("ImageBanner_text", modifiers)}>
          <h1 className=" font-normal">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
