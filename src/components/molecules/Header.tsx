import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="relative ">
      <div className=" flex md:justify-center items-center border-2 border-[#52BDAA] gap-x-[6.5rem] mt-[4.4rem] mb-[2.8rem] rounded-[3.2rem] m-auto  md:w-[62.3rem] bg-white md:drop-shadow-[0_30px_35px_#0C0C0D66]">
        <img src="/bg1.svg" alt="" className="absolute -top-20 z-20 -left-40" />
        <div className="py-[1.7rem] ml-10 z-30 ">
          <a href="/">
            <img src="/logo.svg" alt="" />
          </a>
        </div>
        <nav className="z-30">
          <div
            className={`md:flex md:gap-x-[1.9rem] ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <a href="/">Home</a>

            <a href="#service" onClick={handleMenuToggle}>
              Service
            </a>

            <a href="#feature" onClick={handleMenuToggle}>
              Feature
            </a>

            <a href="#product" onClick={handleMenuToggle}>
              Product
            </a>

            <a href="#testimonial" className="cursor-pointer">
              Testimonial
            </a>

            <a
              className="cursor-pointer"
              href="#faq"
              onClick={handleMenuToggle}
            >
              FAQ
            </a>
          </div>
        </nav>
        <button className="bg-[#235047] text-white py-[1.4rem] px-[1.9rem] rounded-[3.4rem] grow mr-[0.3rem] hidden md:block z-30">
          Request a Quote
        </button>
        <img
          src="/menuIcon.svg"
          alt=""
          className="md:hidden cursor-pointer"
          onClick={handleMenuToggle}
        />
      </div>
    </header>
  );
};

export default Header;
