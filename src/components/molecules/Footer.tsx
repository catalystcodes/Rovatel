import SubFooter from "../atoms/SubFooter";

const Footer = () => {
  return (
    <div className="bg-[#235047] px-5 md:px-0">
      <div className="flex flex-col md:flex-row gap-y-[2.6rem] md:items-center gap-x-[6rem]  justify-center pt-[2.6rem]">
        <div>
          <img src="/logo2.svg" alt="33" />
          <p className="text-white">
            Rovatel Media, Your Partner in Digital Transformation!
          </p>
        </div>
        <div className="flex items-center gap-x-[6rem]">
          <SubFooter
            header="QUICK LINKS"
            desc1="About Us"
            desc2="Our Services"
            desc3="Contact"
            desc4="Blog"
          />
          <SubFooter
            header="USEFUL LINKS"
            desc1="Job Openings"
            desc2="Privacy Policy"
            desc3="Teams of Use"
            desc4="FAQs"
          />
        </div>
        <div>
          <p className="font-semibold text-white">WORK HOUR</p>
          <p className="text-white">9 AM - 5 PM , Monday - Friday</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center md:items-center mt-[3.3rem] gap-x-[5rem] pb-[2.6rem] border-b-1 border-[#D2D2D2] gap-y-[2rem] ">
        <div className="">
          <p className="text-white font-normal">Follow us</p>
          <div className="flex">
            <img src="/faceBookIcon.svg" alt="" />
            <img src="/InstaIcon.svg" alt="" />
            <img src="/xIcon.svg" alt="" />
            <img src="/linkdinIcon.svg" alt="" />
          </div>
        </div>
        <img src="/Line 5.svg" alt="" className="hidden md:block" />
        <div className="flex items-center gap-x-[1.7rem]">
          <img src="/PhoneIcon.svg" alt="" />
          <p className="text-[1.3rem] text-white font-light">+94 4444 5555 6</p>
        </div>
        <img src="/Line 5.svg" alt="" className="hidden md:block" />

        <div className="flex items-start gap-x-[1.3rem]">
          <img src="/Location.svg" alt="" />
          <p className="text-[1.3rem] text-white font-light w-[21.6rem]">
            but also the leap into electronic typesetting
          </p>
        </div>
      </div>
      <p className="text-center text-[0.8rem] text-white pt-[1.8rem] pb-[2.3rem]">
        Copyright © 2025 Shams All rights Reserved
      </p>
    </div>
  );
};

export default Footer;
