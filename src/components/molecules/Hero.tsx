import ButtonView from "../atoms/buttonView";

const Hero = () => {
  return (
    <section>
      <div className="flex justify-center items-center relative">
        <ButtonView />
      </div>
      <img src="/bg3.svg" alt="" className="absolute top-0 right-0 -z-40" />
      <p className="md:text-[3.1rem] text-center md:w-[50.2rem] md:m-auto font-bold text-[#142D28] mt-[2rem] mb-[1rem]">
        Transforming Businesses with Innovative{" "}
        <span className="relative">
          Marketing{" "}
          <img
            src="/bg2.svg"
            alt=""
            className="absolute top-0 right-0 hidden md:block"
          />
        </span>
      </p>
      <p className="text-[#71717A] text-center md:w-[26.8rem] m-auto">
        Custom-tailored marketing solutions designed to elevate your brand and
        drive results.
      </p>
      <div className="flex  justify-center mt-[1.9rem] mb-[5rem] relative">
        <button className="bg-[#235047] text-white py-[1rem] px-[4.3rem] rounded-[3.6rem]  ">
          Book A Call
        </button>
        <img
          src="/box1.svg"
          alt=""
          className="absolute top-0 right-0 mr-[6.3rem] hidden md:block"
        />
      </div>
      <div className="flex justify-center gap-x-12">
        <img src="/icon1.svg" alt="" className="mb-[5rem] hidden md:block" />
        <img src="/hearo image.svg" alt="" />
        <img src="/icon2.svg" alt="" className="hidden md:block" />
      </div>
    </section>
  );
};

export default Hero;
