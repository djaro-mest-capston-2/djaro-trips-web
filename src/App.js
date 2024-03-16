import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
// import Footer from "./components/common/Footer";
// import NavBar from "./components/common/NavBar/index";
import HomePage from "./pages/HomePage/index";
import PrelaunchHomePage from "./pages/PrelaunchHomePage/index";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* <NavBar /> */}
        <Route index element={<HomePage />} />
        <Route
          exact
          path="prelaunch"
          element={<PrelaunchHomePage />}
        />
        {/* <Footer /> */}
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
