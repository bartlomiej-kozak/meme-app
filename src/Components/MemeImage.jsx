import { COLORS } from "./../constants";
import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 100;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.black};
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

function Image({ url, alt }) {
  return (
    <ImageWrapper>
      <StyledImage src={url} alt={alt}></StyledImage>
    </ImageWrapper>
  );
}

export default Image;
