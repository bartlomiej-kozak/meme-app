import { BREAKPOINT, COLORS } from "./../constants";
import MemeTitle from "./MemeTitle";
import MemeImage from "./MemeImage";
import MemeButtons from "./MemeButtons";
import styled from "styled-components";

const StyledMeme = styled.div`
  width: 25vw;
  min-width: 320px;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  margin: 50px;
  background-color: ${COLORS.white};
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.8);
  @media (max-width: ${BREAKPOINT}px) {
    margin: 30px auto 0 auto;
  }
`;

function Meme({ meme }) {
  return (
    <StyledMeme>
      <MemeTitle title={meme.title} />
      <MemeImage url={meme.link} alt={meme.name} />
      <MemeButtons meme={meme} />
    </StyledMeme>
  );
}

export default Meme;
