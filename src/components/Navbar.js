import { Link } from "react-router-dom";
import "../components/CSS/Navbar.css";
import logo from "../Photos/iFlix.jpg";
import "../components/CSS/MediaNavbar.css";
import { useEffect, useState } from "react";

export default function Navbar(props) {
  const [prevScroll, setprevScroll] = useState(0);
  const [visible, setvisible] = useState(true);
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
          {props.burger}
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
