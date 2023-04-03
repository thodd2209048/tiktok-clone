import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header({ onBack, headerTitle }) {
  return (
    <div className={cx("header")}>
      <button className={cx("back-btn")} onClick={onBack}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <div className={cx("header-title")}>{headerTitle}</div>
    </div>
  );
}

export default Header;
