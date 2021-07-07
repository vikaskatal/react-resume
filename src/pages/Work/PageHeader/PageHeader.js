import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ReactComponent as IconBack } from "../../../assets/images/arrow-back.svg";
import Container from "../../../elements/Container";
import {
  BackButton,
  PageHeaderContainer,
  Title,
  Logo,
} from "./PageHeader.styles";

function PageHeader({ title, description, logo }) {
  return (
    <PageHeaderContainer>
      <Container className="position-relative">
        <div className="position-relative">
          <BackButton as={Link} to="/">
            <IconBack />
            <span> Home </span>
          </BackButton>

          <Title>
            <h1>{title}</h1>
            <p>{description}</p>
          </Title>
        </div>
        {logo && <Logo src={logo} alt={`${title} Logo`} />}
      </Container>
    </PageHeaderContainer>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  logo: PropTypes.string,
};

PageHeader.defaultProps = {
  title: "",
  description: "",
  logo: null,
};

export default PageHeader;
