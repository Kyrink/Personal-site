import { useEffect } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }) => {
  const mount = document.getElementById("portal-root");
  const el = document.createElement("div");

  useEffect(() => {
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  return ReactDOM.createPortal(children, el);
};

export default Portal;
