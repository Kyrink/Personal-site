import Carousel from "../components/Carousel";

const Website20Projects = () => {

  return (
    <div className="relative min-h-screen bg-gray w-full overflow-hidden text-left text-white font-rhapsody">
      <section
        className="absolute top-1/2 left-1/2 bg-gray box-border w-full h-full overflow-hidden text-left text-50xl text-white  border-[1px] border-solid border-white"
        style={{
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
          width: 'calc(100% - 5rem)', // Subtracting the total margin (left + right)
          height: 'calc(100% - 5rem)' // Subtracting the total margin (top + bottom)
        }} // Centering the section
        id="rect"
      >
        <Carousel />
      </section>

    </div>
  );
};

export default Website20Projects;
