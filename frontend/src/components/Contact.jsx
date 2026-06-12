import { useState } from 'react';

function Contact() {
  const [thankYou, setThankYou] = useState('');
  const [showMsg, setShowMsg] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch('https://formspree.io/f/xaqovkjy', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      setThankYou('💚💚💚Thank you! Your message has been sent.💚💚💚');
      setShowMsg(true);
      form.reset();
      setTimeout(() => setShowMsg(false), 5000);
    } catch {
      setThankYou('❌❌❌Oops! Something went wrong.❌❌❌');
      setShowMsg(true);
    }
  };

  return (
    <section id="Contact">
      <h1>Contact Me!</h1>
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="input-row">
          <div className="enterInfo">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="enterInfo">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
        </div>
        <div id="message">
          <label htmlFor="notes">Message</label>
          <textarea
            id="notes"
            rows="5"
            cols="40"
            placeholder="Your message..."
            name="notes"
            required
          />
        </div>
        <button type="submit">Send Message &#8594;</button>
      </form>
      <p id="thankYouMsg" className={showMsg ? 'show' : ''}>{thankYou}</p>
      <div id="contentInfo">
        <div id="infoBlock">
          <ul>
            <li><a href="https://github.com/gjromero6906">🐙 GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/guadalupe-romero6906/">💼 LinkedIn</a></li>
            <li><a href="mailto:gjr6906@gmail.com">✉️ Email</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
