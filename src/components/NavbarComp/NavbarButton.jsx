import phone from '../../assets/Contact-icon.png';

function NavbarButton({ className = '' }) {
  return (
    <button
      className={`
        items-center
        justify-center
        gap-[10px]
        h-[46px]
        px-[22px]
        rounded-[8px]
        bg-[#4356D6]
        border
        border-[#4356D6]
        hover:bg-[#3547d4]
        transition-all
        duration-300
        text-white
        text-[18px]
        leading-[21px]
        font-[500]
        shrink-0
        ${className}
      `}
    >
      <img src={phone} alt="Phone Icon" className="w-[22px] h-[22px]" />
      Contact Us
    </button>
  );
}

export default NavbarButton;
