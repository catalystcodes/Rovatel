interface SubFooterProps {
  header: string;
  desc1: string;
  desc2: string;
  desc3: string;
  desc4: string;
}

const SubFooter = ({ header, desc1, desc2, desc3, desc4 }: SubFooterProps) => {
  return (
    <div>
      <p className="font-semibold mb-[2rem] text-white">{header}</p>
      <div className="flex flex-col gap-[1rem]">
        <p className="text-white">{desc1}</p>
        <p className="text-white">{desc2}</p>
        <p className="text-white">{desc3}</p>
        <p className="text-white">{desc4}</p>
      </div>
    </div>
  );
};

export default SubFooter;
