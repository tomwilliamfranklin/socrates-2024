import classNames from "classnames";
import React from "react";
import { componentProps } from "../baseComponent";
import ButtonBehaviour from "../buttonBehaviour/buttonBehaviour";
import "./buttonTile.scss";

type Props = componentProps & {
  label?: string;
  icon?: string;
  onSelect?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
};

type State = {};

class ButtonTile extends React.Component<Props, State> {
  state = {};

  render() {
    const { icon, label, modifiers, children, rootclassname, type, onSelect } =
      this.props;
    return (
      <ButtonBehaviour
        rootclassname={classNames("ButtonTile_root", rootclassname)}
        modifiers={modifiers}
        label={label}
        children={children}
        icon={icon}
        onSelect={onSelect}
        type={type}
      />
    );
  }
}

export default ButtonTile;
