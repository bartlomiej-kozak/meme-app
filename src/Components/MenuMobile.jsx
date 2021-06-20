import { ROUTE_NAMES, COLORS } from "../constants.js";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import styled from "styled-components";

const StyledMenuMobile = styled.nav`
  position: absolute;
  top: 80px;
  right: 0;
  width: 60%;
  background-color: ${COLORS.blue};
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 10px;
  font-size: 22px;
  text-align: left;
  text-decoration: none;
  border-top: 1px solid ${COLORS.white};
  color: ${COLORS.white};
`;

function MenuMobile() {
  const location = useLocation();

  const linkText = {
    hot: location.pathname === "/" + ROUTE_NAMES.hot ? "Hot *" : "Hot",
    regular:
      location.pathname === "/" + ROUTE_NAMES.regular ? "Regular *" : "Regular",
    favorites:
      location.pathname === "/" + ROUTE_NAMES.favorites
        ? "Favorites *"
        : "Favorites",
  };

  return (
    <StyledMenuMobile>
      <StyledLink to={"/" + ROUTE_NAMES.hot}>{linkText.hot}</StyledLink>
      <StyledLink to={"/" + ROUTE_NAMES.regular}>{linkText.regular}</StyledLink>
      <StyledLink to={"/" + ROUTE_NAMES.favorites}>
        {linkText.favorites}
      </StyledLink>
    </StyledMenuMobile>
  );
}

export default MenuMobile;
