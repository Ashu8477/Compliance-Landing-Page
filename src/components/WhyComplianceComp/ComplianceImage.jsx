import complianceImg from '../../assets/Section2-Image.png';

const ComplianceImage = () => {
  return (
    <div
      className="
        w-full
        max-w-[350px]
        sm:max-w-[500px]
        md:max-w-[560px]
        lg:w-[594px]
        lg:h-[594px]
        shrink-0
        relative
      "
    >
      <img
        src={complianceImg}
        alt="Compliance"
        className="
          w-full
          h-full
          object-contain
          lg:scale-[0.92]
          origin-center
          lg:origin-left-top
          lg:translate-y-[18px]
        "
      />
    </div>
  );
};

export default ComplianceImage;
