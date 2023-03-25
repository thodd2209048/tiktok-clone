import styles from "./HeaderOnly.module.scss";
import classNames from "classnames/bind";
import Header from "../components/Header";

const cx = classNames.bind(styles);

function HeaderOnly() {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <div className="content"></div>
      </div>
    </div>
  );
}

export default HeaderOnly;
