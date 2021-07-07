import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { WorkList, EMAIL_ADDRESS, WorkPageTheme } from "../../constants";
import PageHeader from "./PageHeader/PageHeader";
import PageFooter from "./PageFooter/PageFooter";
import SneakPeek from "./SneakPeek/SneakPeek";
import Container from "../../elements/Container";
import { StyledLetsTalk } from "./Work.styles";
import { SubTitleContainer, WorkSection, PageText } from "./Work.elements";
const Work = () => {
  const params = useParams();
  const [workItem, setWorkItem] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (params.id) {
      WorkList.forEach((item) => {
        if (item.id === parseInt(params.id)) {
          setWorkItem(item);

          var r = document.querySelector(":root");
          if (item.color?.code) {
            r.style.setProperty("--themed-color-work", item.color.code);
          } else {
            r.style.setProperty("--themed-color-work", "#1b1d20");
          }

          if (item.color?.theme === WorkPageTheme.LIGHT) {
            r.style.setProperty("--themed-font-work", "#1b1d20");
          } else {
            r.style.setProperty("--themed-font-work", "#fff");
          }
        }
      });
    }
  }, [params.id]);

  return (
    <>
      <Helmet>
        <title> {workItem ? workItem.title : "Work"} </title>
        <meta name="description" content="" />
      </Helmet>
      {workItem && (
        <div
          className={classNames({
            "theme-light": workItem.color?.theme === "light",
          })}
        >
          <PageHeader
            title={workItem.title}
            description={workItem.description}
            logo={workItem.logo}
          />

          <Container>
            <WorkSection>
              <SubTitleContainer>
                <h3>About Project</h3>
                <p>Little bit information about the project</p>
              </SubTitleContainer>

              {workItem.about ? (
                <>
                  {workItem.about.map((ab) => (
                    <PageText key={ab}> {ab} </PageText>
                  ))}
                </>
              ) : (
                <PageText>
                  {" "}
                  <i>This section is not updated</i>{" "}
                </PageText>
              )}
            </WorkSection>

            <WorkSection>
              <SubTitleContainer>
                <h3>Technical Sheet</h3>
                <p>
                  Code technologies I got involved with while working on this
                  project
                </p>
              </SubTitleContainer>

              {workItem.technologies ? (
                <ul className="reset-ul">
                  {workItem.technologies.map((technology) => (
                    <PageText as="li" key={technology}>
                      {technology}
                    </PageText>
                  ))}
                </ul>
              ) : (
                <PageText>
                  {" "}
                  <i>This section is not updated</i>{" "}
                </PageText>
              )}
            </WorkSection>
          </Container>

          <SneakPeek images={workItem.images} url={workItem.url} />

          <StyledLetsTalk className="text-center">
            <Container>
              <a className="btn" href={`mailto:${EMAIL_ADDRESS}`}>
                Let's Talk
              </a>
            </Container>
          </StyledLetsTalk>

          <PageFooter />
        </div>
      )}
    </>
  );
};

export default Work;
