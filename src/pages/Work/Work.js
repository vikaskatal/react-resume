import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { ReactComponent as IconBack } from "../../assets/images/arrow-back.svg";
import { ReactComponent as IconTop } from "../../assets/images/arrow-top.svg";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { workList } from "../../constants";
import LazyImage from "../../components/LazyImage/LazyImage";
import placeholderImage from "../../assets/images/placeholder_image.png";

const Work = () => {
  const params = useParams();
  const [workItem, setWorkItem] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (params.id) {
      workList.forEach((item) => {
        if (item.id === parseInt(params.id)) {
          setWorkItem(item);

          var r = document.querySelector(":root");
          if (item.color?.code) {
            r.style.setProperty("--color-work", item.color.code);
          } else {
            r.style.setProperty("--color-work", "#1b1d20");
          }
        }
      });
    }
  }, [params.id]);

  return (
    <>
      <Helmet>
        <title> {workItem ? workItem.name : "Work"} </title>
        <meta name="description" content="" />
      </Helmet>
      {workItem && (
        <div
          className={classNames({
            "theme-light": workItem.color?.theme === "light",
          })}
        >
          <div className="work-head">
            <div className="my-container">
              <Link to="/" className="back-btn">
                <IconBack />
                <span> Home </span>
              </Link>

              <div className="work-head__title">
                <h1>{workItem.name}</h1>
                <p>{workItem.description}</p>
              </div>
            </div>
          </div>
          {/* heading */}

          <div className="work-content">
            <div className="my-container">
              <div className="wc__item">
                <div className="wc__title">
                  <h3>About Project</h3>
                </div>
                {workItem.about ? (
                  <>
                    {workItem.about.map((ab, index) => (
                      <p className="wc__info" key={"ab" + index}>
                        {ab}
                      </p>
                    ))}
                  </>
                ) : (
                  <p className="wc__info">
                    {" "}
                    <i>This section is not updated</i>
                  </p>
                )}
              </div>
              {/* About */}

              <div className="wc__item">
                <div className="wc__title">
                  <h3>Technologies Used</h3>
                  <p>
                    Code technologies I got involved with while working on this
                    project
                  </p>
                </div>

                {workItem.technologies ? (
                  <ul className="wc__info reset-ul">
                    {workItem.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="wc__info">
                    {" "}
                    <i>This section is not updated</i>{" "}
                  </p>
                )}
              </div>
              {/* Technologies */}
            </div>
          </div>
          {/* Content */}

          {workItem.images?.length > 1 && (
            <div className="scroll-info">
              <p>Scroll to see more.</p>
            </div>
          )}

          {workItem.images?.length > 0 && (
            <div className="horizontal-images-wrapper">
              <div className="horizontal-images">
                {workItem.images.map(({ url, label }, index) => (
                  <div key={"hs_" + index}>
                    <LazyImage
                      url={url}
                      alt={label}
                      placeholder={placeholderImage}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Horizontal Images */}

          <div className="lets-talk text-center">
            <div className="my-container">
              <a className="btn" href="mailto:katal.viku@gmail.com">
                Let's Talk
              </a>
            </div>
          </div>
          {/* Let's Talk Button */}

          <div className="home-btn text-center">
            <div className="my-container">
              <Link to="/">
                <IconTop />
                <span>Home</span>
              </Link>
            </div>
          </div>
          {/* Back to Home Button */}
        </div>
      )}
    </>
  );
};

export default Work;
