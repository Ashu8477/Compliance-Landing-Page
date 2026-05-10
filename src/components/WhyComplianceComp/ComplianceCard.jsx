const ComplianceCard = ({ icon, title, desc }) => {
  return (
    <div
      className="
        w-full
        lg:w-[594px]
        min-h-[142px]
        border
        border-[#E2E7FF]
        bg-[#FAFBFF]
        rounded-[8px]
        px-[18px]
        lg:px-[20px]
        py-[20px]
        flex
        items-start
        transition-all
        duration-300
        hover:shadow-[0_8px_30px_rgba(67,86,214,0.08)]
      "
    >
      <div className="flex items-start gap-[18px] lg:gap-[26px]">
        <img
          src={icon}
          alt={title}
          className="
            w-[32px]
            h-[32px]
            lg:w-[36px]
            lg:h-[36px]
            shrink-0
          "
        />

        <div className="flex flex-col gap-[8px] lg:gap-[11px]">
          <h3
            className="
              text-[20px]
              lg:text-[24px]
              leading-[28px]
              lg:leading-[32px]
              font-[600]
              tracking-[-0.5px]
              text-black
            "
          >
            {title}
          </h3>

          <p
            className="
              text-[16px]
              lg:text-[18px]
              leading-[28px]
              lg:leading-[32px]
              font-[400]
              text-black
              max-w-[492px]
            "
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComplianceCard;
