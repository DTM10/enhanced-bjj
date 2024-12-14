import OutlinedButton from '../../components/OutlinedButton/OutlinedButton';
import styles from './Contact.module.scss';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Modal from '../../components/Modal/Modal';
import logo from '../../assets/logo.webp';
import { FaPaperPlane } from 'react-icons/fa';
// import { Helmet } from 'react-helmet';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const form = useRef();

  const ButtonContent = () => {
    return (
      <p className={styles['button-content']}>
        <span>
          <FaPaperPlane />
        </span>
        Send
      </p>
    );
  };

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  const ModalContent = () => {
    return (
      <div className={styles['modal-content']}>
        <div className={styles['modal-content-container']}>
          <img src={logo} alt="logo" className={styles['modal-logo']} />
          <p className={styles['modal-title']}>Message sent successfully!</p>
          <p className={styles['modal-text']}>We will be in touch soon.</p>
        </div>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    // console.log('variables are:', { name, email, message });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setShowModal(true);
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <section className={styles['contact']}>
      {showModal && (
        <Modal>
          <ModalContent />
        </Modal>
      )}
      <div className={styles['contact-container']}>
        <form className={styles['contact-form']} ref={form}>
          <h2>Contact Us</h2>
          <div className={styles['user-info']}>
            <label>
              Name:
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="from_name"
                id="from_name"
                required
              />
            </label>
            <label>
              email:
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="reply_to"
                id="reply_to"
                required
              />
            </label>
          </div>
          <label className={styles['text-area']}>
            Message
            <textarea
              placeholder="Name"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              id="message"
              required
            />
          </label>
          <div className={styles['button-container']}>
            <OutlinedButton onClick={handleSubmit}>
              <ButtonContent />
            </OutlinedButton>
          </div>
        </form>
      </div>
    </section>
  );
}
