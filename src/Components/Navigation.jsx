import { ROUTE_NAMES, COLORS } from "../constants";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import styled from "styled-components";

const StyledNavigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  items-align: center;
  justify-content: center;
  background-color: ${COLORS.blue};
  z-index: 1;
`;

const StyledNavigationWrapper = styled.div`
  min-width: 300px;
  height: 100vh;
`;

const StyledLink = styled(Link)`
  display: block;
  color: ${COLORS.white};
  text-decoration: none;
  font-size: 36px;
  margin: 16px 40px;
`;

const StyledLogo = styled(StyledLink)`
  font-family: "Ranchers";
  text-decoration: underline;
  font-size: 48px;
  margin: 40px;
`;

function Navigation() {
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
    <StyledNavigationWrapper>
      <StyledNavigation>
        <StyledLogo to={"/" + ROUTE_NAMES.regular}>MemeApp</StyledLogo>
        <StyledLink to={"/" + ROUTE_NAMES.hot}>{linkText.hot}</StyledLink>
        <StyledLink to={"/" + ROUTE_NAMES.regular}>
          {linkText.regular}
        </StyledLink>
        <StyledLink to={"/" + ROUTE_NAMES.favorites}>
          {linkText.favorites}
        </StyledLink>
        <Footer />
      </StyledNavigation>
    </StyledNavigationWrapper>
  );
}

export default Navigation;
