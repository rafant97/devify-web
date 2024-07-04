
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "../styles/Contact.module.scss";
import Section from "./Section";
import { useState } from "react";
import { z } from "zod";
import { FaArrowRight } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const InputContainer = ({ children, error, htmlFor, label }) => {
  
  return (
    <div className={styles.inputOuter}>
      <div className={styles.inputContainer}>
        <label htmlFor={htmlFor}>{label}</label>
        {children}
      </div>
      <div className={styles.error}>{error && error}</div>
    </div>
  );
};
let form



const Contact = () => {
  form = useRef();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  

  const [errors, setErrors] = useState([]);

  
  //validate schema
  const sendEmail = (e) => {
    e.preventDefault();

    if(!name || !phone || !email || !subject || !message){
      setErrors(["Todos los campos son obligatorios"]);
      return;
    }
    console.log(name, phone, email, subject, message );
    console.log(form.current);
    emailjs
    .sendForm("service_79u67us", "template_3w60kgf", e.target, "MbR4kvoJm3m6ELsjZ")
    .then(
      () => {
        console.log('SUCCESS!');
        setErrors(["¡Enviado!"]);
      },
      (error) => {
        console.log('FAILED...', error);
      }
    );
  };

  return (
    <Section
      subtitle={"¿Qué necesitas?"}
      title="¡Háblanos de ti!"
      className={styles.container}
      border={false}
      id="contact"
    >
      <Fade>
        
      <form onSubmit={sendEmail} className={styles.form} ref={form}>
          {/* NAME */}
          <div className={styles.name}>
            <InputContainer
              className={styles.inputContainer}
              htmlFor={"name"}
              label="TU NOMBRE"
            >
              <input
                type="text"
                id="name"
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputContainer>
            <InputContainer
              htmlFor={"phone"}
              label="TELEFONO"
            >
              <input
                type="text"
                id="phone"
                name="user_number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </InputContainer>
          </div>
          {/* EMAIL */}
          <InputContainer
            htmlFor={"email"}
            label={"EMAIL"}
          >
            <input
              type="text"
              id="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>

          {/* SUBJECT */}
          <InputContainer
            htmlFor={"subject"}
            label={"ASUNTO"}
            error={errors?.subject?._errors[0]}
          >
            <input
              type="text"
              id="subject"
              name="user_subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </InputContainer>

          {/* YOUR MESSAGE */}
          <InputContainer
            htmlFor={"message"}
            label="MENSAJE"
            error={errors?.message?._errors[0]}
          >
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </InputContainer>
          {errors && <div className={styles.error}>{errors}</div>}
          <button type="submit">
            <span>ENVIAR MENSAJE</span>
            <FaArrowRight />
          </button>
        </form>
        
        <div className={styles.phone}>
          <div className={styles.divPhone}>
            <Image src="/phone.png" className={styles.img} width={75} height={75} alt={phone}/>
            <p className={styles.text}>+34 606 63 35 96</p>
          </div>
          <div className={styles.divPhone2}>
            <Image src="/email.png" className={styles.img} width={75} height={75} alt={email}/>
            <p className={styles.text}>contacto@devify.tech</p>
          </div>
          
        </div>
        
      </Fade>
    </Section>
  );
};

export default Contact;
