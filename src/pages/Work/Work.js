import React from "react";
import { ReactComponent as IconBack } from "../../assets/images/arrow-back.svg";
import { ReactComponent as IconTop } from "../../assets/images/arrow-top.svg";
import { Link } from "react-router-dom";

import sec1 from "../../assets/images/sec1.svg";
// import brief from "../../assets/images/brief.png";
// import sec3 from "../../assets/images/sec3.svg";
// import media from "../../assets/images/media.png";
// import cycle from "../../assets/images/cycle.svg";
import { Helmet } from "react-helmet";

const Work = () => {
  return (
    <>
      <Helmet>
        <title>Work | </title>
        <meta name="description" content="" />
      </Helmet>
      <div className="sec-hero">
        <div className="sec-hero__img">
          <div className="my-container">
            <Link to="/" className="back-btn">
              <IconBack />
              <span> Home </span>
            </Link>
          </div>
          <img src={sec1} className="img-fluid" alt="sec 1" />
        </div>
        {/* <div className="my-container my-container--1000">
          <div className="sec-hero__info">
            <div className="sec-hero__title">
              <p>Ecommerce store for a better everyday life</p>
            </div>
            <div className="sec-hero__subtitle">
              <p>How we helped Andso craft a minimal &amp; functional online portal to showcase their products.</p>
            </div>
          </div>
          <ul className="sec-hero__highlights">
            <li><span className="sec-hero__highlights__title">Client</span><span>Andso</span></li>
            <li><span className="sec-hero__highlights__title">Client</span><span>Andso</span></li>
            <li><span className="sec-hero__highlights__title">Client</span><span>Andso</span></li>
            <li><span className="sec-hero__highlights__title">Client</span><span>Andso</span></li>
          </ul>
        </div> */}
      </div>
      {/* <section className="sec-brief">
        <div className="my-container my-container--880">
          <div className="sec-title">
            <h2>The brief</h2>
            <div className="sec-title__sub">
              <p>AND SO is born with a vision of curating contemporary design combined with traditional craftsmanship and making it accessible through their retail and e commerce store.</p>
              <p>The idea was to design a simplified shopping experience for their users by putting products at the forefront of the user journey by designing a minimal experience and interface.</p>
            </div>
          </div>
          <div className="sec-brief__imgs">
            <div><img src={brief} /></div>
            <div><img src={brief} /></div>
            <div><img src={brief} /></div>
          </div>
        </div>
      </section>
      <section className="visual">
        <div className="my-container">
          <div className="sec-title">
            <h2 className="text-center">Visual language</h2>
          </div>
        </div>
        <div className="visual__img">
          <div><img src={sec3} className="img-fluid" /></div>
        </div>
        <div className="my-container my-container--800 visual__content">
          <p>AND SO’s visual language is a reflection of their brand philiosophy which stands for collaboration. A collection of organic shapes with abstract contours coming together to create meaningful forms.</p>
        </div>
      </section>
      <section className="media-type">
        <div className="my-container">
          <ul>
            <li>
              <div>
                <div className="sec-title">
                  <h2>Present wherever you are</h2>
                  <div className="sec-title__sub">
                    <p>AND SO’s visual language is a reflection of their brand philiosophy which stands for collaboration. A collection of organic shapes with abstract contours coming together to create meaningful forms.</p>
                  </div>
                </div>
              </div>
              <div>
                <img src={media} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="visual">
        <div className="my-container">
          <div className="sec-title">
            <h2 className="text-center">Covering the entire customer journey</h2>
          </div>
          <div className="visual__img"><img className="img-fluid" src={cycle} /></div>
        </div>
        <div className="my-container my-container--610 visual__content">
          <p>AND SO’s visual language is a reflection of their brand philiosophy which stands for collaboration. A collection of organic shapes with abstract contours coming together to create meaningful forms.</p>
        </div>
      </section>
      <section className="media-type">
        <div className="my-container">
          <ul>
            <li>
              <div>
                <div className="sec-title">
                  <h2>Present wherever you are</h2>
                  <div className="sec-title__sub">
                    <p>AND SO’s visual language is a reflection of their brand philiosophy which stands for collaboration. A collection of organic shapes with abstract contours coming together to create meaningful forms.</p>
                  </div>
                </div>
              </div>
              <div>
                <img src={media} alt="" />
              </div>
            </li>
            <li>
              <div>
                <div className="sec-title">
                  <h2>Simple order tracking</h2>
                  <div className="sec-title__sub">
                    <p>AND SO’s visual language is a reflection of their brand philiosophy which stands for collaboration. A collection of organic shapes with abstract contours coming together to create meaningful forms.</p>
                  </div>
                </div>
              </div>
              <div>
                <img src={media} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </section> */}
      <div className="lets-talk text-center">
        <div className="my-container">
          <a className="btn" href="mailto:katal.viku@gmail.com">
            Let's Talk
          </a>
        </div>
      </div>
      <div className="home-btn text-center">
        <div className="my-container">
          <Link to="/">
            <IconTop />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Work;
