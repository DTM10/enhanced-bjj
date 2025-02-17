import { useState, useRef, useEffect } from "react";
import styles from "./Header.module.scss";
import { useLocation } from "react-router-dom";
import BrandLogo from "../../assets/logo.webp";
import useOutsideClick from "../../utils/useOutsideClick";
import { Link } from "react-router-dom";
import { FaBars, FaTimesCircle } from "react-icons/fa";

export default function Header() {
  const modalRef = useRef();
  const togglerRef = useRef();
  const { pathname } = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const links = [
    { name: "Home", link: "/" },
    { name: "Meet Our Team", link: "/team" },
    { name: "Schedule & Pricing", link: "/schedule-and-pricing" },
    { name: "About Us", link: "/about-us" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  // Use the custom hook to handle outside click
  useOutsideClick(modalRef, (event) => {
    if (
      !isCollapsed &&
      togglerRef.current &&
      !togglerRef.current.contains(event.target)
    ) {
      setIsCollapsed(true);
    }
  });

  // Make the header colapse every time the pathname changes
  useEffect(() => {
    setIsCollapsed(true);
  }, [pathname]);

  // Function to change the state of the navigation menu when the hamburger icon is clicked
  const handleChangeCollapsed = (e) => {
    e.stopPropagation();
    setIsCollapsed((prevValue) => !prevValue);
  };
  return (
    <header className={styles["header"]}>
      <nav className={styles["navbar-container"]}>
        <div className={styles["mobile-show"]}>
          <Link to={"/"}>
            <img
              className={styles["logo"]}
              src={BrandLogo}
              alt="Enhanced BJJ Logo"
            />
          </Link>
          <button
            ref={togglerRef}
            onClick={handleChangeCollapsed}
            className={`${styles["navbar-toggler"]} ${
              isCollapsed && styles["collapsed"]
            }`}
          >
            <FaBars className={styles["hamburger"]} />
            <FaTimesCircle className={styles["close"]} />
          </button>
        </div>
        <div
          className={`${styles["nav-links-container"]} ${
            isCollapsed && styles["collapsed"]
          }`}
          ref={modalRef}
        >
          <div className={styles["links"]}>
            {links.map((link) => (
              <Link key={link.name} to={link.link} className={styles["link"]}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
