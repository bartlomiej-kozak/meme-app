import styled from "styled-components";

const StyledFavoriteButton = styled.button`
  border: none;
  background: none;
  color: ${(props) => props.iconColor};
  font-size: 48px;
  cursor: pointer;
`;

function FavoriteButton({ icon, iconColor, onClickAction }) {
  return (
    <StyledFavoriteButton iconColor={iconColor} onClick={onClickAction}>
      {icon}
    </StyledFavoriteButton>
  );
}

export default FavoriteButton;
