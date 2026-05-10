import arrowImg from '../../assets/Vector2.png';

const ComplianceTop = () => {
  return (
    <div
      className="
        w-full
        min-h-[140px]
        flex
        flex-col
        lg:flex-row
        items-start
        justify-between
        gap-[24px]
        lg:gap-[33px]
      "
    >
      {/* LEFT */}
      <div
        className="
          relative
          w-full
          lg:w-[603px]
          shrink-0
        "
      >
        <h2
          className="
            text-[34px]
            sm:text-[40px]
            md:text-[44px]
            lg:text-[48px]
            leading-[48px]
            sm:leading-[58px]
            md:leading-[64px]
            lg:leading-[70px]
            font-[600]
            tracking-[-1px]
            text-black
            capitalize
            text-center
            lg:text-left
          "
        >
          Why <span className="text-[#4356D6]">Compliance Matters</span>
          <br />
          For Research Analysts
        </h2>

        <img
          src={arrowImg}
          alt="arrow"
          className="
            hidden
            lg:block
            absolute
            left-[480px]
            top-[92px]
          "
        />
      </div>

      {/* RIGHT */}
      <div
        className="
          w-full
          lg:w-[603px]
        "
      >
        <p
          className="
            text-[16px]
            sm:text-[17px]
            lg:text-[18px]
            leading-[28px]
            lg:leading-[32px]
            font-[400]
            text-black
            text-center
            lg:text-left
          "
        >
          In today’s regulatory environment, even a small oversight can lead to
          penalties, reputational risks, and loss of client trust. We help
          research analysts and firms navigate complex compliance requirements
          so they can focus on delivering high-quality research without worry.
        </p>
      </div>
    </div>
  );
};

export default ComplianceTop;
