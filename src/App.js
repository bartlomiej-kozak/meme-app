import { ROUTE_NAMES, BREAKPOINT } from "./constants";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { MemesContextProvider } from "./Contexts/MemesContext";
import Navigation from "./Components/Navigation";
import NavigationMobile from "./Components/NavigationMobile";
import Memes from "./Components/Memes";
import Footer from "./Components/Footer";
import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  @media (max-width: ${BREAKPOINT}px) {
    flex-direction: column;
  }
`;

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
  }, []); // Update 'screenWidth' when the window is resized

  return (
    <BrowserRouter>
      <MemesContextProvider>
        <StyledApp>
          {screenWidth <= BREAKPOINT ? <NavigationMobile /> : <Navigation />}
          <Switch>
            <Route
              path={"/" + ROUTE_NAMES.hot}
              exact
              render={() => <Memes />}
            />
            <Route
              path={"/" + ROUTE_NAMES.regular}
              exact
              render={() => <Memes />}
            />
            <Route
              path={"/" + ROUTE_NAMES.favorites}
              exact
              render={() => <Memes />}
            />
            <Route
              render={() => (
                <Redirect to={{ pathname: "/" + ROUTE_NAMES.regular }} />
              )}
            />
          </Switch>
          {screenWidth <= BREAKPOINT ? <Footer /> : null}
        </StyledApp>
      </MemesContextProvider>
    </BrowserRouter>
  );
}

export default App;
