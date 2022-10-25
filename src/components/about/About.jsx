import React, { useState, useEffect } from "react";
import "./about.css";
import portrait from "../../imageAssets/portrait.PNG";
import AboutStatsDesktop from "./AboutStatsDesktop";
import AboutStatsMobile from "./AboutStatsMobile";
import resume from "../../imageAssets/resume.pdf";

export default function About({ aboutRef, aboutVisible }) {
  // determine window width for mobile resize
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // resize radius, other
  const [radius, setRadius] = useState(70);
  const [circleMobile, setCircleMobile] = useState(160);
  const [cxcy, setCxcy] = useState(80);
  const windowWidth = windowDimensions.width;

  if (windowWidth <= 1024) {
    setTimeout(() => {
      setRadius(40);
      setCircleMobile("inherit");
      setCxcy(50);
    }, 50);
  } else {
    setTimeout(() => {
      setRadius(70);
      setCircleMobile(160);
      setCxcy(80);
    }, 50);
  }

  return (
    <div className='aboutWrapper scrollSnap'>
      <div
        className={`aboutContent ${aboutVisible ? "aboutFadeIn" : null}`}
        ref={aboutRef}
      >
        <div className='aboutCopy'>
          <div className='aboutLeft'>
            <div className='aboutImgWrapper'>
              <div className='aboutTitle elsie'>
                <h1>About</h1>
              </div>
              <img src={portrait} className='portrait' />
            </div>
            <div className='aboutButtonBlurb'>
              <div className='buttonWrapper'>
                <a href={resume} target='_blank'>
                  <button className='resumeButton'>View Resume PDF</button>
                </a>
              </div>
              <div className='aboutInfo'>
                My name is Holly Figenshu, I have taken a great liking to both
                web building and website designing. I also have a deep love for
                illustration.
              </div>
            </div>
          </div>

          <div className='aboutRight'>
            <AboutStatsDesktop
              radius={radius}
              circleMobile={circleMobile}
              cxcy={cxcy}
              aboutVisible={aboutVisible}
            />
            <AboutStatsMobile
              radius={radius}
              circleMobile={circleMobile}
              cxcy={cxcy}
              aboutVisible={aboutVisible}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
