import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";

import Header from "../components/Header";
import Sidebar from "./Sidebar";

const cx = classNames.bind(styles);

function DefaultLayout() {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className="content">Content</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
