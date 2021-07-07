import styled from "styled-components";
import { BreakPoints } from "../../../constants";

export const ListContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  @media (min-width: ${BreakPoints.small}px) {
    padding-top: 70px;
    padding-bottom: 70px;
  }
`;

export const Title = styled.h3`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 35px;
  letter-spacing: 1px;
`;

export const List = styled.div`
  display: block;
  max-width: 790px;
  @media (min-width: ${BreakPoints.small}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 45px 122px;
  }
`;

export const ListItem = styled.div`
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

export const ProjectTitle = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.6;
  color: #fff;
  span {
    display: block;
    font-weight: 400;
    font-size: 14px;
  }
  @media (min-width: ${BreakPoints.small}px) {
    font-size: 32px;
  }
`;
