import React from "react";
import "./Contact.css";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";
import emailjs from 'emailjs-com';

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('email-pf', 'template_4ip5xbb', e.target, 'user_G6kIK18Nlp28DlBTQ6nTD')
      .then((res) => {
          console.log(res);
      }, (err) => {
          console.log(err);
      });
  }
  return (
    <>
      <section className="contact">
        <div className="left-contact">
          <div className="myinfo">
            <div className="info">
              
              <MailIcon /> <span> mr.singhaksh@gmailcom </span>
            </div>
            <div className="info">
             
              <PhoneIcon /> <span>+91 6394636465</span>
            </div>
            <div className="info">
              
              <HomeIcon /> <span>Olandganj Jaunpur 222002</span>
            </div>
          </div>
        </div>
        <div className="right-contact">
          <form className="your-info" onSubmit={sendEmail}>
            <img
              src="assets/images/message.svg"
              alt=""
              srcset=""
              className="message-img"
            />

            <input
              type="text"
              name="name"
              className="name"
              placeholder="Name"
              autoComplete="off"
            />
            <input
              type="text"
              name="user-email"
              className="mail"
              placeholder="Email"
              autoComplete="off"
            />
            <input
              type="number"
              name="number"
              className="phone"
              placeholder="Mobile Number"
              autoComplete="off"
            />

            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              name="message"
              className="massage"
              placeholder="Message"
              autoComplete="off"
            ></textarea>
            <button type="submit" className="submit" value="send">
              send
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
