import React from "react";
import Logo from "./logo.png";
import styles from "./nav.css";
export default function Nav() {
  return (
    <div>
      <nav class="mainNav">
        <div class="mainNav__logo">
          <img className="selfumelogo" src={Logo} alt="logo" />
        </div>
        <div class="mainNav__links">
          <a href="/" class="mainNav__link">
            HOME
          </a>
          <a href="/write" class="mainNav__link">
            Manufacture
          </a>
          <a href="" class="mainNav__link">
            MEMBERS
          </a>
        </div>
        <div class="mainNav__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g data-name="Layer 2" fill="#0 007AE">
              <g data-name="menu-2">
                <rect
                  width="24"
                  height="24"
                  transform="rotate(180 12 12)"
                  opacity="0"
                />
                <circle cx="4" cy="12" r="1" />
                <rect x="7" y="11" width="14" height="2" rx=".94" ry=".94" />
                <rect x="3" y="16" width="18" height="2" rx=".94" ry=".94" />
                <rect x="3" y="6" width="18" height="2" rx=".94" ry=".94" />
              </g>
            </g>
          </svg>
        </div>
      </nav>
    </div>
  );
}
