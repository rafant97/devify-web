import styles from "../styles/Navbar.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import useOnClickOutside from "../hooks/ClickOutside";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from 'next/router'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileNav = useRef();
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  //Este es para el navbar del mobile
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
          {/*Navbar para la homepage */}
          {isHomePage ? (
            <>
              {/* RIGHTSIDE */}
              <ul className={styles.nav_list}>
                <li>
                  <Link href="#" legacyBehavior>
                    <a>Inicio</a>
                  </Link>
                </li>
                <li
                  className={styles.dropdown}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  
                    <a className={styles.dropbtn}>Soluciones</a>
                    {isDropdownOpen && (
                      <div className={styles.dropdownContent}>
                        <>
                          <Link href="/themeDevelopment" legacyBehavior><a>Desarrollo de Temas</a></Link>
                          <Link href="/appDevelopment" legacyBehavior><a>Desarrollo de Apps</a></Link>
                          <Link href="/migration-shopify" legacyBehavior><a>Migraciones</a></Link>
                          <Link href="/headless-shopify" legacyBehavior><a>Desarrollo Headless</a></Link>
                          <Link href="/scraping" legacyBehavior><a>Scraping de Competidores</a></Link>
                          <Link href="/atencionclienteia" legacyBehavior><a>Atención al Cliente con IA</a></Link>
                        </>
                      </div>
                    )}
                  
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
            </>
          ) : (
            <>
              {/* RIGHTSIDE */}
              <ul className={styles.nav_list}>
              <li>
                <Link href="/" legacyBehavior>
                  <a>Inicio</a>
                </Link>
              </li>
              <li
                  className={styles.dropdown}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  
                    <a className={styles.dropbtn}>Soluciones</a>
                    {isDropdownOpen && (
                      <div className={styles.dropdownContent}>
                        <>
                          <Link href="/themeDevelopment" legacyBehavior><a>Desarrollo de Temas</a></Link>
                          <Link href="/appDevelopment" legacyBehavior><a>Desarrollo de Apps</a></Link>
                          <Link href="/migration-shopify" legacyBehavior><a>Migraciones</a></Link>
                          <Link href="/headless-shopify" legacyBehavior><a>Desarrollo Headless</a></Link>
                          <Link href="/scraping" legacyBehavior><a>Scraping de Competidores</a></Link>
                          <Link href="/atencionclienteia" legacyBehavior><a>Atención al Cliente con IA</a></Link>
                        </>
                      </div>
                    )}
                  
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
            </>
          )}
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
                  <a>Inicio</a>
                </Link>
              </li>
              <li className={styles.dropdown}>
                
                <a onClick={toggleDropdown} className={styles.dropbtn}>Soluciones</a>
                {isDropdownOpen && (
                  <div className={styles.dropdownContent}>
                    <>
                      <Link href="/themeDevelopment" legacyBehavior><a>Desarrollo de Temas</a></Link>
                      <Link href="/appDevelopment" legacyBehavior><a>Desarrollo de Apps</a></Link>
                      <Link href="/migration-shopify" legacyBehavior><a>Migraciones</a></Link>
                      <Link href="/headless-shopify" legacyBehavior><a>Desarrollo Headless</a></Link>
                      <Link href="/scraping" legacyBehavior><a>Scraping de Competidores</a></Link>
                      <Link href="/atencionclienteia" legacyBehavior><a>Atención al Cliente con IA</a></Link>
                    </>
                  </div>
                )}
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
