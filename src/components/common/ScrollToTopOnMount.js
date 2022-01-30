import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ScrollToTopOnMount() {
  const { pathName } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  return null;
}
export default ScrollToTopOnMount;
