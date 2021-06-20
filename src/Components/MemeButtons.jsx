import { VOTE_TYPES, COLORS } from "../constants";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { MemesContext } from "../Contexts/MemesContext";
import { useContext } from "react";
import FavoriteButton from "./FavoriteButton";
import VoteButton from "./VoteButton";
import styled from "styled-components";

const StyledMemeButtons = styled.div`
  max-width: 100%;
  padding: 16px;
  display: flex;
  align-items: stretch;
  justify-content: space-evenly;
`;

function MemeButtons({ meme }) {
  const [memes, setMemes] = useContext(MemesContext);

  const vote = (id, voteType) => {
    let updatedMemes = memes;

    switch (voteType) {
      case VOTE_TYPES.upvote:
        updatedMemes = memes.map((meme) =>
          meme.id === id ? { ...meme, upvotes: meme.upvotes + 1 } : meme
        );
        break;
      case VOTE_TYPES.downvote:
        updatedMemes = memes.map((meme) =>
          meme.id === id ? { ...meme, downvotes: meme.downvotes + 1 } : meme
        );
        break;
      default:
        updatedMemes = memes;
        break;
    }

    setMemes(updatedMemes);
  };

  const addToFavorites = (id) => {
    const updatedMemes = memes.map((meme) =>
      meme.id === id ? { ...meme, favorite: !meme.favorite } : meme
    );

    setMemes(updatedMemes);
  };

  return (
    <StyledMemeButtons>
      <VoteButton
        icon={<AiFillLike />}
        text={meme.upvotes}
        backgroundColor={COLORS.green}
        onClickAction={() => vote(meme.id, VOTE_TYPES.upvote)}
      />
      <FavoriteButton
        icon={meme.favorite === true ? <HiHeart /> : <HiOutlineHeart />}
        iconColor={COLORS.blue}
        onClickAction={() => addToFavorites(meme.id)}
      />
      <VoteButton
        icon={<AiFillDislike />}
        text={meme.downvotes}
        backgroundColor={COLORS.red}
        onClickAction={() => vote(meme.id, VOTE_TYPES.downvote)}
      />
    </StyledMemeButtons>
  );
}

export default MemeButtons;
