import emailjs from "@emailjs/browser";
import { FormEvent } from "react";
import "./contact.css";

export interface ContactProps {}

export default function Contact(props: ContactProps) {
  const emailSender = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sb = document.getElementById(
      "contact-submit-btn"
    ) as HTMLInputElement;

    emailjs
      .sendForm(
        "service_m5t0yzx",
        "template_16asja5",
        e.target as HTMLFormElement,
        "eqzek61lX6afLV8e9"
      )
      .then(
        function (response) {
          sb.value = "Sent Successfuly";
          sb.style.backgroundColor = "green";
        },
        function (error) {
          sb.value = "Failed To Send";
          sb.style.backgroundColor = "red";
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <section id="contact" className="contact-container">
      <div className="contact-wrapper">
        <form onSubmit={emailSender}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          ></input>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          ></input>
          <textarea
            name="message"
            placeholder="Write Message Here, Heeey over heeeere"
            required
          />
          <input type="submit" value="Send AirStrike" id="contact-submit-btn" />
        </form>
      </div>
    </section>
  );
}
