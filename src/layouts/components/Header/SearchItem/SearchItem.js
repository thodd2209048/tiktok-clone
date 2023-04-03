import styles from "./SearchItem.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "~/components/Image";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

SearchItem.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func,
};

function SearchItem({ data, onClick }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")} onClick={onClick}>
      <Image className={cx("avatar")} src={data.avatar} alt={data.full_name} />
      <div className={cx("content")}>
        <h4 className={cx("username")}>
          <span>{data.nickname}</span>
          {data.tick && (
            <FontAwesomeIcon className={cx("icon")} icon={faCheckCircle} />
          )}
        </h4>
        <span className={cx("name")}>{data.full_name}</span>
      </div>
    </Link>
  );
}

export default SearchItem;
