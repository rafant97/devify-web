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

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //zod schema
  const schema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    phone: z.string().min(1, { message: "Phone is required" }),
    email: z
      .string()
      .email({ message: "Email is not valid" })
      .min(1, { message: "Email is required" }),
    subject: z.string().min(1, { message: "Subject is required" }),
    message: z.string().min(1, { message: "Message is required" }),
  });
  const [errors, setErrors] = useState([]);
  //validate schema
  const validate = () => {
    const result = schema.safeParse({
      name: name,
      phone: phone,
      email: email,
      subject: subject,
      message: message,
    });
    setErrors(result?.error?.format());
  };

  return (
    <Section
      subtitle={"Dinos qué necesitas"}
      title="Contáctanos!"
      className={styles.container}
      border={false}
      id="contact"
    >
      <Fade>
        <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
          {/* NAME */}
          <div className={styles.name}>
            <InputContainer
              className={styles.inputContainer}
              htmlFor={"name"}
              label="TU NOMBRE"
              error={errors?.name?._errors[0]}
            >
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputContainer>
            <InputContainer
              htmlFor={"phone"}
              label="TELEFONO"
              error={errors?.phone?._errors[0]}
            >
              <input
                type="text"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </InputContainer>
          </div>
          {/* EMAIL */}
          <InputContainer
            htmlFor={"email"}
            label={"EMAIL"}
            error={errors?.email?._errors[0]}
          >
            <input
              type="text"
              id="email"
              name="email"
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
              name="subject"
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

          <button onClick={() => validate()}>
            <span>ENVIAR MENSAJE</span>
            <FaArrowRight />
          </button>
        </form>
        <div className={styles.phone}>
          <Image src="/phone.png" className={styles.img} width={75} height={75} />
          <p className={styles.text}>+34 606 63 35 96</p>
        </div>
        
      </Fade>
    </Section>
  );
};

export default Contact;
