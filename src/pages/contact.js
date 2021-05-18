import React from "react";

const Contact = () => {
  return (
    <div>
      <main className="container ">
        <div className="contactForm">
          <section className="row">
            <h1 className="col-md-8 font-weight-bold border-bottom border-dark">
              Contact
            </h1>
          </section>
          <p>
            Please contact me at: <i className="strong">ejsmithwork@gmail.com</i>
          </p>
          {/*  
          <section>
            <form
              className="row"
              method="post"
              action="mailto:ejsmithwork@gmail.com"
            >
             
              <section className="col-md-4 form-group nameField ">
                <label for="name">Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Name"
                />
              </section>
              {/* <!-- email field --> 
              <section className="col-md-4 form-group emailField ">
                <label for="email">Email</label>
                <input
                  name="email"
                  type="text"
                  className="form-control"
                  id="inputEmail"
                  placeholder="email@email.com"
                />
              </section>
              {/* <!-- message field  --> 
              <section className="col-md-8 form-group textField">
                <label for="message">Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  rows="4"
                ></textarea>
              </section>
              {/* <!-- submit button, gray background, white text --> 
              <section className="col-md-8">
                <input
                  className="bg-secondary text-white"
                  type="submit"
                  value="Submit"
                />
              </section>
            </form>
          </section>
          */}
        </div>
      </main>
    </div>
  );
};

export default Contact;
