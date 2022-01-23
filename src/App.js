import "./App.css";
import TopBar from "./components/common/TopBar";
import Footer from "./components/common/Footer";
import CustomRoutes from "./router/CustomRoutes";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/common/Menu";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <CustomRoutes />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
