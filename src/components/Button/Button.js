import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outlineBlack: PropTypes.bool,
  outlineRed: PropTypes.bool,
  roundBlack: PropTypes.bool,
  disabled: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
};

function Button({
  children,
  onClick,
  to,
  href,
  primary = false,
  outlineBlack = false,
  outlineRed = false,
  roundBlack = false,
  disabled = false,
  leftIcon = false,
  rightIcon = false,
  ...passprop
}) {
  let classBtn = cx("wrapper", {
    primary,
    outlineBlack,
    outlineRed,
    roundBlack,
    disabled,
  });
  let props = { to, href, onClick, ...passprop };
  let Comp = "button";

  if (to) {
    Comp = Link;
  } else if (href) {
    Comp = "a";
  }

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props.key === "function") {
        delete props[key];
      }
    });
  }

  return (
    <Comp className={classBtn} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
