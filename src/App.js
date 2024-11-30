import { Routes, Route, useLocation } from "react-router-dom";
import Website20 from "./pages/Homepage";
import Website20Contact from "./pages/Website20Contact";
import Website20About from "./pages/Website20About";
import Website20Projects from "./pages/Website20Projects";
import ProjectDetails from "./components/project components/ProjectDetails";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../src/transition";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Website20 />
            </PageTransition>
          }
        />
        <Route
          path="/website20-contact"
          element={
            <PageTransition>
              <Website20Contact />
            </PageTransition>
          }
        />
        <Route
          path="/website20-about"
          element={
            <PageTransition>
              <Website20About />
            </PageTransition>
          }
        />
        <Route
          path="/website20-projects"
          element={
            <PageTransition>
              <Website20Projects />
            </PageTransition>
          }
        />
        <Route
          path="/website20-projects/:projectId"
          element={
            <PageTransition>
              <ProjectDetails />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
