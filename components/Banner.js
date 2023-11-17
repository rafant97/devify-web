import styles from "../styles/Banner.module.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import {
  TbBrandFacebook,
  TbBrandTwitter,
  TbBrandInstagram,
  TbBrandLinkedin,
} from "react-icons/tb";
import Link from "next/link";

const Banner = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.support}>
          <Link href="#">
            <a>
              <span>Support Me</span>
              <MdKeyboardArrowRight />
            </a>
          </Link>
        </div>
        <div className={styles.contact}>
          <div className={styles.location}>
            <IoLocationOutline />
            <span>Thessaloniki, Greece</span>
          </div>
          <div className={styles.phone}>
            <BsTelephone />
            <span>+30 210 1234567</span>
          </div>
          <div className={styles.socials}>
            <Link href="">
              <a>
                <TbBrandFacebook />
              </a>
            </Link>
            <Link href="">
              <a>
                <TbBrandTwitter />
              </a>
            </Link>
            <Link href="">
              <a>
                <TbBrandInstagram />
              </a>
            </Link>
            <Link href="">
              <a>
                <TbBrandLinkedin />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
