import classNames from "classnames/bind";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";
import logo from "~/assets/images/logo.svg";

import Button from "~/components/Button";

import Menu from "./Menu";
import { InboxIcon, MessageIcon } from "~/assets/icons";
import Image from "~/components/Image";
import Search from "./Search";

const cx = classNames.bind(styles);

function Header() {
  let isLogIn = true;
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={logo} alt="Tik Tok" />
        </div>

        <Search />

        <div className={cx("actions")}>
          <Button
            outlineBlack
            to="/upload"
            leftIcon={<FontAwesomeIcon icon={faPlus} />}
          >
            Upload
          </Button>
          {isLogIn ? (
            <>
              <Tippy
                interactive={true}
                placement="bottom"
                arrow={true}
                theme="dark"
                content="Messages"
              >
                <button className={cx("icon")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy
                interactive={true}
                placement="bottom"
                arrow={true}
                theme="dark"
                content="Messages"
              >
                <button className={cx("icon")}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <Button primary>Log in</Button>
          )}
          <Menu isLogIn={isLogIn}>
            {isLogIn ? (
              <Image
                className={cx("avatar")}
                src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80"
                alt=""
                // fallback="https://img.freepik.com/free-vector/glitch-error-404-page-background_23-2148090410.jpg"
              />
            ) : (
              <FontAwesomeIcon
                className={cx("more-btn")}
                icon={faEllipsisVertical}
              />
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
