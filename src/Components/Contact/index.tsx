import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact fade-in">
      <h2>Let's Work Together</h2>
      <p className="contact-subtext">
        Ready to bring your next project to life? Let’s discuss how my expertise
        in Frontend development can help achieve your goals.
      </p>

      <div className="contact-container">


        <div className="contact-info">

          <div className="info-card">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>timiolamide1@email.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhone />
            <div>
              <h4>Phone</h4>
              <p>+234 903 624 4262</p>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <p>Available for Remote Work</p>
            </div>
          </div>

        </div>
        

        <div className="contact-form">

         <h3>Send a Message</h3>

         <form>
           <div className="form-row">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
           </div>
      
         <input type="text" placeholder="Subject" />

         <textarea placeholder="Your Message"></textarea>

         <button type="submit" className="send-btn">
           <FaPaperPlane /> Send Message
         </button>
          </form> 

         

      </div>


        </div>

    </section>
  );
};

export default Contact;