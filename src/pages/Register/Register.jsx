import { useRef } from "react";

import Navbar from "../../components/Navbar";

import "./register.scss";

export default function Register() {
  const emailRef = useRef()

  const handleSubmit = (ev) => {
    ev.preventDefault()
    console.log(emailRef.current.value)
  }

  return (
    <div className="register">
      <div className="nav">
        <Navbar logoBtn />
      </div>

      <img src="https://unsplash.it/900/500" alt="Featured" />

      <div className="body">
        <h1>Unlimited movies, TV shows and more.</h1>
        <p className="sub">Watch anywhere. Cancel anytime.</p>
        <p>Ready to start? Enter your create to restart your membership.</p>

        <form onSubmit={ev => handleSubmit(ev)}>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="example@mail.com"
            ref={emailRef}
          />
          <button type="submit">Get Started</button>
        </form>
      </div>
    </div>
  );
}