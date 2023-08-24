import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";



function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wmblofu",
        "template_fn5pf0l",
        form.current,
        "G8Hlr2zdNdDizyDKT"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Thank you. Message has been sent! James will be in touch soon :)"); // Display an alert window
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <div className="container">
        <span>
          {" "}
          <h1>CONTACT</h1>
        </span>
        <div className="container-1">


</div> 


        <div className="container-1">
          <section>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="--form-control--crad"
            >
              <input
                type="text"
                placeholder="Full name"
                name="user_name"
                required
              />
              <input
                type="text"
                placeholder="Email"
                name="user_email"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                name="user_subject"
                required
              />

              <textarea
                className="text-area-form"
                name="message"
                placeholder="Messages"
                cols="30"
                rows="10"
              ></textarea>

              <button className="button-contactForm" type="submit">
                Send massages
              </button>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Contact;
