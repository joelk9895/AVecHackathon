import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { gsap } from "gsap";

function App() {
  const handleAvec = () => {
    alert("Registration will open soon! Until then chant AV is Sexy");
  };
  useEffect(() => {
    gsap.fromTo(
      ".blob",
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
        delay: 1.5,
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      ".title-holder",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
        delay: 0,
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      ".body p",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 1,
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      ".avec",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
        delay: 2.5,
      }
    );
  }, []);
  return (
    <div className="body">
      <div className="title-holder">
        <h1 id="under">
          AVenger Assemble Hackathon <div className="blob"></div>
          <div className="blob blobin1"></div>
          <div className="blob blobin2"></div>
          <div className="blob blobin3"></div>
        </h1>
        <h1 id="over">AVenger Assemble Hackathon</h1>
      </div>
      <p>
        The ultimate battle commences! Participants will embark on a 24-hour
        coding and problem-solving marathon, channeling their inner AVenger
        spirit, engineering impressive solutions, and showcasing their talents
        at the hackathon's conclusion.
      </p>
      <button className="avec" onClick={handleAvec}>
        Register
      </button>
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
      <div className="blob blob4"></div>
    </div>
  );
}

export default App;
