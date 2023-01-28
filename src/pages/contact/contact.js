import React, { Component } from "react";
import "./contact.css";

class ContactUs extends Component {
  render() {
    return (
      <div className="form-container">

        <div className="contact-heading">
          <h2>Contact us</h2>
        </div>
        
        <div className="form-row">
          <div className="form-column">
            <input
              type="text"
              placeholder="First Name"
              className="form-input"
            />
          </div>
          <div className="form-column">
            <input type="text" placeholder="Last Name" className="form-input" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-column">
            <input type="email" placeholder="Email" className="form-input" />
          </div>
          <div className="form-column">
            <input type="text" placeholder="Subject" className="form-input" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-column1">
            <textarea
              placeholder="Message"
              className="form-textarea-m"
            ></textarea>
           
          </div>
          
        </div>
       

        <div className="form-rowb">
        <div className="max">
          <p>Maximum characters 5000</p>
          </div>
          <div className="form-columnb">
            <button className="form-about-submit-btn">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
