import closeIcon from '../../assets/Close.png';

import aboutIcon from '../../assets/AboutUs.png';
import contactIcon from '../../assets/Contact.png';
import faqIcon from '../../assets/FAQ.png';
import homeIcon from '../../assets/Home.png';
import servicesIcon from '../../assets/Our Services.png';
import pricingIcon from '../../assets/Pricing.png';

import NavbarButton from './NavbarButton';
import NavbarLogo from './NavbarLogo';

function MobileMenu({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  const navLinks = [
    {
      name: 'Home',
      icon: homeIcon,
    },
    {
      name: 'About Us',
      icon: aboutIcon,
    },
    {
      name: 'Our Services',
      icon: servicesIcon,
    },
    {
      name: 'Pricing',
      icon: pricingIcon,
    },
    {
      name: 'FAQ',
      icon: faqIcon,
    },
    {
      name: 'Contact',
      icon: contactIcon,
    },
  ];

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        lg:hidden
      "
    >
      {/* OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-black/70
        "
        onClick={() => setIsOpen(false)}
      ></div>

      {/* SIDEBAR */}
      <div
        className="
          absolute
          top-0
          right-0
          w-[327px]
          max-w-full
          h-screen
          bg-[#FAFBFF]
          flex
          flex-col
        "
      >
        {/* TOP */}
        <div
          className="
            h-[74px]
            px-[16px]
            flex
            items-center
            justify-between
            border-b
            border-[#E5E7EB]
          "
        >
          <NavbarLogo />

          <button onClick={() => setIsOpen(false)}>
            <img src={closeIcon} alt="close" className="w-[28px] h-[28px]" />
          </button>
        </div>

        {/* MENU */}
        <div
          className="
            flex-1
            px-[16px]
            pt-[50px]
            flex
            flex-col
            justify-between
          "
        >
          <div className="flex flex-col gap-[40px]">
            {navLinks.map((item, index) => (
              <a
                key={item.name}
                href="#"
                className="
                  flex
                  items-center
                  gap-[24px]
                "
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-[24px] h-[24px]"
                />

                <span
                  className={`
                    text-[18px]
                    leading-[22px]
                    font-[500]
                    capitalize
                    ${index === 0 ? 'text-[#4356D6]' : 'text-[#282828]'}
                  `}
                >
                  {item.name}
                </span>
              </a>
            ))}
          </div>

          <NavbarButton className="flex mb-[40px] w-full" />
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
