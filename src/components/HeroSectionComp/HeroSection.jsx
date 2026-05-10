import HeroButtons from './HeroButtons';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';
import HeroPoints from './HeroPoints';

function HeroSection() {
  return (
    <section className="w-full bg-[#F5F6FA] overflow-hidden">
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-4
          sm:px-6
          md:px-10
          lg:px-[100px]
        "
      >
        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-[30px]
            lg:gap-[50px]
            pt-[20px]
            lg:pt-[40px]
            pb-[50px]
            lg:pb-[80px]
          "
        >
          {/* LEFT */}
          <div className="w-full lg:max-w-[620px]">
            <HeroContent />
            <HeroPoints />
            <HeroButtons />
          </div>

          {/* RIGHT */}
          <HeroImage />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
