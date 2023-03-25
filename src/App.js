import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { publicRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, idx) => {
          let Layout = DefaultLayout;
          let Page = route.element;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          return (
            <Route
              key={idx}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
