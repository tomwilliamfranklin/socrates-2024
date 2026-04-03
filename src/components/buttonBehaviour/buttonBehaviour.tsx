import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import { componentProps } from "../baseComponent";
import "./buttonBehaviour.scss";

type Props = componentProps & {
  style?: React.CSSProperties;
  label?: string;
  textclass?: string;
  icon?: string;
  onSelect?: () => void;
  to?: string;
  navclass?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

type State = {};

class ButtonBehaviour extends React.Component<Props, State> {
  state = {};

  render() {
    const { label, icon, rootclassname, modifiers, children, style } =
      this.props;
    return (
      <button
        style={style}
        onClick={this.props.onSelect}
        className={classNames("ButtonBehaviour_root", rootclassname, modifiers)}
        {...this.props}
      >
        {label}
        {children}
        {icon && (
          <img
            className={classNames("ButtonBehaviour_icon", modifiers)}
            src={icon}
            alt={label}
          />
        )}
      </button>
    );
  }
}

export default ButtonBehaviour;

export class LinkButtonBehaviour extends React.Component<Props, State> {
  state = {};

  render() {
    const {
      label,
      navclass,
      rootclassname,
      children,
      to,
      modifiers,
      textclass,
      onSelect,
    } = this.props;
    return (
      <NavLink
        className={({ isActive }) =>
          classNames(navclass, isActive ? "isActive" : "")
        }
        to={to ?? ""}
        onClick={onSelect}
      >
        <button
          className={classNames(
            "ButtonBehaviour_root",
            rootclassname,
            modifiers
          )}
          {...this.props}
        >
          <span
            className={classNames("ButtonBehaviour_text", modifiers, textclass)}
          >
            {label}
          </span>
          {children}
        </button>
      </NavLink>
    );
  }
}
