import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { DropWrapper } from "~/components/DropWrapper";
import menuItems from "./menuData";
import Button from "~/components/Button";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles);

function Menu({ children }) {
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
              className={cx("menu-item")}
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
  return (
    <Tippy
      onHide={resetHistory}
      interactive
      duration={[0, 500]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu")} tabIndex="-1" {...attrs}>
          <DropWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItem()}
          </DropWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
