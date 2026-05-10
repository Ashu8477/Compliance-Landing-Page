import { useState } from 'react';

import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';
import NavbarButton from './NavbarButton';
import NavbarLogo from './NavbarLogo';

import Menu from '../../assets/Menu.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home' },
    { name: 'About Us' },
    { name: 'Our Services' },
    { name: 'Pricing' },
    { name: 'FAQ' },
    { name: 'Contact' },
  ];

  return (
    <>
      <header className="w-full bg-[#F5F6FA] border-b border-[#E5E7EB]">
        <div
          className="
            max-w-[1440px]
            h-[80px]
            lg:h-[100px]
            mx-auto
            px-4
            sm:px-6
            md:px-10
            lg:px-[100px]
            flex
            items-center
            justify-between
          "
        >
          <NavbarLogo />

          <DesktopNav navLinks={navLinks} />

          <NavbarButton className="hidden lg:flex" />

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <img src={Menu} alt="menu" className="w-[28px] h-[28px]" />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Navbar;
