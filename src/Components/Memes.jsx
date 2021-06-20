import { ROUTE_NAMES } from "../constants";
import { MemesContext } from "../Contexts/MemesContext";
import { useLocation } from "react-router";
import { useContext } from "react";
import styled from "styled-components";
import Meme from "./Meme";

const StyledMemes = styled.main`
  display: flex;
  flex-wrap: wrap;
`;

const StyledNoMemesPlaceholder = styled.div`
  font-size: 20px;
  padding: 40px;
`;

const NoMemesPlaceholder = () => {
  return (
    <StyledNoMemesPlaceholder>
      There are no Memes in this section!
    </StyledNoMemesPlaceholder>
  );
};

function Memes() {
  const [memes] = useContext(MemesContext);

  const location = useLocation();
  let memesToShow = memes;

  switch (location.pathname) {
    case "/" + ROUTE_NAMES.hot:
      memesToShow = memes.filter((meme) => meme.upvotes - meme.downvotes >= 5);
      break;
    case "/" + ROUTE_NAMES.regular:
      memesToShow = memes.filter((meme) => meme.upvotes - meme.downvotes < 5);
      break;
    case "/" + ROUTE_NAMES.favorites:
      memesToShow = memes.filter((meme) => meme.favorite === true);
      break;
    default:
      memesToShow = memes;
      break;
  }

  return (
    <StyledMemes>
      {memesToShow.length > 0 ? (
        memesToShow.map((meme) => <Meme key={meme.id} meme={meme} />)
      ) : (
        <NoMemesPlaceholder />
      )}
    </StyledMemes>
  );
}

export default Memes;
