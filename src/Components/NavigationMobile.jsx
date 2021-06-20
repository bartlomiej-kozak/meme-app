import { ROUTE_NAMES, COLORS } from "../constants.js";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuMobile from "./MenuMobile";
import styled from "styled-components";

const StyledNavigationMobile = styled.nav`
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${COLORS.blue};
  z-index: 1;
`;

const StyledNavigationMobileWrapper = styled.div`
  min-width: 100vw;
  min-height: 80px;
`;

const StyledLogo = styled(Link)`
  margin-left: 30px;
  font-family: "Ranchers";
  text-decoration: underline;
  font-size: 32px;
  color: ${COLORS.white};
`;

const StyledMenuButton = styled.button`
  margin-right: 30px;
  background: none;
  border: none;
  color: white;
  font-size: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function NavigationMobile() {
  const [menuVisible, setMenuVisible] = useState(false);
  const openCloseMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <StyledNavigationMobileWrapper>
      <StyledNavigationMobile>
        <StyledLogo to={"/" + ROUTE_NAMES.regular}>MemeApp</StyledLogo>
        <StyledMenuButton onClick={openCloseMenu}>
          <HiMenu />
          {menuVisible ? <MenuMobile /> : null}
        </StyledMenuButton>
      </StyledNavigationMobile>
    </StyledNavigationMobileWrapper>
  );
}

export default NavigationMobile;
