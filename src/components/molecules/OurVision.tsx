import { Visions } from "../../data";

const VisionCard = ({ desc }: { desc: string }) => {
  return (
    <ul className="list-disc l">
      <li className="font-normal leading-[1.5rem] ">{desc}</li>
    </ul>
  );
};

const OurVision = () => {
  return (
    <div className="flex items-center justify-center gap-x-[5.1rem] mb-[6rem]">
      <img src="/public/OurNation.svg" alt="" />
      <div>
        <p className="text-[#1A3C35] font-semibold text-[2.3rem] mb-[0.6rem]">
          Our Vision
        </p>
        <p className="w-[36.7rem] font-normal text-[1.3rem] mb-[2rem]">
          At our agency, we are dedicated to empowering businesses across Africa
          with cutting-edge marketing solutions that drive growth, innovation,
          and lasting impact.
        </p>
        <div className="w-[36.7rem] pl-[1rem]">
          {Visions.map((vision, index) => (
            <VisionCard key={index} {...vision} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurVision;
