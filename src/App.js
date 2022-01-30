import "./App.css";
import CustomRoutes from "./router/CustomRoutes";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import LoadingPage from "./pages/LoadingPage";
import { loginSuccess } from "./store/user/userActions";
import { getUser } from "./api/user-service";
import { useStore } from "./store";
import TopBar from "./components/common/TopBar";
import Footer from "./components/common/Footer";
import ScrollToTopOnMount from "./components/common/ScrollToTopOnMount";

function App() {
  const [loading, setLoading] = useState(true);
  const { dispatchUser } = useStore();

  const loadData = async () => {
    try {
      /**** LOAD USER ****/
      const respUser = await getUser();
      if (respUser.status !== 200) throw "An error occured whlie getting user";
      dispatchUser(loginSuccess(respUser.data));

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) return <LoadingPage />;
  else
    return (
      <BrowserRouter>
        <TopBar />
        <CustomRoutes />
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    );
}

export default App;
