import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/index";
import PrelaunchHomePage from "./pages/PrelaunchHomePage/index";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<HomePage />} />
        <Route
          exact
          path="prelaunch"
          element={<PrelaunchHomePage />}
        />
        <Route
          exact
          path="login"
          element={<LoginPage />}
        />
        <Route
          exact
          path="register"
          element={<SignupPage />}
        />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
