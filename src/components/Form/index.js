import React from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_test',
        'template_up8mf4v',
        e.target,
        'user_FOX4Z3T8BvsoSsNBwxtcA',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <>
      <div className="contact-container">
        <h2>Kontaktní formulář</h2>
        <form className="contact__form" onSubmit={sendEmail}>
          <label htmlFor="name" className="contact__form--label">
            Jméno a přijmení
            <input
              autoFocus
              type="text"
              name="user_name"
              id="name"
              className="contact__form--input"
              required
              placeholder="Napište jméno a příjmení..."
            />
          </label>

          <label htmlFor="email" className="contact__form--label">
            E-mail
            <input
              type="email"
              name="user_email"
              id="email"
              className="contact__form--input"
              required
              placeholder="Napiště adres email..."
            />
          </label>

          <label htmlFor="subject" className="contact__form--label">
            Vaše zpráva
            <textarea
              name="message"
              id="subject"
              rows="8"
              cols="50"
              className="contact__form--input"
              required
              placeholder="Napiště vaši zprávu..."
            />
          </label>
          <button type="submit" className="cta">
            Odeslat zprávu
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
