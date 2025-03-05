export const ToggleMenu = ({ open, setOpen }) => (
  <button type="button" className="mobile-nav-toggle d-xl-none">
    <i
      className={open ? "icofont-close" : "icofont-navigation-menu"}
      onClick={() => setOpen(!open)}
    ></i>
  </button>
);
