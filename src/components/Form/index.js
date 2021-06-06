import React from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_test', 'template_up8mf4v', e.target, 'user_FOX4Z3T8BvsoSsNBwxtcA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
      <h2>Kontaktní formulář</h2>
      <form className="contact__form" onSubmit={sendEmail}>
        <input type="hidden" name="contact__number" />
        <label htmlFor="name" className="contact__form--label">Jméno a přijmení
        <input type="text" name="user__name" id="name" className="contact__form--input"/>
        </label>
        
        <label htmlFor="email" className="contact__form--label">E-mail
        <input type="email" name="user__email" id="email" className="contact__form--input"/>
        </label>
      
        <label htmlFor="subject" className="contact__form--label">Vaše zpráva
        <textarea name="message" id="subject" rows="8" cols="50" className="contact__form--input"/>
        </label>
        <input type="submit" aria-label="Odeslat zprávu" className="cta" value="Odeslat zprávu" />
    </form>
    </>
  );
}

export default Form;