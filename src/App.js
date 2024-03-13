import "./App.css";
import Footer from "./components/common/Footer";
import NavBar from "./components/common/NavBar/index";
import HomePage from "./pages/HomePage/index";

function App() {
  return (
    <>
      <div className="">
        <NavBar />
        <HomePage />
      </div>
      <Footer />
    </>
  );
}

export default App;
