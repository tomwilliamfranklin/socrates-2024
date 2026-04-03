import classNames from "classnames";
import React from "react";
import { componentProps } from "../baseComponent";
import "./banner.scss";

type Props = componentProps & {};

type State = {};

export class Banner extends React.Component<Props, State> {
  state = {};

  render() {
    const { rootclassname, modifiers, children } = this.props;
    return (
      <div className={classNames("Banner_root", rootclassname, modifiers)}>
        <div className={classNames("Banner_content", rootclassname, modifiers)}>
          {children}
        </div>
      </div>
    );
  }
}
