import styled from "@emotion/styled";
import { FundRequest } from "constants/requests";

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.backgroundColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.colors.shadowColor};
  border-color: ${({ theme }) => theme.colors.borderColor};
  padding: 0.5rem;
  min-height: 240px;
  justify-content: space-between;
  @media screen and (max-width: ${({ theme }) => `${theme.mediaWidth.upToExtraSmall}px`}) {
    min-height: 200px;
  }
  :focus,
  :hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.colors.white};
    transition: transform 0.3s ease-in-out;
  }

  & > div {
    /* tags */
    :nth-of-type(1) {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.6rem;
      color: ${({ theme }) => theme.colors.placeholder};

      & > div {
        background-color: ${({ theme }) => theme.colors.shadowColor};
        border-radius: ${({ theme }) => theme.borderRadius};
        padding: 0.3rem 0.5rem;
      }
    }
    /* title */
    :nth-of-type(2) {
      text-align: center;
      font-size: 1.3rem;
      color: ${({ theme }) => theme.colors.normal};
    }
    /* date */
    :nth-of-type(3) {
      color: ${({ theme }) => theme.colors.placeholder};
    }
  }
`;

export default function StatusCard({ fundRequest }: { fundRequest: FundRequest }) {
  return (
    <Wrapper>
      <div>
        <div>RequestId: {fundRequest.requestId}</div>
      </div>
      <div>{fundRequest.title}</div>
      <div>{fundRequest.publishTime.toISOString()}</div>
    </Wrapper>
  );
}
