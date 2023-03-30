import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faMagnifyingGlass,
  faPlus,
  faSpinner,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";
import logo from "~/assets/images/logo.svg";
import SearchItem from "./SearchItem";
import Button from "~/components/Button";
import { DropWrapper } from "~/components/DropWrapper";
import Menu from "./Menu";
import { InboxIcon, MessageIcon } from "~/assets/icons";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

function Header() {
  let isLogIn = true;
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={logo} alt="Tik Tok" />
        </div>
        <Tippy
          interactive={true}
          visible={false}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <DropWrapper>
                <div className={cx("search-title")}>Accounts</div>
                <SearchItem />
                <SearchItem />
                <SearchItem />
              </DropWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search accounts and videos" />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faXmarkCircle} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

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
              <button className={cx("icon")}>
                <MessageIcon />
              </button>
              <button className={cx("icon")}>
                <InboxIcon />
              </button>
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
