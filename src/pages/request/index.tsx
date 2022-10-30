import styled from "@emotion/styled";
import { nanoid } from "@reduxjs/toolkit";
import { useCallback, useState } from "react";
import { useAddPopup } from "state/website/hooks";
import { darken } from "polished";

const Wrapper = styled.main`
  position: relative;
  max-width: 720px;
  width: 100%;
  margin-top: 3rem;
  @media screen and (max-width: ${({ theme }) => `${theme.mediaWidth.upToMedium}px`}) {
    margin-top: 1rem;
  }
`;

const Head = styled.section`
  text-align: center;
  margin: 1rem 1rem 2rem 1rem;
  font-size: 1.5rem;
  font-weight: 500;
`;

const Body = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;

  & > input {
    border: 1px solid transparent;
    outline: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.normal};
    :hover,
    :focus {
      border-color: ${({ theme }) => theme.colors.borderColor};
    }
    ::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }
    font-size: 1.5rem;
    padding: 1rem;
  }
  & > textarea {
    border: 1px solid transparent;
    outline: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    font-size: 1.5rem;
    padding: 1rem;
    resize: none;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.normal};

    :hover,
    :focus {
      border-color: ${({ theme }) => theme.colors.borderColor};
    }
    ::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }
  }

  @media screen and (max-width: ${({ theme }) => `${theme.mediaWidth.upToExtraSmall}px`}) {
    & > textarea,
    input {
      font-size: 1rem;
      padding: 0.75rem;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;

  & > button {
    border: 1px solid transparent;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.normal};
    font-size: 1rem;
    font-weight: 700;
    flex: 1;
    width: fit-content;
    padding: 1rem;
    :hover,
    :focus {
      cursor: pointer;
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.borderColor};
    }
    :hover {
      color: ${({ theme }) => theme.colors.highlight};
    }

    &[disabled] {
      color: ${({ theme }) => darken(0.2, theme.colors.normal)};
      cursor: not-allowed;
      box-shadow: none !important;
      :hover,
      :active,
      :focus {
        border-color: transparent;
      }
    }
  }
`;

export default function Request() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [content, setContent] = useState<string>();
  const disableEmailSubmit = !name || !email || !content;
  const addPopup = useAddPopup();

  return (
    <Wrapper>
      <Head>
        <title>Request Fund</title>
      </Head>
      <Body>
        <Inputs>
          <input placeholder={"amount"} value={name} onChange={(e) => setName(e.target.value)}></input>
          <input placeholder={"deadline"} value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <textarea
            rows={10}
            placeholder={"purpose"}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </Inputs>
        <Buttons>

        <button disabled={disableEmailSubmit} onClick={() => addPopup({
                key: nanoid(),
                content: { text: `RequestId: ${nanoid()}`, isSuccess: true },
                show: true,
                removeAfterMs: 10000,
              })}>
            Confirm
        </button>
        </Buttons>
      </Body>
    </Wrapper>
  );
}
