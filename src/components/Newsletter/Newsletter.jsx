import './Newsletter.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import ErrorIcon from '../../images/icon-error.svg';

export default function Newsletter() {
  const [number, setNumber] = useState(35000);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const id = setInterval(() => {
      setNumber((prev) => Math.max(0, prev - 175));
    }, 100);
    const stop = setTimeout(() => {
      clearInterval(id);
    }, 20000);
    return () => {
      clearInterval(id);
      clearTimeout(stop);
    };
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (email === '') {
      setError('Whoops, the email is empty');
    } else if (!email.includes('@')) {
      setError("Whoops, make sure it's an email");
    } else {
      setError('');
      setEmail('');
    }
  }

  return (
    <section className="newsletter">
      <p className="newsletter__number">
        {number.toLocaleString('en-US')}+ already joined
      </p>
      <h2 className="newsletter__title">
        Stay up-to-date with what we're doing
      </h2>
      <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
        <div className={error ? 'newsletter__box newsletter__box--error' : 'newsletter__box'}>
          <input
            className="newsletter__input"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <ErrorIcon className="newsletter__icon" />}
          {error && <p className="newsletter__error">{error}</p>}
        </div>
        <button className="newsletter__button" type="submit">
          Contact Us
        </button>
      </form>
    </section>
  );
}
