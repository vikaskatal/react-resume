import styled from "styled-components";
import { BreakPoints } from "../../constants";

export const SubTitleContainer = styled.div`
  margin-bottom: 30px;
  h3 {
    font-size: 1.5rem;
    margin: 0;
  }
  p {
    margin: 5px 0 0;
  }
  a {
    text-decoration: none;
    &:hover {
      color: var(--themed-color-work);
    }
  }
`;

export const WorkSection = styled.section`
  margin-top: 40px;
  @media (min-width: ${BreakPoints.small}px) {
    margin-top: 60px;
  }
`;

export const PageText = styled.p`
  opacity: 0.7;
  margin: 0;
  font-size: 1.125rem;
  & + & {
    margin-top: 10px;
  }
`;
