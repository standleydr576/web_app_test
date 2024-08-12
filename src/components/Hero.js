import React from "react";

const Hero = () => (
  <section className="hero">
    <div className="hero__box">
      <div className="hero__box-main">
        <div className="hero__logo">
          <a href="#3" className="hero__logo-link" rel="noreferrer">
            <span className="hero__logo-note hero__logo-note--b">Logo</span>
            <span className="hero__logo-note hero__logo-note--m">Mark</span>
          </a>
        </div>
        <h2 className="hero__title">
        Design a distinctive, professional logo for your business.
        </h2>
        <div className="hero__note">
        Jumpstart your brand with business card designs, social media graphics, app icons, letterheads, and more.
        </div>
        <div className="hero__action">
          <a
            className="hero__action-btn ui-btn ui-btn--size-normal ui-btn--theme-primary ui-btn--skin-normal"
            href="/cretlogo.html"
            target="_blank"
            tabindex="0"
            rel="noreferrer"
          >
            <span className="ui-btn__box" tabindex="-1">
              Design my logo
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
