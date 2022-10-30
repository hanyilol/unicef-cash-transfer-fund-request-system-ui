import { useEffect } from "react";
import { X } from "react-feather";
import { animated } from "react-spring";
import { useSpring } from "@react-spring/web";

import { useRemovePopup } from "state/website/hooks";
import SubmissionPopup from "./SubmissionPopup";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { Popup } from "state/website/slice";

const StyledClose = styled(X)`
  position: absolute;
  right: 1rem;
  top: 0.5rem;

  :hover {
    cursor: pointer;
  }
`;
const Wrapper = styled.div`
  display: inline-block;
  width: 100%;
  padding: 1em;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1.5rem;
  overflow: hidden;
`;

const Fader = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.normal};
`;

const AnimatedFader = animated(Fader);

export default function PopupItem({ popup }: { popup: Popup }) {
  const removePopup = useRemovePopup();
  useEffect(() => {
    if (popup.removeAfterMs === null) return undefined;
    const timeout = setTimeout(() => {
      removePopup(popup.key);
    }, popup.removeAfterMs);

    return () => {
      clearTimeout(timeout);
    };
  }, [popup, removePopup]);

  const theme = useTheme();

  const faderStyle = useSpring({
    from: { width: "100%" },
    to: { width: "0%" },
    config: { duration: popup.removeAfterMs ?? undefined },
  });

  return (
    <Wrapper>
      <StyledClose color={theme.colors.normal} onClick={() => removePopup(popup.key)} />
      <SubmissionPopup content={popup.content} />
      {popup.removeAfterMs !== null ? <AnimatedFader style={faderStyle} /> : null}
    </Wrapper>
  );
}
