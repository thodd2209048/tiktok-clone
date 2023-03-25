import styles from "./SearchItem.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function SearchItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/afd8e4fc43d07f8093cfc5db261da27e~c5_300x300.webp?x-expires=1679896800&x-signature=cimEbIPXZ8D12D%2FnST8jrZ%2FAZEI%3D"
        alt=""
      />
      <div className={cx("content")}>
        <h4 className={cx("username")}>
          <span>linhbarbie</span>
          <FontAwesomeIcon className={cx("icon")} icon={faCheckCircle} />
        </h4>
        <span className={cx("name")}>Linh Barbie</span>
      </div>
    </div>
  );
}

export default SearchItem;
