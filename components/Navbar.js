import styles from "../styles/Navbar.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import useOnClickOutside from "../hooks/ClickOutside";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileNav = useRef();
  useOnClickOutside(mobileNav, () => setIsActive(false));
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.outer} ${isScrolled ? styles.scrolled : undefined}`}
    >
      <div className={styles.container}>
        <nav className={styles.inner}>
          {/* LEFT SIDE */}
          <div className={styles.me}>
            <Link href={"/"} legacyBehavior>
              <a>
                <span>Devify</span>
                <div className={styles.profile}>
                  <div className={styles.imgBorder}>
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src="/logo.png"
                    />
                  </div>
                </div>
              </a>
            </Link>
          </div>
          {/* RIGHTSIDE */}
          <ul className={styles.nav_list}>
            <li>
              <Link href="#" legacyBehavior>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="#services" legacyBehavior>
                <a>Soluciones</a>
              </Link>
            </li>
            <li>
              <Link href="#methods" legacyBehavior>
                <a>Marketing</a>
              </Link>
            </li>
            <li>
              <Link href="#clients" legacyBehavior>
                <a>Clientes</a>
              </Link>
            </li>
            <li>
              <Link href="#contact" legacyBehavior>
                <a>Contacto</a>
              </Link>
            </li>
            <div className={styles.mobile}>
              <button onClick={() => setIsActive(true)}>
                <FaBars />
              </button>
            </div>
            
          </ul>
        </nav>
      </div>
      {/* MOBILE NAVIGATION */}
      <div
        className={`${styles.mobileNav} ${
          isActive ? undefined : styles.notActive
        }`}
      >
        <nav ref={mobileNav}>
          {isActive && (
            <ul className={styles.mobileNavList}>
              <div className={styles.close}>
                {/* LOGO */}
                <div className={styles.me}>
                  <Link href={"/"} legacyBehavior>
                    <a>
                      <span>Devify</span>
                      <div className={styles.profile}>
                        <div className={styles.imgBorder}>
                          <Image
                            layout="fill"
                            objectFit="cover"
                            src="/logo.png"
                          />
                        </div>
                        <div className={styles.border}></div>
                      </div>
                    </a>
                  </Link>
                </div>
                {/* CLOSE BUTTON */}
                <button
                  onClick={() => {
                    setIsActive(false);
                  }}
                >
                  <FaTimes />
                </button>
              </div>

              <li onClick={() => setIsActive(false)}>
                <Link href="#" legacyBehavior>
                  <a>Home</a>
                </Link>
              </li>
              <li onClick={() => setIsActive(false)}>
                <Link href="#services" legacyBehavior>
                  <a>Soluciones</a>
                </Link>
              </li>
              <li onClick={() => setIsActive(false)}>
                <Link href="#methods" legacyBehavior>
                  <a>Marketing</a>
                </Link>
              </li>
              <li onClick={() => setIsActive(false)}>
                <Link href="#pricing" legacyBehavior>
                  <a>Clientes</a>
                </Link>
              </li>
              <li onClick={() => setIsActive(false)}>
                <Link href="#pricing" legacyBehavior>
                  <a>Contacto</a>
                </Link>
              </li>
              <li onClick={() => setIsActive(false)}>
                <Link href="#clients" legacyBehavior>
                  <a>Clients</a>
                </Link>
              </li>
              <li onClick={() => setIsActive(false)}>
                <Link href="#contact" legacyBehavior>
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
