import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Website20 from "./pages/LandingPage";
import Website20ContactMe from "./pages/Website20ContactMe";
import Website20AboutMe from "./pages/Website20AboutMe";
import Website20Projects from "./pages/Website20Projects";
import Website20Home from "./pages/Website20Home";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/website20-contact-me":
        title = "";
        metaDescription = "";
        break;
      case "/website20-about-me":
        title = "";
        metaDescription = "";
        break;
      case "/website20-projects":
        title = "";
        metaDescription = "";
        break;
      case "/website20-home":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Website20 />} />
      <Route path="/website20-contact-me" element={<Website20ContactMe />} />
      <Route path="/website20-about-me" element={<Website20AboutMe />} />
      <Route path="/website20-projects" element={<Website20Projects />} />
      <Route path="/website20-home" element={<Website20Home />} />
    </Routes>
  );
}
export default App;
