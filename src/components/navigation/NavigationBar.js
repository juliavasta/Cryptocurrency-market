import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import Popover from "components/popovers/Popover";
import { useThemeContext } from "context/ThemeContext";
import ButtonToggleTheme from "components/buttons/ButtonToggleTheme";

const NavWrapperCSS = styled.div`
  background-color: ${({ theme }) =>
    theme === "light" ? "#EFEFEF" : "#15161c"};
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) =>
    theme === "light" ? "rgb(239, 242, 245);" : "#15161c"};
`;

const NavCSS = styled.nav`
  max-width: 1430px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  align-items: center;

  @media (max-width: 1400px) {
    padding: 0 15px;
  }
`;

const NavListCSS = styled.ul`
  margin-right: auto;
  align-items: center;
  display: inline-flex;
  padding: 15px;
  list-style: none;
  font-weight: 500;
  font-size: 15px;
  line-height: 21px;

  > li {
    cursor: pointer;
    margin: 0 8px 0 0;
    padding: 4px;
    transition: all 0.3s;

    &:last-of-type {
      margin: 0;
    }

    > a {
      &:link,
      &:visited {
        text-decoration: none;
        color: ${({ theme }) => (theme === "light" ? "#20313c" : "white")};
      }
      &:hover {
        color: #0bbf89;
      }
      &:active {
        color: #0bbf89;
      }
    }
  }
`;

function NavigationBar() {
  const { theme, toggle } = useThemeContext();

  return (
    <NavWrapperCSS theme={theme}>
      <NavCSS theme={theme}>
        <NavListCSS theme={theme}>
          <li>
            {" "}
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : ""
                };
              }}
            >
              Stock
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Watchlist"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : ""
                };
              }}
            >
              Watchlist
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Rewards"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : ""
                };
              }}
            >
              Rewards
            </NavLink>
          </li>
        </NavListCSS>

        <Popover
          bottom="-30px"
          title={theme === "light" ? "Turn off the light" : "Turn on the light"}
          right="0"
          background={theme === "light" ? "#15161c" : "white"}
          color={theme === "light" ? "white" : "black"}
        >
          <ButtonToggleTheme
            text={
              theme === "light" ? (
                <DarkModeIcon>DarkModeIcon</DarkModeIcon>
              ) : (
                <LightModeOutlinedIcon style={{ color: "#fff" }}>
                  LightModeOutlinedIcon
                </LightModeOutlinedIcon>
              )
            }
            theme={theme}
            onClick={toggle}
          />
        </Popover>
      </NavCSS>
    </NavWrapperCSS>
  );
}

export default NavigationBar;
