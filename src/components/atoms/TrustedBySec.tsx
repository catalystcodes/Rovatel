import { trustedCompanyLogo } from "../../data";

interface TrustedCardProps {
  logo: string;
}

const TrustedCard: React.FC<TrustedCardProps> = ({ logo }) => {
  return (
    <div className="">
      <img src={logo} alt="Trusted company logo" className="" />
    </div>
  );
};

const TrustedBySec: React.FC = () => {
  return (
    <section className="md:mb-[5.6rem]">
      <p className="text-[##1A3C35] text-center font-semibold text-[1.4rem] md:mt-[5.8rem] mt-[3rem]">
        Trusted By
      </p>
      <div className="flex  justify-center gap-x-[8.5rem] items-center py-[1.5rem]">
        {trustedCompanyLogo.map((logo, index) => (
          <TrustedCard key={index} {...logo} />
        ))}
      </div>
    </section>
  );
};

export default TrustedBySec;
