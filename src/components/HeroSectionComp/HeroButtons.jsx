import phoneIcon from '../../assets/Contact-icon.png';

function HeroButtons() {
  return (
    <div
      className="
        mt-[30px]
        lg:mt-[40px]
        flex
        flex-col
        sm:flex-row
        items-center
        gap-[14px]
      "
    >
      <button
        className="
          group
          w-full
          sm:w-[210px]
          h-[50px]
          rounded-[8px]
          bg-[#4B5BE7]
          text-white
          text-[17px]
          font-medium
          hover:bg-[#3146e0]
          transition-all
          duration-300
          flex
          items-center
          justify-center
          gap-[10px]
        "
      >
        <img
          src={phoneIcon}
          alt="phone"
          className="
            w-[18px]
            h-[18px]
            opacity-0
            scale-0
            group-hover:opacity-100
            group-hover:scale-100
            transition-all
            duration-300
          "
        />

        <span>Get Started</span>
      </button>

      <button
        className="
          group
          w-full
          sm:w-[230px]
          h-[50px]
          rounded-[8px]
          border
          border-[#4B5BE7]
          text-[#4B5BE7]
          text-[17px]
          font-medium
          hover:bg-[#4B5BE7]
          hover:text-white
          transition-all
          duration-300
          flex
          items-center
          justify-center
          gap-[10px]
        "
      >
        <img
          src={phoneIcon}
          alt="phone"
          className="
            w-[18px]
            h-[18px]
            opacity-0
            scale-0
            group-hover:opacity-100
            group-hover:scale-100
            transition-all
            duration-300
          "
        />

        <span>Book A Consultation</span>
      </button>
    </div>
  );
}

export default HeroButtons;
