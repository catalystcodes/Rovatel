const AboutUs = () => {
  return (
    <section
      id="feature"
      className="flex flex-col-reverse md:flex-row items-center md:justify-center md:gap-x-[5.1rem] md:mb-[6rem] "
    >
      <img src="/pana.svg" alt="" />
      <div>
        <p className="text-[#1A3C35] font-semibold text-[2.3rem] mb-[0.6rem]">
          About Us
        </p>
        <p className="md:w-[36.7rem] font-normal md:text-[1.3rem]">
          At Rovatel Media, we are revolutionizing the media landscape,
          transcending traditional boundaries to ignite transformation and
          propel businesses to unparalleled heights in today's dynamic
          environment. As a formidable force in Nigeria's media sector, we blend
          innovation, creativity, and strategic expertise to foster lasting
          relationships between brands and their audiences. We firmly believe
          that brands have the power to create significant impact through
          genuine connections with their valued customers.
        </p>
        <div className="flex items-center gap-x-[1rem] mt-[2rem]">
          <p className="font-bold text-[1.3rem] text-[#285A50]">Read More</p>
          <img src="/arrow-right 1.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
