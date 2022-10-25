import React, { useEffect, useState, useRef } from "react";
import Header from "./components/header/Header";
import Work from "./components/work/Work";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";

import Contact from "./components/contact/Contact";

function App() {
  const workRef = useRef(null);
  const [workVisible, setWorkVisible] = useState(false);

  const aboutRef = useRef(null);
  const [aboutVisible, setAboutVisible] = useState(false);

  const contactRef = useRef(null);
  const [contactVisible, setContactVisible] = useState(false);

  const callBackFunc = (ent) => {
    setWorkVisible(ent[0].isIntersecting);
  };

  const callBackFuncTwo = (ent) => {
    setAboutVisible(ent[0].isIntersecting);
    setContactVisible(ent[1].isIntersecting);
    // console.log("about intersect", ent[0].isIntersecting);
    // console.log("contact intersect", ent[1].isIntersecting);
    // tracks status
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  };

  const optionsTwo = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunc, options);
    if (workRef.current) observer.observe(workRef.current);

    const observerTwo = new IntersectionObserver(callBackFuncTwo, optionsTwo);
    if (aboutRef.current) observerTwo.observe(aboutRef.current);
    if (contactRef.current) observerTwo.observe(contactRef.current);

    return () => {
      if (workRef.current) observer.unobserve(workRef.current);
      if (aboutRef.current) observerTwo.unobserve(aboutRef.current);
      if (contactRef.current) observerTwo.unobserve(contactRef.current);
    };
  }, [workRef, aboutRef, contactRef, options]);

  return (
    <div className='App'>
      <Nav
        workVisible={workVisible}
        aboutVisible={aboutVisible}
        contactVisible={contactVisible}
        workRef={workRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <div className='sections'>
        <Header />
        <Work workRef={workRef} workVisible={workVisible} />
        <About aboutRef={aboutRef} aboutVisible={aboutVisible} />
        <Contact contactRef={contactRef} contactVisible={contactVisible} />
      </div>
    </div>
  );
}

export default App;
