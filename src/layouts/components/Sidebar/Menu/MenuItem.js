import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./Menu.module.scss";
import { NavLink } from "react-router-dom";
import { RedDotNotification } from "~/assets/icons";

const cx = classNames.bind(styles);

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  activeIcon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  redDot: PropTypes.bool,
};

function MenuItem({ to, icon, activeIcon, title, redDot = false }) {
  return (
    <NavLink
      className={(nav) => cx("menu-item", { active: nav.isActive })}
      to={to}
    >
      <span className={cx("icon")}>{icon}</span>
      <span className={cx("activeIcon")}>{activeIcon}</span>
      <span className={cx("title")}>{title}</span>
      {redDot && (
        <span className={cx("redDotContainer")}>
          <RedDotNotification className={cx("redDot")} />
        </span>
      )}
    </NavLink>
  );
}

export default MenuItem;
