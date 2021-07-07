import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 77px;
  padding-bottom: 15px;
  align-items: center;
`;

export const LogoLink = styled.a`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  text-decoration: none;
  svg path {
    fill: #000;
  }
`;
