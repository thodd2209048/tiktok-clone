import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import logo from "~/assets/images/logo.svg";
import SearchItem from "./SearchItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPlus,
  faSpinner,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function Header() {
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
              <div className={cx("search-title")}>Accounts</div>
              <SearchItem />
              <SearchItem />
              <SearchItem />
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
          <Button primary disabled>
            Log in
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
