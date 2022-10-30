import React, { Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import ErrorBoundary from "components/ErrorBoundary";
import Home from "pages/home";
import Status from "pages/status";
import Admin from "pages/admin";
import Request from "pages/request";
import Header from "components/Header";
import Popups from "components/Popups";
import ReactGA from "react-ga4";

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;
const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 1rem 0px 1rem;
  align-items: center;
  flex: 1;
  z-index: 1;
  margin-top: 6rem;
  margin-bottom: 6rem;
`;

const GOOGLE_ANALYTICS_ID: string | undefined = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;
ReactGA.initialize(GOOGLE_ANALYTICS_ID ?? "test");

function App() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <ErrorBoundary>
      <AppWrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>

        <BodyWrapper>
          <Popups />
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/status" element={<Status />} />
              <Route path="/request" element={<Request />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Suspense>
        </BodyWrapper>
      </AppWrapper>
    </ErrorBoundary>
  );
}

export default App;
