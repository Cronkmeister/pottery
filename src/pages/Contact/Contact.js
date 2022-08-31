import React from "react";
import "./Contact.scss";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__wrapper">
        <h1 className="contact__title">Contact</h1>
        <div className="contact__info-container">
          <div className="contact__sub-container">
            <p className="contact__bold-copy">I'd love to hear from you</p>
            <p className="contact__copy">
              Please reach me at customerservice@rockystudios.com
            </p>
            <p className="contact__bold-copy">Drop by my studio:</p>
            <p className="contact__copy">
              2233 Artsy Avenue <br></br>Vancouver<br></br>BC<br></br>V6Y 9PW
            </p>
            <h4 className="contact__bold-copy">
              Our leave me a message and I'll get back to you as soon as I can
            </h4>
          </div>
          <form className="contact__form">
            <div>
              <input
                className="contact__form--name"
                placeholder="Your name"
              ></input>
              <input
                className="contact__form--email"
                placeholder="Your email"
              ></input>
            </div>
            <input
              className="contact__form--phone"
              placeholder="Your phone (optional)"
            ></input>
            <input
              className="contact__form--message"
              placeholder="Your message"
            ></input>
          </form>
        </div>
      </div>
    </section>
  );
}
