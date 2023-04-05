import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./AccountContainer.module.scss";
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

AccountContainer.propTypes = {};

function AccountContainer({ label, showPopper = false }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("label")}>{label}</div>
      <div className={cx("account-list")}>
        <AccountItem
          showPopper={showPopper}
          username={"thobaymau"}
          userSuggest
          describe={"tho bay mau"}
          img={
            "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/967d1536e5ee20ed8112ee84f30a75d2~c5_100x100.jpeg?x-expires=1680876000&x-signature=BoXTDE1oxbY%2B0mwNvZjHPi7CA70%3D"
          }
        />
        <AccountItem
          showPopper={showPopper}
          username={"thobaymau"}
          userSuggest
          describe={"tho bay mau"}
          img={
            "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/967d1536e5ee20ed8112ee84f30a75d2~c5_100x100.jpeg?x-expires=1680876000&x-signature=BoXTDE1oxbY%2B0mwNvZjHPi7CA70%3D"
          }
        />
        <AccountItem
          showPopper={showPopper}
          username={"thobaymau"}
          userSuggest
          describe={"tho bay mau"}
          img={
            "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/967d1536e5ee20ed8112ee84f30a75d2~c5_100x100.jpeg?x-expires=1680876000&x-signature=BoXTDE1oxbY%2B0mwNvZjHPi7CA70%3D"
          }
        />
        <AccountItem
          showPopper={showPopper}
          username={"thobaymau"}
          userSuggest
          describe={"tho bay mau"}
          img={
            "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/967d1536e5ee20ed8112ee84f30a75d2~c5_100x100.jpeg?x-expires=1680876000&x-signature=BoXTDE1oxbY%2B0mwNvZjHPi7CA70%3D"
          }
        />
      </div>
    </div>
  );
}

export default AccountContainer;
