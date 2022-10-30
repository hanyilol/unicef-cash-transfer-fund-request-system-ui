import styled from "@emotion/styled";
import useScrollPosition from "@react-hook/window-scroll";
import { ReactComponent as HeaderLogoSVG } from "assets/svg/header_logo.svg";
import Row from "components/Row";
import { NavLink } from "react-router-dom";
import { darken } from "polished";
import Menu from "components/Menu";
import { useDarkModeManager } from "state/user/hooks";
import { ReactComponent as LightModeIcon } from "assets/svg/lightMode.svg";
import { ReactComponent as DarkModeIcon } from "assets/svg/darkMode.svg";

const HeaderSection = styled.div<{ showBackground: boolean }>`
  display: grid;
  grid-template-columns: 120px 1fr 120px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: relative;
  padding: 1rem;
  z-index: 21;
  position: relative;
  /* Background slide effect on scroll. */
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom, transparent 50%, ${theme.colors.backgroundColor} 50% )`};
  background-position: ${({ showBackground }) => (showBackground ? "0 -100%" : "0 0")};
  background-size: 100% 200%;
  box-shadow: 0px 0px 0px 1px
    ${({ theme, showBackground }) => (showBackground ? theme.colors.shadowColor : "transparent;")};
  transition: background-position 0.1s, box-shadow 0.1s;
  background-blend-mode: hard-light;

  @media screen and (max-width: ${({ theme }) => `${theme.mediaWidth.upToMedium}px`}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;
  justify-self: flex-start;
  transition: transform 0.3s ease-in-out;

  :hover,
  :focus {
    transform: rotate(-40deg);
    outline: none;
  }
  :hover {
    cursor: pointer;
  }
`;

const Logo = styled.div`
  width: 3rem;
  height: 3rem;
  border: none;
  position: relative;

  svg {
    fill: ${({ theme }) => theme.colors.normal};
  }
`;

const Tabs = styled(Row)`
  justify-self: center;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  width: fit-content;
  padding: 1rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1.5rem;
  overflow: auto;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => `${theme.mediaWidth.upToMedium}px`}) {
    flex-direction: row;
    justify-content: space-between;
    justify-self: center;
    z-index: 99;
    position: fixed;
    bottom: 0;
    right: 50%;
    transform: translate(50%, -50%);
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    box-shadow: 0px 6px 10px rgb(0 0 0 / 2%);
  }

  @media screen and (max-width: ${({ theme }) => `${theme.mediaWidth.upToExtraSmall}px`}) {
    grid-gap: 1rem;
    padding: 1rem 1rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-flow: row nowrap;
  align-items: left;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.normal};
  font-size: 1rem;
  font-weight: 500;
  word-break: break-word;
  white-space: nowrap;
  &.active {
    font-weight: 800;
    color: ${({ theme }) => theme.colors.highlight};
  }

  :hover,
  :focus {
    color: ${({ theme }) => darken(0.1, theme.colors.highlight)};
  }
`;

const Settings = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;
`;

const Setting = styled.div`
  display: flex;
  align-items: center;

  &:not(:first-of-type) {
    margin-left: 0.5em;
  }

  /* addresses safaris lack of support for "gap" */
  & > *:not(:first-of-type) {
    margin-left: 8px;
  }
`;

const ThemeButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  :focus,
  :hover {
    cursor: pointer;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
  }

  :hover {
    svg {
      fill: ${({ theme }) => theme.colors.highlight};
    }
  }

  svg {
    fill: ${({ theme }) => theme.colors.normal};
  }
`;

export default function Header() {
  const scrollY = useScrollPosition();
  const [isDarkMode, toggleDarkMode] = useDarkModeManager();

  return (
    <HeaderSection showBackground={scrollY > 45}>
      <Title href=".">
        <Logo>
          <HeaderLogoSVG />
        </Logo>
      </Title>
      <Tabs>
        <StyledNavLink to={"/"}>Home</StyledNavLink>
        <StyledNavLink to={"/request"}>Request</StyledNavLink>
        <StyledNavLink to={"/status"}>Status</StyledNavLink>
        <StyledNavLink to={"/admin"}>UNICEF</StyledNavLink>
      </Tabs>
      <Settings>
        <Setting>
          <ThemeButton onClick={() => toggleDarkMode()}>
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </ThemeButton>
        </Setting>
        <Setting>
          <Menu />
        </Setting>
      </Settings>
    </HeaderSection>
  );
}
