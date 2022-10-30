import styled from "@emotion/styled";
import { useActivePopups } from "state/website/hooks";
import PopupItem from "./PopupItem";

const FixedPopup = styled.div`
  display: grid;
  grid-auto-rows: auto;
  gap: 1rem;
  position: fixed;
  top: 5.5rem;
  right: 1rem;
  max-width: 355px !important;
  width: 100%;
  z-index: 3;

  /* @media screen and (max-width: ${({ theme }) => `${theme.mediaWidth.upToSmall}px`}) {
    display: none;
  } */
`;

export default function Popups() {
  const activePopups = useActivePopups();

  return (
    <>
      <FixedPopup>
        {activePopups.map((p) => (
          <PopupItem popup={p} key={p.key} />
        ))}
      </FixedPopup>
      {/* <MobilePopupWrapper height={activePopups?.length > 0 ? "fit-content" : 0}>
        <MobilePopupInner>
          {activePopups
            .slice(0)
            .reverse()
            .map((p) => (
              <PopupItem popup={p} key={p.key} />
            ))}
        </MobilePopupInner>
      </MobilePopupWrapper> */}
    </>
  );
}
