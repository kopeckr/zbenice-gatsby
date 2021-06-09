import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [popupMessage, setPopUpMessage] = useState(null);

  const showPopUp = (message, hideTimeOut) => {
    setPopUpMessage(message);

    if (hideTimeOut !== null && hideTimeOut !== undefined) {
      setTimeout(() => {
        setPopUpMessage(null);
      }, hideTimeOut);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    showPopUp('Odesilám zprávu...');

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
          showPopUp('Zpráva byla úspěšně odeslána.', 3000);

          
        },
        (error) => {
          console.log(error.text);
          showPopUp('Zprávu se nepodařilo odeslat.', 3000);
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
        <div className={popupMessage === null ? 'message__box' : 'message__box active'}>
          {popupMessage}&nbsp;
        </div>
        <h2>Kontaktní formulář</h2>
        <form className="contact__form" onSubmit={sendEmail}>
          <label htmlFor="name" className="contact__form--label">
            Jméno a přijmení
            <input
              type="text"
              name="user_name"
              id="name"
              className="contact__form--input"
              required
              placeholder="Napište jméno a příjmení..."
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
              placeholder="Napište emailovou adresu..."
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
