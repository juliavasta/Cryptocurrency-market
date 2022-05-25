import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink
} from "react-router-dom";
import "./styles.css";
import styled from "@emotion/styled";

import "./dataStructures";
import Rewards from "pages/Rewards";
import Stocks from "pages/Stocks";
import Watchlist from "pages/Watchlist";
import NavigationBar from "components/navigation/NavigationBar";
import { StockContextProvider } from "context/StockContext";
import { ThemeContextProvider } from "context/ThemeContext";
import { useThemeContext } from "context/ThemeContext";

const AppCSS = styled.div`
  font-family: sans-serif;
  height: 100%;
  background: ${({ theme }) => (theme === "light" ? "#F7F6F7" : "#1f2028")};
`;

const Wrapper = styled.div`
  max-width: 1430px;
  height: 100%;
  margin: 0 auto;
  padding: 30px;
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
  @media (max-width: 1400px) {
    padding: 15px;
  }
`;

function Root() {
  const { theme } = useThemeContext();

  return (
    <Router>
      <AppCSS theme={theme}>
        <NavigationBar NavLink={NavLink} theme={theme} />
        <Wrapper theme={theme}>
          <Routes>
            <Route exact path="/" element={<Stocks />} />
            <Route exact path="/Watchlist" element={<Watchlist />} />
            <Route exact path="/Rewards" element={<Rewards />} />
          </Routes>
        </Wrapper>
      </AppCSS>
    </Router>
  );
}

export default function App() {
  return (
    <>
      <StockContextProvider>
        <ThemeContextProvider>
          <Root />
        </ThemeContextProvider>
      </StockContextProvider>
    </>
  );
}
