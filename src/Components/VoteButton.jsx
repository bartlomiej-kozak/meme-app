import styled from "styled-components";

const StyledVoteButton = styled.button`
  width: 25%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Ranchers";
  font-size: 24px;
  color: white;
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
  border: none;
  :active {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

function VoteButton({ icon, text, backgroundColor, onClickAction }) {
  return (
    <StyledVoteButton backgroundColor={backgroundColor} onClick={onClickAction}>
      {icon}
      {text}
    </StyledVoteButton>
  );
}

export default VoteButton;
