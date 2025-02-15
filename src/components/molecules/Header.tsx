import { Link } from "react-router";
const Header = () => {
  return (
    <header className="flex justify-center items-center border-2 border-[#52BDAA] gap-x-[6.5rem] mt-[4.4rem] mb-[2.8rem] rounded-[3.2rem] m-auto w-[62.3rem] bg-white drop-shadow-[0_30px_35px_#0C0C0D66]">
      <div className="py-[1.7rem] ml-10 ">
        <Link to="/">
          <img src="/logo.svg" alt="" />
        </Link>
      </div>
      <nav className="">
        <ul className="flex gap-x-[1.9rem]">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/feature">Feature</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/testimonial">Testimonial</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </nav>
      <button className="bg-[#235047] text-white py-[1.4rem] px-[1.9rem] rounded-[3.4rem] grow mr-[0.3rem]">
        Request a Quote
      </button>
    </header>
  );
};

export default Header;
