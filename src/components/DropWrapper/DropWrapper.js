import styles from "./DropWrapper.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function DropWrapper({ children, className }) {
  return <div className={cx("wrapper", className)}>{children}</div>;
}

export default DropWrapper;
