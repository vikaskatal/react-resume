import React from "react";
import styled from "styled-components";
import WorkItem from "./WorkItem/WorkItem";
import Container from "../../../elements/Container";
import { BreakPoints } from "../../../constants";

const StyledWorkList = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  h3 {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 35px;
    letter-spacing: 1px;
  }
  .items {
    display: block;
    max-width: 790px;
  }
  @media (min-width: ${BreakPoints.small}px) {
    padding-top: 70px;
    padding-bottom: 70px;
    .items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 45px 122px;
    }
  }
`;

const WorkList = ({ list }) => {
  return (
    <StyledWorkList>
      <Container>
        <h3>Projects</h3>
        <div className="items">
          {list.length > 0 &&
            list.map((item, index) => (
              <WorkItem key={`workEle${index}`} item={item} />
            ))}
        </div>
      </Container>
    </StyledWorkList>
  );
};

export default WorkList;
