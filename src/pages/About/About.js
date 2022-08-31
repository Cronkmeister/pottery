import React from "react";
import "./About.scss";

//imgs
import potteryWheel from "../../assests/images/pottery-wheel-hands.jpg";
import potteryJugWhite from "../../assests/images/pottery-jug-white.jpg";

export default function About() {
  return (
    <section className="about">
      <div className="about__wrapper">
        <h1 className="about__title">About </h1>
        <h2 className="about__sub-heading">
          Local hand crafted, beautiful custom designs
        </h2>
        <div className="about__copy-container">
          <p className="about__copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="about__copy">
            Vel turpis nunc eget lorem dolor sed. Tincidunt vitae semper quis
            lectus nulla at. At augue eget arcu dictum varius duis at
            consectetur. Porttitor rhoncus dolor purus non enim. Morbi enim nunc
            faucibus a pellentesque sit. In fermentum posuere urna nec tincidunt
            praesent semper. Vulputate ut pharetra sit amet. Amet risus nullam
            eget felis eget. Donec massa sapien faucibus et molestie ac. Tempor
            id eu nisl nunc mi. Velit scelerisque in dictum non consectetur a
            erat nam at. Volutpat blandit aliquam etiam erat velit scelerisque.
            At imperdiet dui accumsan sit amet.
          </p>
        </div>
        <div className="about__hero-img--container">
          <img
            className="about__hero-img"
            src={potteryWheel}
            alt="pottery wheel"
          ></img>
          <img
            className="about__hero-img"
            src={potteryJugWhite}
            alt="white jug"
          ></img>
        </div>
      </div>
    </section>
  );
}
