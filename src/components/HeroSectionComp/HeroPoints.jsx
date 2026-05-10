import tick from '../../assets/check-sign.png';

function HeroPoints() {
  const points = [
    'End-to-End Compliance Support',
    'Regulatory Filings Made Simple',
    'Tailored Solutions For Independent Analysts & Firms',
  ];

  return (
    <div
      className="
        mt-[24px]
        lg:mt-[30px]
        flex
        flex-col
        gap-[16px]
      "
    >
      {points.map((item) => (
        <div key={item} className="flex items-start gap-[14px]">
          <img
            src={tick}
            alt="tick"
            className="
              w-[22px]
              h-[22px]
              mt-[2px]
            "
          />

          <p
            className="
              text-[16px]
              lg:text-[18px]
              leading-[28px]
              text-black
            "
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

export default HeroPoints;
