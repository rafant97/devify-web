import styles from "../styles/Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import { z } from "zod";
import { useState } from "react";

const Footer = () => {
  const schema = z.object({
    email: z
      .string()
      .email({ message: "Email is not valid" })
      .min(1, { message: "Email is required" }),
  });
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const validate = () => {
    const result = schema.safeParse({
      email: email,
    });
    setErrors(result?.error?.format());
  };
  return (
    <footer className={styles.outer}>
      <div className={styles.inner}>
        {/* COL */}
        <div className={styles.col}>
          <div className={styles.me}>
            <Link href={"/"}>
              <a>
                <span>WebDesign</span>
                <div className={styles.profile}>
                  <div className={styles.imgBorder}>
                    <Image
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      src="/logo.png"
                    />
                  </div>
                </div>
              </a>
            </Link>
          </div>
          
        </div>

        {/* COL */}
        <div className={styles.col}>
          <ul>
            <li className={styles.title}>Services</li>
            <li>
              <Link href="#">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="#services">
                <a>Soluciones</a>
              </Link>
            </li>
            <li>
              <Link href="#methods">
                <a>Marketing</a>
              </Link>
            </li>
            <li>
              <Link href="#clients">
                <a>Clientes</a>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <a>Contacto</a>
              </Link>
            </li>
          </ul>
        </div>

        

        {/* COL */}
        <div className={styles.col}>
          <div className={styles.newsletter}>
            <h2 className={styles.title}>Newsletter</h2>
            <p>Si quieres estar a la última en el mundo Ecommerce!</p>
          </div>
          <form className={styles.input} onClick={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors && <span>{errors?.email?._errors[0]}</span>}
            <button onClick={() => validate()}>Submit Now</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
