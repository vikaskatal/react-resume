import React from "react";
import styled from "styled-components";
import { ReactComponent as IconArrow } from "../../../../assets/images/arrow.svg";
import { Link } from "react-router-dom";
import { BreakPoints } from "../../../../constants";

const StyledWorkItem = styled.a`
  display: block;
  font-size: 28px;
  text-decoration: none;
  position: relative;
  padding-right: 30px;

  .arr {
    position: absolute;
    right: 0;
    top: 7px;
    opacity: 1;
    transition: opacity 0.25s ease;
  }
  &:hover .arr {
    opacity: 1;
  }
  @media (min-width: ${BreakPoints.small}px) {
    .arr {
      opacity: 0;
      top: 17px;
    }
  }
  @media (max-width: ${BreakPoints.small - 1}px) {
    & + & {
      margin-top: 40px;
    }
  }
`;

const StyledTitle = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.6;
  color: var(--color-white);
  span {
    display: block;
    font-weight: 400;
    font-size: 14px;
  }
  @media (min-width: ${BreakPoints.small}px) {
    font-size: 32px;
  }
`;

const WorkItem = ({ item: { id, name, tag } }) => {
  return (
    <Link to={`work/${id}`} component={StyledWorkItem}>
      <StyledTitle>
        {" "}
        {name} <span> {tag} </span>{" "}
      </StyledTitle>
      <span className="arr">
        <IconArrow />
      </span>
    </Link>
  );
};

export default WorkItem;
