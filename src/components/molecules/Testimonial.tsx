import { TestimonialData } from "../../data";

interface TestimonialProps {
  name: string;
  desc: string;
  role: string;
  image: string;
}

const TestimonialCard = ({ name, desc, role, image }: TestimonialProps) => {
  return (
    <div className="drop-shadow-[0_20px_20px_#00000012] md:px-[7.8rem] md:py-[2.5rem] relative rounded-tl-[7rem] rounded-br-[7rem] rounded-tr-[2rem] rounded-bl-[2rem] md:min-w-[40rem] px-[2.8rem] py-[1rem] bg-white ">
      {/*  */}
      <img
        src={image}
        alt=""
        className="rounded-full absolute md:-top-14 md:left-[16rem] md:w-[6.8rem] md:h-[6.8rem] w-[5.8rem] h-[5.8rem] -top-9 left-[8rem] bg-red-600 "
      />
      <p className="text-[#5C6574] text-[0.8rem] text-center md:w-[24rem] mt-[4rem] mb-[1rem]">
        {desc}
      </p>
      <p className="font-bold text-center mb-[0.4rem]">{name} </p>
      <p className="text-center text-[0.9rem] text-[#5C6574]">{role}</p>
    </div>
  );
};
// const TestimonialCard = ({ name, desc, role, image }: TestimonialProps) => {
//   return (
//     <div className="drop-shadow-[0_20px_20px_#00000012] md:px-[7.8rem] md:py-[2.5rem] relative rounded-tl-[7rem] rounded-br-[7rem] rounded-tr-[2rem] rounded-bl-[2rem] md:min-w-[40rem] px-[2.8rem] py-[1rem]   bg-amber-300">
//       <img
//         src={image}
//         alt={name}
//         className="rounded-full absolute md:-top-14 md:left-[16rem] md:w-[6.8rem] md:h-[6.8rem] w-[5.8rem] h-[5.8rem] -top-9 left-[8rem] bg-red-600 z-10"
//       />
//       <p className="text-[#5C6574] text-[0.8rem] text-center md:w-[24rem] mt-[4rem] mb-[1rem]">
//         {desc}
//       </p>
//       <p className="font-bold text-center mb-[0.4rem]">{name}</p>
//       <p className="text-center text-[0.9rem] text-[#5C6574]">{role}</p>
//     </div>
//   );
// };

const Testimonial = () => {
  return (
    <section id="testimonial" className="">
      <p className="text-center text-[#1A3C35] font-semibold text-[2.3rem] mb-[0.6rem]">
        Testimonies
      </p>
      <p className="text-center text-[1.3rem] mb-[5rem]">
        What our happy customers are saying
      </p>
      <div className="flex flex-col md:flex-row md:justify-center md:gap-x-[5rem] md:ml-[5rem] md:overflow-x-auto mb-[3.9rem] gap-y-[6rem] ">
        {TestimonialData.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
      <div className="flex justify-center mb-[6rem]">
        <img src="/Dot.svg" alt="" className="hidden md:block" />
      </div>
    </section>
  );
};

export default Testimonial;
