import styled from "@emotion/styled";

const Wrapper = styled.main`
  display: flex;
  position: relative;
  width: 100%;
  min-height: calc(100vh - 6rem);
  align-items: center;
  justify-content: center;
`;

const Intro = styled.div`
  margin-bottom: 12rem;
  text-align: center;
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1.5rem;
  }

  @media screen and (max-width: ${({ theme }) => `${theme.mediaWidth.upToExtraSmall}px`}) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

const Line = styled.div`
  width: 8rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.normal};
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media screen and (max-width: ${({ theme }) => `${theme.mediaWidth.upToExtraSmall}px`}) {
    width: 4rem;
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <Intro>
        <h1>UNICEF Cash Transfer</h1>
        <Line />
        <p>Request System</p>
      </Intro>
    </Wrapper>
  );
}
