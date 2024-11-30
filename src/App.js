import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Website20 from "./pages/Homepage";
import Website20Contact from "./pages/Website20Contact";
import Website20About from "./pages/Website20About";
import Website20Projects from "./pages/Website20Projects";
import ProjectDetails from "./components/project components/ProjectDetails";
import { AnimatePresence } from "framer-motion";

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
      case "/website20-about":
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
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Website20 />} />
        <Route path="/website20-contact" element={<Website20Contact />} />
        <Route path="/website20-about" element={<Website20About />} />
        <Route path="/website20-projects" element={<Website20Projects />} />
        <Route
          path="/website20-projects/:projectId"
          element={<ProjectDetails />}
        />
      </Routes>
    </AnimatePresence>
  );
}
export default App;
