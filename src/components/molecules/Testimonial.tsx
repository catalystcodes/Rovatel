import { TestimonialData } from "../../data";

interface TestimonialProps {
  name: string;
  desc: string;
  role: string;
  image: string;
}

const TestimonialCard = ({ name, desc, role, image }: TestimonialProps) => {
  return (
    <div className="bg-white drop-shadow-[0_20px_20px_#00000012] px-[7.8rem] py-[2.5rem] relative rounded-tl-[7rem] rounded-br-[7rem] rounded-tr-[2rem] rounded-bl-[2rem]">
      {/*  */}
      <img
        src={image}
        alt=""
        className="rounded-full absolute -top-14 left-[16rem]"
      />
      <p className="text-[#5C6574] text-center w-[24rem] mt-[4rem] mb-[1rem]">
        {desc}
      </p>
      <p className="font-bold text-center mb-[0.4rem]">{name} </p>
      <p className="text-center text-[0.9rem] text-[#5C6574]">{role}</p>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="mb-[3.9rem]">
      <p className="text-center text-[#1A3C35] font-semibold text-[2.3rem] mb-[0.6rem]">
        Testimonies
      </p>
      <p className="text-center text-[1.3rem] mb-[5rem]">
        What our happy customers are saying
      </p>
      <div className="flex justify-center gap-x-[5rem] ">
        {TestimonialData.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
