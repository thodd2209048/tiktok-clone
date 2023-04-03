import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useState } from "react";
import PropTypes from "prop-types";

import {
  GetCoinIcon,
  LogOutIcon,
  ProfileIcon,
  SettingIcon,
} from "~/assets/icons";
import Button from "~/components/Button/Button";
import { DropWrapper } from "~/components/DropWrapper";
import Header from "./Header";
import styles from "./Menu.module.scss";
import unLogInItems from "./menuData";

const cx = classNames.bind(styles);

Menu.propTypes = {
  children: PropTypes.node,
  isLogIn: PropTypes.bool,
  hideOnClick: PropTypes.bool,
};

function Menu({ children, isLogIn, hideOnClick = false }) {
  const loginItems = [
    {
      title: "View profile",
      icon: <ProfileIcon />,
    },
    {
      title: "Get Coins",
      icon: <GetCoinIcon />,
    },
    {
      title: "Settings",
      icon: <SettingIcon />,
    },
    ...unLogInItems,
    {
      title: "Log out",
      icon: <LogOutIcon />,
      style: "border-top",
    },
  ];

  let menuItems = isLogIn ? loginItems : unLogInItems;

  const [history, setHistory] = useState([{ data: menuItems }]);
  let current = history[history.length - 1];

  const resetHistory = () => {
    setHistory([{ data: menuItems }]);
  };

  const renderItem = () => {
    return (
      <div className={cx("item-list")}>
        {current.data.map((item, idx) => {
          let isFather = !!item.children;
          return (
            <Button
              className={cx("menu-item", item.style)}
              key={idx}
              leftIcon={item.icon}
              onClick={() => {
                if (isFather) {
                  setHistory((prev) => [...prev, item.children]);
                }
              }}
            >
              {item.title}
            </Button>
          );
        })}
      </div>
    );
  };

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };
  return (
    <Tippy
      offset={[40, 0]}
      delay={[0, 500]}
      onHide={resetHistory}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu")} tabIndex="-1" {...attrs}>
          <DropWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header headerTitle={current.title} onBack={handleBack} />
            )}
            <div className={cx("menu-body")}> {renderItem()}</div>
          </DropWrapper>
        </div>
      )}
      hideOnClick={hideOnClick}
    >
      <div>{children}</div>
    </Tippy>
  );
}

export default Menu;
