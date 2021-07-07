import styled from "styled-components";
import { BreakPoints } from "../../../constants";

export const ImagesWrapperContainer = styled.div`
  position: relative;
  &::before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--themed-color-work);
    opacity: 0.3;
  }
`;

export const ImagesContainer = styled.div`
  overflow: auto;
  white-space: nowrap;
  display: flex;
  padding: 5px;
  position: relative;
`;

export const ImageItem = styled.div`
  padding: 5px;
  img {
    height: 40vh;
    width: auto;
  }
  @media (min-width: ${BreakPoints.small}px) {
    img {
      height: 60vh;
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const SeeMore = styled.p`
  text-align: right;
  padding: 5px 20px;
  font-size: 0.75rem;
  margin: 0;
  letter-spacing: 1px;
`;
