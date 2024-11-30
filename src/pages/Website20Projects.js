import ProjectBar from "../components/project components/ProjectBar";
import { useState } from "react";
import FloatingNav from "../components/FloatingNav";

const Website20Projects = () => {
  const navItems = [
    { name: "Home", link: "#/" },
    { name: "About", link: "#/website20-about" },
    { name: "Projects", link: "#/website20-projects" },
    { name: "Contact", link: "#/website20-contact" },
  ];

  const [currentProject, setCurrentProject] = useState({
    title: "",
    description: "",
    demoLink: "",
    codeLink: "",
    imageUrls: [],
  });

  // State to control the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Function to open the modal
  const openModal = (projectDetails) => {
    document.body.style.overflow = "hidden"; // Prevent scrolling
    setCurrentProject(projectDetails);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    document.body.style.overflowY = "auto"; // Enable scrolling
    setIsModalOpen(false);
  };

  const SpotifyImageUrls = [
    "/rectangle-61@2x.png",
    "/rectangle-7-11@2x.png",
    "/rectangle-8-11@2x.png",
    "/rectangle-7@2x.png",
    "/rectangle-8@2x.png",
    "/rectangle-9@2x.png",
    "/rectangle-7-11@2x.png",
  ];
  const SightgasmImageUrls = [
    "/rectangle-7-2@2x.png",
    "/rectangle-8-3@2x.png",
    "/rectangle-9-3@2x.png",
  ];
  const LinkedOutImageUrls = [
    "/linkedOut/Homepage.webp",
    "/linkedOut/Landing.webp",
    "/linkedOut/messaging.webp",
  ];
  const SnitchImageUrls = ["/rectangle-8-2@2x.png", "/rectangle-9-2@2x.png"];
  const MuseImageUrls = [
    "/muse/LandingPage.webp",
    "/muse/InspireMe.webp",
    "/muse/contentPage.webp",
    "/muse/sign-up page.webp",
    "/muse/map.webp",
    "/muse/reviewsubpage.webp",
    "/muse/Testimonials.webp",
    "/muse/writereview.webp",
  ];

  const spotifyProjectDetails = {
    id: "spotify",
    title: "Spotify Clone",
    description:
      "Developed a Spotify-like music streaming app using Next.js, React, and Tailwind CSS, featuring secure authentication and database interactions via Supabase and PostgreSQL. Integrated Stripe for subscription services, ensuring a dynamic and responsive user interface.",
    demoLink: "https://spotify-clone-demo-link.com",
    codeLink: "https://github.com/Kyrink/Spotify-Clone",
    imageUrls: SpotifyImageUrls,
  };

  const museProjectDetails = {
    id: "muse",
    title: "muse",
    description:
      "A solution to staying invisible to trackers and keeping your browsing data secure.",
    demoLink: "https://muse-demo-link.com",
    codeLink: "https://github.com/Kyrink/muse-React",
    imageUrls: MuseImageUrls,
  };
  const LinkedOutProjectDetails = {
    title: "HuskyGram",
    description:
      "A solution to staying invisible to trackers and keeping your browsing data secure.",
    demoLink: "https://linkedout2-link.com",
    codeLink: "https://github.com/Kyrink/linkedOut2/tree/Rough",
    imageUrls: LinkedOutImageUrls,
  };

  return (
    <main className="relative min-h-screen bg-gray w-full  text-left text-white font-rhapsody">
      <span
        className="absolute top-[96%] left-[10.3px] font-thin [transform:_rotate(-90.23deg)] [transform-origin:0_0]"
        id="home-tag"
      >
        PROJECTS
      </span>
      <section
        className="absolute top-1/2 left-1/2 bg-gray box-border overflow-y-scroll scrollbar-hide text-left text-xl text-white border-[1px] border-solid border-white
           w-[calc(100%-1rem)] h-[calc(100%-1rem)] 
           sm:w-[calc(100%-2rem)] sm:h-[calc(100%-2rem)] 
           md:w-[calc(100%-5rem)] md:h-[calc(100%-5rem)]"
        style={{
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
        }} // Centering the section
        id="rect"
      >
        <div className="flex flex-row items-start justify-start space-y-12 py-0 px-8 lg:px-12 box-border max-w-full">
          <FloatingNav navItems={navItems} />
          <div className="relative tracking-[0.1em] lg:px-9 py-5 text-2xlx lg:text-51xl uppercase inline-block mq450:text-3xl mq450:leading-[53px] lg:text-11xl lg:leading-[70px]">
            Notable Projects
          </div>
        </div>
        <div className=" flex flex-row  justify-start pb-5 px-[6%] box-border max-w-[580px] text-left text-[16px]">
          <div className=" flex-1 relative tracking-[0.1em] uppercase font-thin flex items-center max-w-full">
            <span>
              <p className="m-0 ">
                This is a list of some of my most notable projects. for a full
                list of my work feel free to visit my github page.
              </p>
            </span>
          </div>
        </div>
        <section className="self-stretch flex flex-col items-start justify-start gap-[1px] max-w-full text-center text-18xl-5 text-white font-helvetica-neue">
          <ProjectBar
            projectId={spotifyProjectDetails.id}
            title={spotifyProjectDetails.title}
            description={spotifyProjectDetails.description}
            imageUrls={spotifyProjectDetails.imageUrls}
          />
          <ProjectBar
            projectId={museProjectDetails.id}
            title={museProjectDetails.title}
            description={museProjectDetails.description}
            imageUrls={museProjectDetails.imageUrls}
          />
          <ProjectBar
            onClick={() => openModal(LinkedOutProjectDetails)}
            title={LinkedOutProjectDetails.title}
            description={LinkedOutProjectDetails.description}
            imageUrls={LinkedOutProjectDetails.imageUrls}
          />
          <ProjectBar
            onClick={openModal}
            title="Snitch Privacy Extension"
            description="A solution to staying invisible to trackers and keeping your browsing data secure."
            imageUrls={SnitchImageUrls}
          />
          <ProjectBar
            onClick={openModal}
            title="Sightgasm"
            description="A curated gallery of stunning photography built using Typescript, GSAP, and tailwind CSS"
            imageUrls={SightgasmImageUrls}
          />
          {isModalOpen && (
            <ProjectModal
              projectName={currentProject.title} // or appropriate property
              projectDescription={currentProject.description} // or appropriate property
              demoLink={currentProject.demoLink} // or appropriate property
              codeLink={currentProject.codeLink} // or appropriate property
              imageUrls={currentProject.imageUrls} // this should be the array of image URLs
              closeModal={closeModal}
            />
          )}
        </section>
      </section>
    </main>
  );
};

export default Website20Projects;
