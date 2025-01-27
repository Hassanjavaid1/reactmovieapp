import { Link } from "react-router-dom";
import "./CSS/Navbar.css";
import logo from "../Photos/iFlix.jpg";
import './CSS/MediaQueries/MediaNavbar.css'

import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";

export default function Navbar(prps) {
  const [prevScroll, setprevScroll] = useState(0);
  const [visible, setvisible] = useState(true);
  const [toggleMode, setToggleMode] = useState("hidden");

  const HideShow = () => {
    if (toggleMode === "hidden") {
      setToggleMode("visible");
    } else {
      setToggleMode("hidden");
    }
  }

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    setvisible(prevScroll > currentScroll);
    setprevScroll(currentScroll);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScroll, visible]);
  return (
    <>
      <div className={`navbar ${visible ? "" : "sticky"} `}>
        <div id="navbar">
          <GiHamburgerMenu id="burger" onClick={HideShow} />
          <Link className="Link" to="/">
            <div id="iFlix">
              <img src={logo} alt="" id="iFlixlogo" />
              <h1 id="iFlixName">iFlix</h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
