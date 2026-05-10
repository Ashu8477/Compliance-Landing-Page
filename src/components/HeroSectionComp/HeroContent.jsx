import underline from '../../assets/underline-Vector.png';

const HeroContent = () => {
  return (
    <div>
      {/* HEADING */}
      <div className="leading-none">
        {/* LINE 1 */}
        <h1
          className="
                      text-[34px]
                      sm:text-[42px]
                      lg:text-[64px]
                      font-bold
                      leading-[48px]
                      sm:leading-[56px]
                      lg:leading-[82px]
                      tracking-[-1px]
                      text-black
                      text-center
                      lg:text-left
                    "
        >
          Simplifying
        </h1>

        {/* LINE 2 */}
        <div
          className="
                      relative
                      flex
                      items-end
                      justify-center
                      lg:justify-start
                      gap-[10px]
                      lg:gap-[16px]
                      mt-[2px]
                      flex-wrap
                    "
        >
          {/* COMPLIANCE */}
          <div className="relative">
            <h1
              className="
                          text-[34px]
                          sm:text-[42px]
                          lg:text-[64px]
                          font-bold
                          leading-[48px]
                          sm:leading-[56px]
                          lg:leading-[82px]
                          tracking-[-1px]
                          text-[#4B5BE7]
                        "
            >
              Compliance
            </h1>

            <img
              src={underline}
              alt="underline"
              className="
                          absolute
                          left-0
                          bottom-[-5px]
                          lg:bottom-[-10px]
                          w-[190px]
                          sm:w-[240px]
                          lg:w-[360px]
                        "
            />
          </div>

          {/* FOR */}
          <h1
            className="
                        text-[34px]
                        sm:text-[42px]
                        lg:text-[64px]
                        font-bold
                        leading-[48px]
                        sm:leading-[56px]
                        lg:leading-[82px]
                        tracking-[-1px]
                        text-black
                      "
          >
            For
          </h1>
        </div>

        {/* LINE 3 */}
        <h1
          className="
                      mt-[2px]
                      text-[34px]
                      sm:text-[42px]
                      lg:text-[64px]
                      font-bold
                      leading-[48px]
                      sm:leading-[56px]
                      lg:leading-[82px]
                      tracking-[-1px]
                      text-black
                      text-center
                      lg:text-left
                    "
        >
          Research Analysts
        </h1>
      </div>

      {/* DESCRIPTION */}
      <p
        className="
                    mt-[22px]
                    lg:mt-[28px]
                    text-[16px]
                    lg:text-[18px]
                    leading-[28px]
                    lg:leading-[32px]
                    text-[#282828]
                    text-center
                    lg:text-left
                  "
      >
        Stay focused on your insights — we’ll handle the compliance. Our expert
        solutions ensure your research practices meet every regulatory
        requirement with confidence and ease.
      </p>
    </div>
  );
};

export default HeroContent;
