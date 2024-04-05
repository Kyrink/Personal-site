import ProjectBar from "../components/project components/ProjectBar"
import ProjectModal from "../components/project components/ProjectModal";
import { useState } from 'react';
import FloatingNav from "../components/FloatingNav";

const Website20Projects = () => {

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: 'website20-about' },
    { name: 'Projects', link: '/website20-projects' },
    { name: 'Contact', link: 'website20-contact' },
  ];

  const [currentProject, setCurrentProject] = useState({
    title: '',
    description: '',
    demoLink: '',
    codeLink: '',
    imageUrls: []
  });

  // State to control the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Function to open the modal
  const openModal = (projectDetails) => {
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    setCurrentProject(projectDetails);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    document.body.style.overflowY = 'auto'; // Enable scrolling
    setIsModalOpen(false);
  };

  const SpotifyImageUrls = [
    "/rectangle-61@2x.png",
    "/rectangle-7-11@2x.png",
    "/rectangle-8-11@2x.png",
    "/rectangle-7@2x.png",
    "/rectangle-8@2x.png",
    "/rectangle-9@2x.png",
    "/rectangle-7-11@2x.png"
  ];
  const SightgasmImageUrls = [
    "/rectangle-7-2@2x.png",
    "/rectangle-8-3@2x.png",
    "/rectangle-9-3@2x.png",
  ];
  const SnitchImageUrls = [
    "/rectangle-8-2@2x.png",
    "/rectangle-9-2@2x.png",
  ];
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
    title: 'Spotify Clone',
    description: 'Developed a Spotify-like music streaming app using Next.js, React, and Tailwind CSS, featuring secure authentication and database interactions via Supabase and PostgreSQL. Integrated Stripe for subscription services, ensuring a dynamic and responsive user interface.',
    demoLink: 'https://spotify-clone-demo-link.com',
    codeLink: 'https://github.com/Kyrink/Spotify-Clone',
    imageUrls: SpotifyImageUrls,
  };

  const museProjectDetails = {
    title: 'muse',
    description: 'A solution to staying invisible to trackers and keeping your browsing data secure.',
    demoLink: 'https://muse-demo-link.com',
    codeLink: 'https://github.com/Kyrink/muse-React',
    imageUrls: MuseImageUrls,
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
        className="scrollable-section absolute top-1/2 left-1/2 w-full h-full overflow-auto text-left text-50xl text-white border-[1px] border-solid border-white"
        style={{
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
          width: 'calc(100% - 5rem)',
          height: 'calc(100% - 5rem)'
        }}
        id="rect"
      >


        <div className="flex flex-row items-start justify-start space-y-12 py-0 px-8 box-border max-w-full">
          <FloatingNav navItems={navItems} />
          <div className="relative tracking-[0.1em] px-5 py-5 text-51xl uppercase inline-block mq450:text-3xl mq450:leading-[53px] lg:text-11xl lg:leading-[70px]">
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
            onClick={() => openModal(spotifyProjectDetails)}
            title={spotifyProjectDetails.title}
            description={spotifyProjectDetails.description}
            imageUrls={spotifyProjectDetails.imageUrls}
          />
          <ProjectBar
            onClick={() => openModal(museProjectDetails)}
            title={museProjectDetails.title}
            description={museProjectDetails.description}
            imageUrls={museProjectDetails.imageUrls}
          />
          <ProjectBar onClick={openModal} title="Snitch Privacy Extension" description="A solution to staying invisible to trackers and keeping your browsing data secure." imageUrls={SnitchImageUrls} />
          <ProjectBar onClick={openModal} title="Sightgasm" description="A curated gallery of stunning photography built using Typescript, GSAP, and tailwind CSS" imageUrls={SightgasmImageUrls} />
          <ProjectBar onClick={openModal} title="LinkedOut" imageUrls={SightgasmImageUrls} />
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
