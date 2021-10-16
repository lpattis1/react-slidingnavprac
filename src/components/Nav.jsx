import React, { createRef, useState, useEffect } from "react";
import Hamburger from "hamburger-react";

const Nav = (props) => {
  let slidingMenuRef = createRef();
  let logoRef = createRef();
  const [sideMenu, setSideMenu] = useState(200);
  const [isOpen, setOpen] = useState(false);
  const [logoVisible, setLogoVisibility] = useState(1);

  const showSlidingMenu = () => {
    if (!isOpen) {
      setOpen(true);
      setSideMenu(0);
      setLogoVisibility(0);
    } else {
      setOpen(false);
      setSideMenu(200);
      setLogoVisibility(1);
    }
  };

  useEffect(() => {
    slidingMenuRef.current.style.transform = `translateX(${sideMenu}%)`;
  }, [sideMenu]);

  return (
    <>
      <nav className="navbar navbar-expand-lg forest-nav p-4">
        <div className="container">
          <a
            ref={logoRef}
            style={{
              opacity: `${logoVisible}`,
              transition: "0.3s ease-in-out opacity",
            }}
            className="navbar-brand logo text-white"
            href="#"
          >
            Forest<span className="highlight">Lock</span>
          </a>
          <div
            onClick={showSlidingMenu}
            className="nav-toggler justify-content-end text-white"
          >
            <Hamburger toggled={isOpen} size={25} />
          </div>
        </div>
      </nav>
      <div ref={slidingMenuRef} className="sliding-menu-closed">
        <div className="side-nav">
          <div className="side-logo-container">
            <a href="#" className="side-nav-logo">
              Forest<span className="highlight">Lock</span>
            </a>
          </div>
          <div className="side-link-container">
            <a href="" className="side-nav-link">
              Home
            </a>
            <a href="" className="side-nav-link">
              About
            </a>
            <a href="" className="side-nav-link">
              Gallery
            </a>
            <a href="" className="side-nav-link">
              Pricing
            </a>
            <a href="" className="side-nav-link">
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
