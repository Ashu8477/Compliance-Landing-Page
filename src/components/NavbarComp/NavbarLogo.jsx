import logo from '../../assets/Logo.png';

function NavbarLogo() {
  return (
    <div className="shrink-0">
      <img
        src={logo}
        alt="Company Logo"
        className="
          w-[120px]
          sm:w-[135px]
          lg:w-[145px]
          h-auto
          object-contain
        "
      />
    </div>
  );
}

export default NavbarLogo;
