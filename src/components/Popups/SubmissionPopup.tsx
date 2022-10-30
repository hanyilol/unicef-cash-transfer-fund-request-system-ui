import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { AlertCircle, CheckCircle } from "react-feather";
import { PopupContent } from "state/website/slice";

const Wrapper = styled.div`
  flex-wrap: nowrap;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: ${({ theme }) => theme.borderRadius};

  & > div {
    padding-right: 1rem;
  }

  & > p {
    color: ${({ theme }) => theme.colors.normal};
  }
`;

export default function SubmissionPopup({ content }: { content: PopupContent }) {
  const theme = useTheme();

  return (
    <Wrapper>
      <div>
        {content.isSuccess ? (
          <CheckCircle color={theme.colors.success} size={24} />
        ) : (
          <AlertCircle color={theme.colors.error} size={24} />
        )}
      </div>
      <p>{content.text}</p>
    </Wrapper>
  );
}
