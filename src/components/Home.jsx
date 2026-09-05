import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const phrases = ["Look who it is!", "Howdy! I'm Angel"];

export default function Home() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const speed = !isDeleting && text === currentPhrase ? 3000 : isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text === currentPhrase) {
          setIsDeleting(true);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section className="home section reveal fadeInDown" id="home">
      <div className="home-left">
        <h2>
          <span className="typewriter-text">
            {text}
            <span className="cursor">|</span>
          </span>
        </h2>
        <p>
          I’m an IT graduate who’s been learning, creating through coding
          projects and designing. This portfolio is a glimpse of my journey the
          skills I’ve grown, the projects I’ve built, and the passion I’m
          carrying forward.
        </p>
        <div className="home-buttons">
          <Link to="/projects" className="btn-project primary">
            View My Work
          </Link>
          <a href="#contact" className="btn-contact primary">
            Get In Touch
          </a>
        </div>
      </div>
      <div className="home-right"></div>
    </section>
  );
}