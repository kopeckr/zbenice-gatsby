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

  return (
    <>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
    </form>
    </>
  );
}

export default Form;