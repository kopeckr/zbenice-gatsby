import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
      )
      .then(() => {
        setName('');
        setEmail('');
        setMessage('');
      });
  };

  return (
    <>
      <div className="contact-container">
        <h2>Kontaktní formulář</h2>
        <form className="contact__form" onSubmit={sendEmail}>
          <label htmlFor="name" className="contact__form--label">
            Jméno a příjmení
            <input
              type="text"
              name="user_name"
              id="name"
              className="contact__form--input"
              required
              placeholder="Zadejte jméno a příjmení..."
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              placeholder="Zadejte e-mailovou adresu..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              placeholder="Napište vaši zprávu..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
