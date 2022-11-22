import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"></MdOutlineEmail>
            <h4>Email</h4>
            <h5>mehedihasanhimel89@gmail.com</h5>
            <a href="mailto:mehedihasanhimel89@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"></RiMessengerLine>
            <h4>Messenger</h4>
            <h5>Mehedi Hasan Himel</h5>
            <a href="https://m.me/mehedihasanhimel.jsx" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"></BsWhatsapp>
            <h4>Whatsapp</h4>
            <h5>+8801312778360</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+8801312778360"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End Contact Option */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Massage
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
