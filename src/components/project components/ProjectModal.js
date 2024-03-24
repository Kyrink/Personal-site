const ProjectModal = () => {
  return (
    <div className="w-full relative bg-gray shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border overflow-hidden flex flex-col items-start justify-start pt-[30px] pb-[117px] pr-[30px] pl-[167px] gap-[30px] tracking-[normal] border-[1px] border-solid border-dimgray mq450:pl-5 mq450:box-border mq700:gap-[15px_30px] mq700:pl-[83px] mq700:box-border">
      <section className="self-stretch h-[99px] flex flex-row items-start justify-end py-0 px-px box-border max-w-full text-center text-[40px] text-white font-helvetica-neue">
        <div className="self-stretch w-[721px] flex flex-col items-end justify-start max-w-full">
          <img
            className="w-[50px] h-[50px] relative object-cover"
            loading="lazy"
            alt=""
            src="/close@2x.png"
          />
          <div className="self-stretch flex flex-row items-start justify-start">
            <h1 className="m-0 h-[49px] w-[367px] relative text-inherit tracking-[0.1em] uppercase font-medium font-inherit flex items-center justify-center mq450:text-5xl mq900:text-[32px]">
              Spotify Clone
            </h1>
          </div>
        </div>
      </section>
      <section className="w-[803px] flex flex-row items-start justify-center pt-0 px-0 pb-[11px] box-border max-w-full text-center text-[15px] text-white font-helvetica-neue">
        <div className="w-[603px] relative tracking-[0.1em] leading-[17px] uppercase font-thin flex items-center justify-center shrink-0 max-w-full">
          Developed a Spotify-like music streaming app using Next.js, React, and
          Tailwind CSS, featuring secure authentication and database
          interactions via Supabase and PostgreSQL. Integrated Stripe for
          subscription services, ensuring a dynamic and responsive user
          interface.
        </div>
      </section>
      <section className="flex flex-row items-end justify-center gap-[30px] max-w-full text-center text-sm text-white font-helvetica-neue mq900:flex-wrap">
        <div className="w-11 flex flex-col items-start justify-start gap-[15px]">
          <button className="self-stretch flex flex-col items-start justify-center pt-0 px-0 pb-0">
            <img
              className="w-[42.3px] h-[42.3px] relative object-cover"
              loading="lazy"
              alt=""
              src="/-icon-link-21@2x.png"
            />
            <div className="self-stretch relative tracking-[0.1em] leading-[33px] uppercase font-thin inline-block min-w-[44px]">
              DEMO
            </div>
          </button>
          <button className="w-[42.1px] flex flex-col items-center justify-start">
            <img
              className="w-[42.1px] h-[39.7px] relative object-cover"
              loading="lazy"
              alt=""
              src="/-icon-github1@2x.png"
            />
            <div className="self-stretch relative tracking-[0.1em] leading-[33px] uppercase font-thin inline-block min-w-[42px]">
              code
            </div>
          </button>
        </div>
        <div className="w-[660px] flex flex-row flex-wrap items-start justify-start gap-[20px_18.7px] min-h-[320px] max-w-full">
          <img
            className="h-[150px] w-[150px] relative rounded-[8.33px] object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-61@2x.png"
          />
          <img
            className="h-[150px] w-[150px] relative rounded-[8.33px] object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-71@2x.png"
          />
          <img
            className="h-[150px] w-[150px] relative rounded-[8.33px] object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-81@2x.png"
          />
          <img
            className="h-[150px] w-[150px] relative rounded-[8.33px] object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-91@2x.png"
          />
          <img
            className="h-[150px] w-[150px] relative rounded-[8.33px] object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-6-11@2x.png"
          />
          <img
            className="h-[150px] w-[150px] relative rounded-[8.33px] object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-7-11@2x.png"
          />
          <img
            className="h-[150px] w-[150px] relative rounded-[8.33px] object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-8-11@2x.png"
          />
          <img
            className="h-[150px] w-[150px] relative rounded-[8.33px] object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-9-11@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default ProjectModal;
