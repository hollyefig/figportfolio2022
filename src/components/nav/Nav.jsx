import React, { useState } from "react";
import "./nav.css";

export default function Nav({
  workVisible,
  aboutVisible,
  contactVisible,
  workRef,
  aboutRef,
  contactRef,
}) {
  // scroll to sections
  const clickWork = () => {
    workRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const clickAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const clickContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`navWrapper`}>
      {/* desktop nav  */}
      <div className={`navLinks `}>
        <div
          className={`navWork ${workVisible ? "navCurrent" : null}  
          `}
          onClick={clickWork}
        >
          <span className='navTextLink'>Work</span>
        </div>
        <div
          className={`navAbout ${aboutVisible ? "navCurrent" : null}`}
          onClick={clickAbout}
        >
          <span className='navTextLink'>About</span>
        </div>
        <div
          className={`navContact ${contactVisible ? "navCurrent" : null}`}
          onClick={clickContact}
        >
          <span className='navTextLink'>Contact</span>
        </div>
      </div>
    </div>
  );
}
