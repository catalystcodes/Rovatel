import { Visions } from "../../data";

const VisionCard = ({ desc }: { desc: string }) => {
  return (
    <ul className="list-disc l">
      <li className="font-normal md:leading-[1.5rem] ">{desc}</li>
    </ul>
  );
};

const OurVision = () => {
  return (
    <section
      id="our-vision"
      className="flex flex-col-reverse md:flex-row md:items-center md:justify-center md:gap-x-[5.1rem] mb-[6rem] relative gap-y-[2rem] "
    >
      <img src="/OurNation.svg" alt="" />
      <div>
        <p className="text-[#1A3C35] font-semibold text-[2.3rem] mb-[0.6rem]">
          Our Vision
        </p>

        <p className="md:w-[36.7rem] font-normal md:text-[1.3rem] mb-[2rem]">
          At our agency, we are dedicated to empowering businesses across Africa
          with cutting-edge marketing solutions that drive growth, innovation,
          and lasting impact.
        </p>
        <img
          src="/bg4.svg"
          alt=""
          className="absolute right-0 -bottom-[70rem] hidden md:block"
        />
        <div className="md:w-[36.7rem] md:pl-[1rem]">
          {Visions.map((vision, index) => (
            <VisionCard key={index} {...vision} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVision;
