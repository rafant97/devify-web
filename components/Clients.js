import React from "react";
import Section from "./Section";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/Clients.module.scss";
import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";

const Client = ({ imgSource, country, comment, name, profession }) => {
  return (
    <div className={styles.client}>
      <div className={styles.info}>
        {/* Country */}
        <div className={styles.country}>
          <div className={styles.svg}>
            <RiDoubleQuotesL />
          </div>
          <span>{country}</span>
        </div>
        {/* comment */}
        <p className={styles.comment}>{comment}</p>
        {/* name */}
        <div className={styles.who}>
          <span className={styles.name}>{name}</span>
          <span className={styles.profession}>{profession}</span>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <div className={styles.inner}>
          <Image
            width="100%"
            height="100%"
            objectFit="cover"
            layout="responsive"
            src={imgSource}
          />
          <div className={styles.border}></div>
        </div>
      </div>
    </div>
  );
};

Client.defaultProps = {
  imgSource: "/images/client.png",
  country: "USA",
  comment:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nisi voluptates ducimus voluptate, qui et itaque tempore iusto recusandae delectus.",
  name: "John Doe",
  profession: "Web Developer",
};

const Clients = () => {
  return (
    <Section
      subtitle="Nuestros clientes"
      title="Clientes con los que trabajamos"
      id="clients"
    >
      <Carousel emulateTouch showThumbs={false} showStatus={false}>
        <Client
          imgSource={"/person1.jpg"}
          country={"Alemania"}
          profession={"Obsequ - Store Manager"}
          name={"Talha"}
        />
        <Client
          imgSource={"/person2.jpg"}
          country={"Sweden"}
          profession={"UX/UI Designer"}
          name={"Moctezuma Killa"}
        />
        <Client imgSource={"/person3.jpg"} />
      </Carousel>
    </Section>
  );
};

export default Clients;
