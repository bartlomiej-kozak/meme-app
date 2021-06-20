import { MAX_TITLE_LENGTH } from "../constants";
import styled from "styled-components";

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-family: "Droid Sans";
  font-size: 24px;
  font-weight: bold;
`;

function MemeTitle({ title }) {
  const truncatedTitle =
    title.length > MAX_TITLE_LENGTH
      ? title.substr(0, MAX_TITLE_LENGTH) + "..."
      : title;

  return <StyledTitle>{truncatedTitle}</StyledTitle>;
}

export default MemeTitle;
