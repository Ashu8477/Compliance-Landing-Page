function DesktopNav({ navLinks }) {
  return (
    <nav
      className="
        hidden
        lg:flex
        items-center
        gap-[26px]
        mx-auto
      "
    >
      {navLinks.map((item, index) => (
        <a
          key={item.name}
          href="#"
          className={`
            relative
            text-[18px]
            leading-normal
            font-[500]
            transition-all
            duration-300
            hover:text-[#4356D6]
            ${index === 0 ? 'text-[#4356D6]' : 'text-[#282828]'}
          `}
        >
          {item.name}

          <span
            className="
              absolute
              left-0
              -bottom-[4px]
              h-[2px]
              w-0
              bg-[#4356D6]
              transition-all
              duration-300
              hover:w-full
            "
          ></span>
        </a>
      ))}
    </nav>
  );
}

export default DesktopNav;
