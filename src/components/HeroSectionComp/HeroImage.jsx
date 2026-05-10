import heroImg from '../../assets/Banner Image.png';

function HeroImage() {
  return (
    <div
      className="
        w-full
        max-w-[350px]
        sm:max-w-[500px]
        lg:max-w-[680px]
        flex
        justify-center
      "
    >
      <img
        src={heroImg}
        alt="hero"
        className="
          w-full
          h-auto
          object-contain
        "
      />
    </div>
  );
}

export default HeroImage;
