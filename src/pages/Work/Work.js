import React, { useEffect, useState } from "react";
import classNames from "classnames";
import styled from "styled-components";

import { ReactComponent as IconBack } from "../../assets/images/arrow-back.svg";
import { ReactComponent as IconTop } from "../../assets/images/arrow-top.svg";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { BreakPoints, workList } from "../../constants";
import LazyImage from "../../components/LazyImage/LazyImage";
import placeholderImage from "../../assets/images/placeholder_image.png";
import Container from "../../elements/Container";

const StyledPageHeader = styled.div`
  background-color: var(--color-work);
  .title {
    padding: 40px 0 20px;
    color: #fff;
    h1 {
      margin: 0;
      font-size: 2.5rem;
    }
    p {
      margin: 5px 0 0;
    }
  }
  .logo {
    position: absolute;
    right: 0;
    bottom: 0;
    opacity: 0.2;
    max-width: 300px;
  }

  @media (min-width: ${BreakPoints.small}px) {
    .title {
      padding: 120px 0 40px;
      h1 {
        font-size: 3rem;
      }
      p {
        margin-top: 10px;
      }
    }
    .logo {
      max-width: 500px;
    }
  }
`;

const StyledTitle = styled.div`
  margin-bottom: 30px;
  h3 {
    font-size: 2.2rem;
    margin: 0;
  }
  p {
    margin: 5px 0 0;
  }
  a {
    text-decoration: none;
    &:hover {
      color: var(--color-work);
    }
  }
`;

const StyledWorkSection = styled.section`
  margin-top: 40px;

  .info {
    opacity: 0.7;
    margin: 0;
  }

  p.info + p.info {
    margin-top: 10px;
  }

  ul.info li + li {
    margin-top: 0.75rem;
  }
  @media (min-width: ${BreakPoints.small}px) {
    margin-top: 60px;
  }
`;

const StyledHorizontalImages = styled.div`
  position: relative;
  &::before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-work);
    opacity: 0.3;
  }
  .images {
    overflow: auto;
    white-space: nowrap;
    display: flex;
    padding: 5px;
    position: relative;
    & > div {
      padding: 5px;
      img {
        height: 40vh;
        width: auto;
      }
    }
  }
  @media (min-width: ${BreakPoints.small}px) {
    .images {
      & > div {
        img {
          height: 60vh;
          background: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
`;

const StyledScrollImages = styled.div`
  p {
    text-align: right;
    padding: 5px 20px;
    font-size: 0.75rem;
    margin: 0;
    letter-spacing: 1px;
  }
`;

const StyledLetsTalk = styled.div`
  padding-top: 40px;
  padding-bottom: 25px;

  .btn {
    color: var(--color-work);
    border-color: var(--color-work);
    &:hover {
      color: var(--color-white);
      background-color: var(--color-work);
    }
  }

  @media (min-width: ${BreakPoints.small}px) {
    padding-top: 120px;
    padding-bottom: 45px;
  }
`;

const StyledFooterHomeBtn = styled.div`
  background-color: var(--color-work);
  padding-top: 30px;
  padding-bottom: 30px;
  a {
    display: inline-block;
    color: var(--color-white);
    font-weight: 600;
    font-size: 14px;
    line-height: 1.6;
    text-decoration: none;
    text-align: center;

    span {
      display: block;
      margin-top: 5px;
    }
  }

  @media (min-width: ${BreakPoints.small}px) {
    padding-top: 42px;
    padding-bottom: 42px;
    a {
      font-size: 16px;
    }
    span {
      margin-top: 12px;
    }
  }
`;

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
          <StyledPageHeader>
            <Container className="position-relative">
              <div className="position-relative">
                <Link to="/" className="back-btn">
                  <IconBack />
                  <span> Home </span>
                </Link>

                <div className="title">
                  <h1>{workItem.name}</h1>
                  <p>{workItem.description}</p>
                </div>
              </div>
              {workItem.logo && (
                <img
                  className="logo"
                  src={workItem.logo}
                  alt={`${workItem.name} Logo`}
                />
              )}
            </Container>
          </StyledPageHeader>
          {/* Header */}

          <Container>
            <StyledWorkSection>
              <StyledTitle>
                <h3>About Project</h3>
              </StyledTitle>

              {workItem.about ? (
                <>
                  {workItem.about.map((ab, index) => (
                    <p className="info" key={"ab" + index}>
                      {" "}
                      {ab}{" "}
                    </p>
                  ))}
                </>
              ) : (
                <p className="info">
                  {" "}
                  <i>This section is not updated</i>{" "}
                </p>
              )}
            </StyledWorkSection>
            {/* About Project*/}

            <StyledWorkSection>
              <StyledTitle>
                <h3>Technologies Used</h3>
                <p>
                  Code technologies I got involved with while working on this
                  project
                </p>
              </StyledTitle>

              {workItem.technologies ? (
                <ul className="info reset-ul">
                  {workItem.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              ) : (
                <p className="info">
                  {" "}
                  <i>This section is not updated</i>{" "}
                </p>
              )}
            </StyledWorkSection>
            {/* Technologies */}
          </Container>

          {workItem.images?.length > 0 && (
            <StyledWorkSection>
              <Container>
                <StyledTitle className="display-flex align-items-center justify-content-between">
                  <div>
                    <h3>Sneak peek</h3>
                    <p>Some shots from the project</p>
                  </div>

                  <div>
                    {workItem.url && (
                      <a href={workItem.url}>Visit website/app</a>
                    )}
                  </div>
                </StyledTitle>
              </Container>

              <StyledHorizontalImages>
                <div className="images">
                  {workItem.images.map(({ url, label }) => (
                    <div key={label}>
                      <LazyImage
                        url={url}
                        alt={label}
                        placeholder={placeholderImage}
                      />
                    </div>
                  ))}
                </div>
              </StyledHorizontalImages>
            </StyledWorkSection>
          )}

          {workItem.images?.length > 1 && (
            <StyledScrollImages>
              <p>Scroll to see more.</p>
            </StyledScrollImages>
          )}
          {/* Horizontal Images */}

          <StyledLetsTalk className="text-center">
            <Container>
              <a className="btn" href="mailto:katal.viku@gmail.com">
                Let's Talk
              </a>
            </Container>
          </StyledLetsTalk>
          {/* Let's Talk Button */}

          <StyledFooterHomeBtn className="text-center">
            <Container>
              <Link to="/">
                <IconTop />
                <span>Home</span>
              </Link>
            </Container>
          </StyledFooterHomeBtn>
          {/* Back to Home Button */}
        </div>
      )}
    </>
  );
};

export default Work;
