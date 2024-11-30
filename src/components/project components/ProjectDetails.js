import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaGithub, FaLink, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import FloatingNav from "../FloatingNav";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // This would ideally come from a central projects data file or API
  const projects = {
    spotify: {
      title: "Spotify Clone",
      description:
        "Developed a Spotify-like music streaming app using Next.js, React, and Tailwind CSS, featuring secure authentication and database interactions via Supabase and PostgreSQL. Integrated Stripe for subscription services, ensuring a dynamic and responsive user interface.",
      demoLink: "https://spotify-clone-demo-link.com",
      codeLink: "https://github.com/Kyrink/Spotify-Clone",
      imageUrls: [
        "/rectangle-61@2x.png",
        "/rectangle-7-11@2x.png",
        "/rectangle-8-11@2x.png",
      ],
      techStack: {
        frontend: ["React", "Next.js", "Tailwind CSS"],
        backend: ["Node.js", "PostgreSQL", "Supabase"],
        other: ["Stripe", "Authentication", "REST API"],
      },
      features: [
        "User authentication and authorization",
        "Music streaming and playback",
        "Playlist management",
        "Subscription handling with Stripe",
        "Responsive design across devices",
      ],
    },
    muse: {
      title: "Muse",
      description:
        "A solution to staying invisible to trackers and keeping your browsing data secure.",
      demoLink: "https://muse-demo-link.com",
      codeLink: "https://github.com/Kyrink/muse-React",
      imageUrls: [
        "/muse/LandingPage.webp",
        "/muse/InspireMe.webp",
        "/muse/contentPage.webp",
      ],
      techStack: {
        frontend: ["React", "Tailwind CSS"],
        backend: ["Node.js", "Express"],
        other: ["Privacy API", "Browser Extension API"],
      },
      features: [
        "Privacy-focused browsing",
        "Tracker blocking",
        "Data encryption",
        "Custom privacy settings",
        "Performance optimization",
      ],
    },
    // Add other projects here
  };

  const project = projects[projectId];
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/website20-about" },
    { name: "Projects", link: "/website20-projects" },
    { name: "Contact", link: "/website20-contact" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === project.imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [project.imageUrls.length]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="relative min-h-screen bg-gray w-full text-left text-white font-rhapsody">
      <span className="absolute top-[96%] left-[10.3px] font-thin [transform:_rotate(-90.23deg)] [transform-origin:0_0]">
        {project.title.toUpperCase()}
      </span>
      <section
        className="absolute top-1/2 left-1/2 bg-gray box-border overflow-y-scroll scrollbar-hide text-left text-xl text-white border-[1px] border-solid border-white
           w-[calc(100%-1rem)] h-[calc(100%-1rem)] 
           sm:w-[calc(100%-2rem)] sm:h-[calc(100%-2rem)] 
           md:w-[calc(100%-5rem)] md:h-[calc(100%-5rem)]"
        style={{
          transform: "translate(-50%, -50%)",
        }}
        id="rect"
      >
        <div className="flex flex-row items-end justify-end mt-6 px-8">
          <FloatingNav navItems={navItems} />
          <button
            onClick={() => navigate("/website20-projects")}
            className="text-white bg-transparent hover:text-orange ml-8"
          >
            <FaTimes size="32px" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-start px-8 lg:px-16"
        >
          {/* Hero Section with Title, Description, and Image Carousel */}
          <div className="flex flex-col md:flex-row w-full gap-6 lg:gap-12 mb-8 lg:mb-12">
            {/* Title, Description, and Links */}
            <div className="flex-1">
              <h1 className="text-2xlx text-start tracking-[0.1em] uppercase font-medium mb-3 lg:mb-8">
                {project.title}
              </h1>

              <div className="mb-4 lg:mb-8">
                <p className="tracking-[0.1em] text-md leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex gap-8 mb-6 md:mb-0">
                {project.demoLink && (
                  <ProjectLink
                    href={project.demoLink}
                    icon={FaLink}
                    text="Demo"
                  />
                )}
                {project.codeLink && (
                  <ProjectLink
                    href={project.codeLink}
                    icon={FaGithub}
                    text="Code"
                  />
                )}
              </div>

              {/* Image Carousel - Shows after links on mobile, hidden on desktop */}
              <div className="block md:hidden relative h-[300px] mt-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={project.imageUrls[currentImageIndex]}
                    alt={`Project screenshot ${currentImageIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {project.imageUrls.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-500 ${
                        index === currentImageIndex
                          ? "bg-orange w-4"
                          : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Image Carousel - Hidden on mobile */}
            <div className="hidden md:block flex-1 relative h-[400px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={project.imageUrls[currentImageIndex]}
                  alt={`Project screenshot ${currentImageIndex + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {project.imageUrls.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-orange w-4"
                        : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 mb-8 w-full lg:w-3/4 lg:mx-auto">
            {/* Tech Stack Section */}
            <div className="w-full">
              <h2 className="lg:text-lgx tracking-[0.1em] uppercase">
                Tech Stack
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-8">
                <TechCategory
                  title="Frontend"
                  items={project.techStack.frontend}
                />
                <TechCategory
                  title="Backend"
                  items={project.techStack.backend}
                />
                <TechCategory title="Other" items={project.techStack.other} />
              </div>
            </div>

            {/* Features Section */}
            <div className="w-full">
              <h2 className="lg:text-lgx tracking-[0.1em] uppercase mb-6">
                Key Features
              </h2>
              <ul className="list-disc list-inside pl-4 lg:pl-8 space-y-2">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-sm lg:text-md tracking-[0.1em]"
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

const TechCategory = ({ title, items }) => (
  <div className="bg-black/20 rounded-lg">
    <h3 className="text-3xl lg:text-9xl tracking-[0.1em] uppercase mb-2 text-orange">
      {title}
    </h3>
    <ul className="space-y-2 pl-4">
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-sm lg:text-md tracking-[0.1em]"
        >
          {item}
        </motion.li>
      ))}
    </ul>
  </div>
);

const ProjectLink = ({ href, icon: Icon, text }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center gap-2"
  >
    <Icon
      size="40"
      className="text-white group-hover:text-orange transition-colors"
    />
    <span className="text-sm text-white tracking-[0.1em] uppercase group-hover:text-orange transition-colors no-underline">
      {text}
    </span>
  </a>
);

export default ProjectDetails;
