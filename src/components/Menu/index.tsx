import styled from "@emotion/styled";
import { useOnClickOutside } from "hooks/website/useOnClickOutside";
import { useRef } from "react";
import { useIsModalOpen, useToggleModal } from "state/website/hooks";
import { WebsiteModal } from "state/website/slice";
import { ReactComponent as MenuIcon } from "assets/svg/menu.svg";
import { ReactComponent as GithubIcon } from "assets/svg/github.svg";
import { ReactComponent as LinkedinIcon } from "assets/svg/linkedin.svg";
import { GithubLink, LinkedinLink } from "constants/links";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`;

const MenuButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-radius: ${({ theme }) => theme.borderRadius};

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
  }

  :hover {
    svg {
      path {
        stroke: ${({ theme }) => theme.colors.highlight};
      }
    }
  }

  svg {
    margin-top: 2px;
    path {
      stroke: ${({ theme }) => theme.colors.normal};
    }
  }
`;

const MenuFlyout = styled.span`
  min-width: 196px;
  max-height: 350px;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 4rem;
  right: 0rem;

  @media screen and (max-width: ${({ theme }) => `${theme.mediaWidth.upToMedium}px`}) {
    bottom: unset;
    right: 0;
    left: unset;
  }
`;

const MenuLinkItem = styled.a`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0.5rem;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.normal};

  text-decoration: none;
  cursor: pointer;
  font-weight: 500;

  :focus,
  :hover {
    color: ${({ theme }) => theme.colors.highlight};
    svg {
      fill: ${({ theme }) => theme.colors.highlight};
    }
  }

  :focus {
    outline: none;
  }

  svg {
    fill: ${({ theme }) => theme.colors.normal};
    height: 24px;
    width: 24px;
  }
`;

export default function Menu() {
  const node = useRef<HTMLDivElement>();
  const isMenuOpen = useIsModalOpen(WebsiteModal.MENU);
  const toggleMenu = useToggleModal(WebsiteModal.MENU);

  useOnClickOutside(node, isMenuOpen ? toggleMenu : undefined);

  return (
    <Wrapper ref={node as any}>
      <MenuButton onClick={toggleMenu} aria-label={"Menu"}>
        <MenuIcon />
      </MenuButton>

      {isMenuOpen && (
        <MenuFlyout>
          <MenuLinkItem href={GithubLink} rel="noopener noreferrer" target="_blank">
            <div>Github</div>
            <GithubIcon />
          </MenuLinkItem>
          <MenuLinkItem href={LinkedinLink} rel="noopener noreferrer" target="_blank">
            <div>Linkedin</div>
            <LinkedinIcon />
          </MenuLinkItem>
        </MenuFlyout>
      )}
    </Wrapper>
  );
}
