import { useState, useEffect } from 'react';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function useTypewriter(phrases) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!phrases.length) return;
    const current = phrases[index];

    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((index + 1) % phrases.length);
    }
  }, [displayed, deleting, index, phrases]);

  return displayed;
}

function Hero() {
  const [phrases, setPhrases] = useState([]);

  useEffect(() => {
    fetch('/api/titles')
      .then((res) => res.json())
      .then((data) => setPhrases(shuffle(data)))
      .catch(() => setPhrases(['Software Engineer']));
  }, []);

  const typed = useTypewriter(phrases);

  return (
    <section id="Main">
      <h1>Welcome!</h1>
      <h2>Hi, my name is Guadalupe Romero AKA Lupe</h2>
      <p className="typewriter-line">
        <span className="typewriter-prompt">$ </span>
        <span className="typewriter-text">{typed}</span>
        <span className="typewriter-cursor">_</span>
      </p>
      <p>
        I&apos;m a fellow at{' '}
        <a
          href="https://www.marcylabschool.org"
          className="highlight-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Marcy Lab School
        </a>{' '}
        learning to be a upstanding Software Engineer.
      </p>
    </section>
  );
}

export default Hero;
