import ProjectBar from "../components/project components/ProjectBar"

const Website20Projects = () => {

  const SpotifyImageUrls = [
    "/rectangle-6@2x.png",
    "/rectangle-7@2x.png",
    "/rectangle-8@2x.png",
    "/rectangle-9@2x.png",
  ];
  const SightgasmImageUrls = [
    "/rectangle-6-2@2x.png",
    "/rectangle-7-2@2x.png",
    "/rectangle-8-3@2x.png",
    "/rectangle-9-3@2x.png",
  ];
  const SnitchImageUrls = [
    "/rectangle-8-2@2x.png",
    "/rectangle-9-2@2x.png",
  ];
  const MuseImageUrls = [
    "/rectangle-10@2x.png",
    "/rectangle-6-1@2x.png",
    "/rectangle-7-1@2x.png",
    "/rectangle-8-1@2x.png",
    "/rectangle-9-1@2x.png",
  ];
  return (
    <div className="relative min-h-screen bg-gray w-full overflow-hidden text-left text-white font-rhapsody">

      <span
        className="absolute top-[773.1px] left-[10.3px] font-thin [transform:_rotate(-90.23deg)] [transform-origin:0_0]"
        id="home-tag"
      >
        PROJECTS
      </span>
      <section
        className="absolute top-1/2 left-1/2 bg-gray box-border w-full h-full overflow-hidden text-left text-50xl text-white  border-[1px] border-solid border-white"
        style={{
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
          width: 'calc(100% - 5rem)', // Subtracting the total margin (left + right)
          height: 'calc(100% - 5rem)' // Subtracting the total margin (top + bottom)
        }}
        id="rect"
      >
        <div className="flex flex-row items-start justify-start py-0 px-8 box-border max-w-full">
          <b className="relative tracking-[0.1em] px-5 py-5 leading-[234.52%] text-51xl uppercase inline-block mq450:text-3xl mq450:leading-[53px] lg:text-11xl lg:leading-[70px]">
            Notable Projects
          </b>
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
          <ProjectBar title="Spotify Clone" imageUrls={SpotifyImageUrls} />
          <ProjectBar title="Muse" imageUrls={MuseImageUrls} />
          <ProjectBar title="Snitch Privacy Extension" imageUrls={SnitchImageUrls} />
          <ProjectBar title="Sightgasm" imageUrls={SightgasmImageUrls} />
          <ProjectBar title="LinkedOut" imageUrls={SightgasmImageUrls} />
        </section>
      </section>
    </div>
  );
};

export default Website20Projects;
