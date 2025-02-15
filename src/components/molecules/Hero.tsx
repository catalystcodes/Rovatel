import ButtonView from "../atoms/buttonView";

const Hero = () => {
  return (
    <section>
      <div className="flex justify-center items-center relative">
        <ButtonView />
      </div>
      <img src="/bg1.svg" alt="" className="absolute top-0 left-0" />
      <img src="/bg3.svg" alt="" className="absolute top-0 right-0" />
      <p className="text-[3.1rem] text-center w-[50.2rem] m-auto font-bold text-[#142D28]">
        Transforming Businesses with Innovative{" "}
        <span className="relative">
          Marketing{" "}
          <img src="/bg2.svg" alt="" className="absolute top-0 right-0" />
        </span>
      </p>
      <p className="text-[#71717A] text-center w-[26.8rem] m-auto">
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
          className="absolute top-0 right-0 mr-[6.3rem]"
        />
      </div>
      <div className="flex justify-center gap-x-12">
        <img src="/icon1.svg" alt="" className="mb-[5rem]" />
        <img src="/hearo image.svg" alt="" />
        <img src="/icon2.svg" alt="" />
      </div>
    </section>
  );
};

export default Hero;
