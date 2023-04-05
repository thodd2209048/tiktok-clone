import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import TippyHeadless from "@tippyjs/react/headless";

import styles from "./AccountContainer.module.scss";
import { CheckIcon } from "~/assets/icons";
import { DropWrapper } from "~/components/DropWrapper";
import Button from "~/components/Button/Button";

const cx = classNames.bind(styles);

AccountItem.propTypes = {
  img: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  userSuggest: PropTypes.bool,
  describe: PropTypes.string.isRequired,
  showPopper: PropTypes.bool,
};

function AccountItem({
  img,
  username,
  userSuggest = false,
  describe,
  showPopper,
}) {
  return (
    <div>
      <TippyHeadless
        interactive
        delay={[800, 0]}
        placement="bottom"
        offset={[0, -10]}
        render={(attrs) => (
          <div className="box" tabIndex="-1" {...attrs}>
            <DropWrapper>
              <div className={cx("profile-container")}>
                <div className={cx("profile-head")}>
                  <img className={cx("profile-avatar")} src={img} alt="" />
                  <Button primary>Follow</Button>
                </div>
                <div className={cx("profile-title")}>
                  <strong className={cx("profile-username")}>{username}</strong>
                  {userSuggest && (
                    <span className={cx("div-user-suggest")}>
                      <CheckIcon className={cx("check")} />
                    </span>
                  )}
                </div>
                <span className={cx("profile-desc")}>{describe}</span>
                <div className={cx("profile-status")}>
                  <strong className={cx("profile-stat")}>10.3M</strong>
                  <span className={cx("profile-stat-desc")}>Followers</span>
                  <strong className={cx("profile-stat")}>266.2M</strong>
                  <span className={cx("profile-stat-desc")}>Likes</span>
                </div>
              </div>
            </DropWrapper>
          </div>
        )}
      >
        <div className={cx("account-item")}>
          <img className={cx("avatar")} src={img} alt="" />
          <div className={cx("content")}>
            <div className={cx("title")}>
              <strong className={cx("username")}>{username}</strong>
              {userSuggest && (
                <span className={cx("div-user-suggest")}>
                  <CheckIcon className={cx("check")} />
                </span>
              )}
            </div>
            <div className={cx("desc")}>{describe}</div>
          </div>
        </div>
      </TippyHeadless>
    </div>
  );
}

export default AccountItem;
