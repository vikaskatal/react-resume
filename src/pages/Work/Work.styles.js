import styled from "styled-components";
import { BreakPoints } from "../../constants";

export const StyledLetsTalk = styled.div`
  padding-top: 40px;
  padding-bottom: 25px;

  .btn {
    color: var(--themed-color-work);
    border-color: var(--themed-color-work);
    &:hover {
      color: #fff;
      background-color: var(--themed-color-work);
    }
  }

  @media (min-width: ${BreakPoints.small}px) {
    padding-top: 120px;
    padding-bottom: 45px;
  }
`;
