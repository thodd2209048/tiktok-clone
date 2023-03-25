import { HeaderOnly } from "~/layouts";
import { FollowingPage, HomePage, SearchPage, UploadPage } from "~/pages";

//public routes
const publicRoutes = [
  { path: "/", element: HomePage },
  { path: "/following", element: FollowingPage },
  { path: "/upload", element: UploadPage, layout: HeaderOnly },
  { path: "/search", element: SearchPage, layout: null },
];

//private routes
const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
