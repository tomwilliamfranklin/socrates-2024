import classNames from "classnames";
import React from "react";
import { componentProps } from "../baseComponent";
import { LinkButtonBehaviour } from "../buttonBehaviour/buttonBehaviour";
import "./tab.scss";

type Props = componentProps & {
  label?: string;
  onSelect?: () => void;
  to?: string;
  navclass?: string;
};

type State = {};

export class Tab extends React.Component<Props, State> {
  state = {};

  render() {
    const { label, navclass, modifiers, children, to, onSelect } = this.props;

    return (
      <LinkButtonBehaviour
        rootclassname={classNames("Tab_root", modifiers)}
        textclass={classNames("Tab_text", modifiers)}
        modifiers={modifiers}
        label={label}
        children={children}
        to={to}
        navclass={classNames("Tab_nav", navclass)}
        onSelect={onSelect}
      />
    );
  }
}
