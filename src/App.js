import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import splashGif from "./assets/gifs/no-routine-wall.gif";

function SiteHeader() {
  return (
    <header className="site-header">
      <Link to="/" className="site-logo-link">
        <p>NO ROUTINE</p>
        <p>NYC</p>
      </Link>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link
        to="https://www.instagram.com/noroutinenyc/"
        target="_blank"
        rel="noreferrer"
      >
        INSTAGRAM
      </Link>
      <Link to="mailto:hello@noroutine.nyc" target="_blank" rel="noreferrer">
        WORK WITH US
      </Link>
    </footer>
  );
}

function SplashPage() {
  return (
    <main className="splash-page">
      <SiteHeader />

      <section className="splash-center">
        <Link to="/about" className="splash-image-link">
          <img src={splashGif} alt="No Routine NYC" className="splash-image" />
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}

function AboutPage() {
  return (
    <main className="about-page">
      <SiteHeader />

      <section className="about-content">
        <h1>about</h1>

        <p>
          NO ROUTINE is a New York based global community
          <br />
          built around play, movement and real-world connection
        </p>

        <a href="mailto:hello@noroutine.nyc">hello@noroutine.nyc</a>
      </section>

      <SiteFooter />
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
