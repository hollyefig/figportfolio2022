import React, { useState, useEffect } from "react";
import "./header.css";
import signature from "../../imageAssets/signature.png";

export default function Header() {
  // parallax scrolling
  const [offSet, setOffset] = useState(0);

  const handleScroll = () => {
    setOffset(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='headerWrapper scrollSnap'>
      <div
        className='sparkles'
        style={{ transform: `translateY(${offSet * -0.2}px)` }}
      ></div>
      <div className='headerTop'>
        <div className='headerLeft'>
          <div className='headerCopyWrapper'>
            <img src={signature} className='signature' />
            <div className='headerInfo'>
              Web Developer &nbsp; | &nbsp; Web Designer &nbsp; | &nbsp;
              Illustration
            </div>
          </div>
        </div>
        <div className='headerRight'></div>
      </div>
      <div className='headerBottom'></div>
    </div>
  );
}
