import classNames from "classnames/bind";

import styles from "./Sidebar.module.scss";
import config from "~/config";
import Menu from "./Menu";
import MenuItem from "./Menu/MenuItem";
import {
  ExploreIcon,
  ExploreIconActive,
  GroupUserIcon,
  GroupUserIconActive,
  HomeIcon,
  HomeIconActive,
  LiveIcon,
  LiveIconActive,
} from "~/assets/icons";
import AccountContainer from "./AccountContainer";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <di className={cx("wrapper-1")}>
      <div className={cx("wrapper")}>
        <Menu>
          <MenuItem
            to={config.routes.home}
            icon={<HomeIcon />}
            activeIcon={<HomeIconActive />}
            title="For You"
          />
          <MenuItem
            to={config.routes.following}
            icon={<GroupUserIcon />}
            activeIcon={<GroupUserIconActive />}
            title="Following"
            redDot
          />
          <MenuItem
            to={config.routes.explore}
            icon={<ExploreIcon />}
            activeIcon={<ExploreIconActive />}
            title="Explore"
          />
          <MenuItem
            to={config.routes.live}
            icon={<LiveIcon />}
            activeIcon={<LiveIconActive />}
            title="LIVE"
          />
        </Menu>
        <AccountContainer label={"Suggested accounts"} showPopper />
        <AccountContainer label={"Follow"} />
        <AccountContainer label={"Follow"} />
        <AccountContainer label={"Follow"} />
        {/* <div>Following accounts</div>
          <div>Discover</div>
          <div>Footer</div> */}
      </div>
    </di>
  );
}

export default Sidebar;
