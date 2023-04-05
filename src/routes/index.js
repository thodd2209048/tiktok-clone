import config from "~/config";
import { HeaderOnly } from "~/layouts";
import {
  FollowingPage,
  HomePage,
  ProfilePage,
  SearchPage,
  UploadPage,
  ExplorePage,
  LivePage,
} from "~/pages";

//public routes
const publicRoutes = [
  { path: config.routes.home, element: HomePage },
  { path: config.routes.following, element: FollowingPage },
  { path: config.routes.upload, element: UploadPage, layout: HeaderOnly },
  { path: config.routes.search, element: SearchPage, layout: null },
  { path: config.routes.profile, element: ProfilePage },
  { path: config.routes.explore, element: ExplorePage },
  { path: config.routes.live, element: LivePage },
];

//private routes
const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
