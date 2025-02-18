import { servicesDetails } from "../../data";

interface OurServiceProps {
  image: string;
  desc: string;
  header: string;
}

const OurServiceCard = ({ image, desc, header }: OurServiceProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center  ">
      <img src={image} alt={header} />
      <div>
        <p className="text-[1.3rem] md:text-[1.7rem] font-medium mb-[0rem]">
          {header}
        </p>
        <p className="text-[#464646] md:w-[31.9rem]">{desc}</p>
      </div>
    </div>
  );
};

const OurService = () => {
  return (
    <div>
      <p className="text-center text-[2.3rem] font-semibold text-[#1A3C35] ">
        Our Services
      </p>
      <p className="text-[1.3rem] text-center md:w-[47%] m-auto text-[#464646]">
        As your ultimate partner in marketing and entertainment, we offer a
        comprehensive range of services tailored to suit your needs:
      </p>
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:items-center md:gap-x-[5rem] gap-y-[1rem] mt-[5rem] mb-[8.1rem]  ">
        {servicesDetails.map((service, index) => (
          <OurServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default OurService;
