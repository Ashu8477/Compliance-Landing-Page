import ComplianceCards from './ComplianceCards';
import ComplianceImage from './ComplianceImage';
import ComplianceTop from './ComplianceTop';

import arrowImg2 from '../../assets/Vector1.png';

const WhyCompliance = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div
        className="
          max-w-[1440px]
          min-h-[870px]
          mx-auto
          px-4
          sm:px-6
          md:px-10
          lg:px-[100px]
          pt-[40px]
          lg:pt-[50px]
          pb-[80px]
          lg:pb-[120px]
          relative
        "
      >
        <div
          className="
            w-full
            flex
            flex-col
            gap-[28px]
            lg:gap-[36px]
            relative
          "
        >
          {/* TOP */}
          <ComplianceTop />

          {/* BOTTOM */}
          <div
            className="
              w-full
              flex
              flex-col
              lg:flex-row
              items-center
              lg:items-start
              justify-between
              gap-[40px]
              lg:gap-[52px]
              lg:pt-[20px]
            "
          >
            <ComplianceImage />

            <ComplianceCards />
          </div>
        </div>

        {/* DECORATION */}
        <div
          className="
            hidden
            lg:block
            absolute
            left-[-18px]
            bottom-[0px]
            z-[20]
            opacity-80
            pointer-events-none
            pb-[20px]
            pt-[100px]
          "
        >
          <img src={arrowImg2} alt="arrow" className="w-[138px]" />
        </div>
      </div>
    </section>
  );
};

export default WhyCompliance;
