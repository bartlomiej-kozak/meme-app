import { COLORS, BREAKPOINT } from "./../constants.js";
import styled from "styled-components";

const StyledFooter = styled.div`
  flex-grow: 1;
  max-width: 100%;
  height: 70px;
  font-size: 12px;
  color: ${COLORS.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  @media (max-width: ${BREAKPOINT}px) {
    color: ${COLORS.black};
  }
`;

function Footer() {
  return (
    <StyledFooter>
      {<div style={{ padding: "10px" }}>MemeApp@gmail.com</div>}
      {<div style={{ padding: "10px" }}>&copy; Copyright 2021</div>}
    </StyledFooter>
  );
}

export default Footer;
