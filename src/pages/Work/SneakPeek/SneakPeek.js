import React from "react";
import PropTypes from "prop-types";
import LazyImage from "../../../components/LazyImage/LazyImage";
import Container from "../../../elements/Container";
import {
  ImagesWrapperContainer,
  ImagesContainer,
  ImageItem,
  SeeMore,
} from "./SneakPeek.styles";
import { WorkSection, SubTitleContainer } from "../Work.elements";

function SneakPeek({ images, url }) {
  return (
    <>
      {images?.length > 0 && (
        <WorkSection>
          <Container>
            <SubTitleContainer className="display-flex align-items-center justify-content-between">
              <div>
                <h3>Sneak peek</h3>
                <p>Some shots from the project</p>
              </div>

              <div>{url && <a href={url}>Visit website/app</a>}</div>
            </SubTitleContainer>
          </Container>

          <ImagesWrapperContainer>
            <ImagesContainer>
              {images.map(({ url, label }) => (
                <ImageItem key={label}>
                  <LazyImage url={url} alt={label} />
                </ImageItem>
              ))}
            </ImagesContainer>
          </ImagesWrapperContainer>
        </WorkSection>
      )}

      {images?.length > 1 && <SeeMore>Scroll to see more.</SeeMore>}
    </>
  );
}

SneakPeek.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  url: PropTypes.string,
};

SneakPeek.defaultProps = {
  images: [],
  url: null,
};

export default SneakPeek;
