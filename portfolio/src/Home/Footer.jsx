import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer--section" id="Footer">
      <div className="footer--container">
        <div className="footer--links">
          <a
            href="https://github.com/Yoseph-Gebeyehu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yoseph-gebeyehu-121b06229/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://t.me/jossy_forgiven"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram />
          </a>
          <a
            href="https://www.facebook.com/jossy.man.7311/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
        <div>
          <hr className="divider" />
          <p>Made by Yoseph Gebeyehu</p>
        </div>
      </div>
    </footer>
  );
}
