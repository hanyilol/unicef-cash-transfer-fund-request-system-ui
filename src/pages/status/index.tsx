import styled from "@emotion/styled";
import { useMemo, useState } from "react";
import { REQUESTS } from "constants/requests";
import StatusCard from "components/StatusCard";

const Wrapper = styled.main`
  position: relative;
  max-width: 1200px;
  width: 100%;
  margin-top: 1rem;
`;

const DiscoverHelper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  & > div {
    display: grid;
    gap: 0.6rem;
    grid-auto-flow: row;

    & > p {
      color: ${({ theme }) => theme.colors.highlight};
      font-weight: 500;
    }

    & > input {
      background: ${({ theme }) => theme.colors.backgroundColor};
      border: 1px solid transparent;
      border-radius: ${({ theme }) => theme.borderRadius};
      outline: none;
      font-size: 1rem;
      padding: 0.5rem 0.8rem;
      color: ${({ theme }) => theme.colors.normal};
      ::placeholder {
        color: ${({ theme }) => theme.colors.placeholder};
      }
      :hover,
      :focus {
        border-color: ${({ theme }) => theme.colors.borderColor};
      }
    }
  }
`;

const Articles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  margin-top: 50px;
  gap: 24px;
  position: relative;
`;

export default function Status() {
  const [searchInput, setSearchInput] = useState<string>();

  const searchedArticles = useMemo(() => {
    if (searchInput) {
      return REQUESTS.filter((a) => {
        const content = a.requestId;
        return content.toLocaleLowerCase().includes(searchInput.trim().toLocaleLowerCase());
      });
    }
    return REQUESTS;
  }, [searchInput]);

  return (
    <Wrapper>
      <DiscoverHelper>
        <div>
          <p>Search</p>
          <input
            placeholder={"search by request id"}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          ></input>
        </div>
      </DiscoverHelper>

      <Articles>
        {searchedArticles.map((a) => (
          <StatusCard key={a.link} fundRequest={a} />
        ))}
      </Articles>
    </Wrapper>
  );
}
