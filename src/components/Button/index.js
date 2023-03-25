import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  children,
  onClick,
  to,
  href,
  primary = false,
  outlineBlack = false,
  disabled = false,
  leftIcon = false,
  rightIcon = false,
  ...passprop
}) {
  let classBtn = cx("wrapper", { primary, outlineBlack, disabled });
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
