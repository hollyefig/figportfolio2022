import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

export default function Contact({ contactRef, contactVisible }) {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_75jf4jp",
        "template_5f99jem",
        formRef.current,
        "f4mH3ii4UC4w8vsjz"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='contactWrapper scrollSnap'>
      <div
        className={`contactContent ${contactVisible ? "contactAppear" : null}`}
        ref={contactRef}
      >
        <div className='contactTitle elsie seablue'>
          <h1>Contact</h1>
        </div>
        <div className='contactCopy'>
          <div className='contactLeft'>
            <div className='contactBlurb'>
              <h3>Questions? Interested in more?</h3>
              Fill out your information in the form, or use the following -
            </div>
            <div className='contactButtons'>
              <div className='contactEmail'>
                <a href='mailto:hollyefig@gmail.com'>
                  <span class='material-symbols-outlined'>mail</span>
                  <p>Email</p>
                </a>
              </div>
              <div className='contactLinkedin'>
                <a
                  href='http://www.linkedin.com/pub/holly-figenshu/66/651/581'
                  target='_blank'
                >
                  <span class='material-symbols-outlined'>contact_page</span>
                  <p>LinkedIn</p>
                </a>
              </div>
            </div>
          </div>
          <div className='contactRight'>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className='contactInputs'>
                <input
                  type='text'
                  name='name'
                  value={name}
                  placeholder='Name'
                  id='name'
                  onChange={(e) => setName(e.target.value)}
                />
                <span className='nameBorder'></span>

                <input
                  type='email'
                  name='email'
                  value={email}
                  placeholder='Email'
                  id='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className='emailBorder'></span>

                <input
                  type='text'
                  name='subject'
                  value={subject}
                  placeholder='Subject'
                  id='subject'
                  onChange={(e) => setSubject(e.target.value)}
                />
                <span className='subjectBorder'></span>
              </div>

              <div className='contactTextareaSubmit'>
                <textarea
                  name='message'
                  placeholder='Message'
                  id='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <span className='messageBorder'></span>

                <button
                  className={`contactSubmit ${
                    name === "" ||
                    email === "" ||
                    subject === "" ||
                    message === ""
                      ? "buttonDisabled"
                      : null
                  }`}
                  disabled={
                    name === "" ||
                    email === "" ||
                    subject === "" ||
                    message === ""
                      ? true
                      : false
                  }
                >
                  Submit
                </button>
                <div className='formMessage'>
                  {done && "Your message has been sent. Thank you!"}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
