import React, { useEffect, useState } from "react";

import "../styles/layouts/header.scss";

import notification from "../assets/img/notification.svg";
import minioncoin from "../assets/img/minioncoin.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`header ${isScrolled} ? 'is-sticky' : ''`}>
      <nav className="header__nav">
        <div className="nav-item logo">
          <a href="/">
            Minion <span className="specialize">P</span>laza
          </a>
        </div>
        <div className="nav-list">
          <div className="nav-item button">
            <a href="/create">Create</a>
          </div>
          <div className="nav-item button">
            <a href="/collect">Collect</a>
          </div>
        </div>
      </nav>
      <div className="header__search">
        <input type="text" placeholder="Search by creator or collection" />
      </div>
      <div className="header__action">
        <div className="action-item notification">
          <img src={notification} loading="lazy" />
        </div>
        <div className="action-item balance">
          <img src={minioncoin} loading="lazy" />
          <span>0 MNC</span>
        </div>
        <div className="action-item connect">Connect</div>
      </div>
    </header>
  );
}
