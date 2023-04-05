import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

Menu.propTypes = {};

function Menu({ children }) {
  return <div className={cx("menu")}>{children}</div>;
}

export default Menu;
