import { Global, useTheme, css } from "@emotion/react";
import un from "assets/images/un.png";
import { useLocation } from "react-router-dom";

const GlobalCSS = () => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const backgroundImg =
    pathname === "/"
      ? `linear-gradient(${theme.colors.transparentLayer}, ${theme.colors.transparentLayer}), url(${un})`
      : `linear-gradient(${theme.colors.transparentLayer}, ${theme.colors.transparentLayer})`;

  return (
    <Global
      styles={css`
        /* reset */
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
          color: inherit;
        }
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section,
        title {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: "";
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        a {
          text-decoration: none;
        }

        /* global setting */
        * {
          font-family: "MyInter", sans-serif !important;
          box-sizing: border-box !important;
        }

        /**
          Explicitly load Inter var from public/ so it does not block LCP's critical path.
        */
        @font-face {
          font-family: "MyInter";
          font-weight: 100 900;
          font-style: normal;
          font-display: block;
          font-named-instance: "Regular";
          src: url("/fonts/Inter-roman.var.woff2") format("woff2 supports variations(gvar)"),
            url("/fonts/Inter-roman.var.woff2") format("woff2-variations"),
            url("/fonts/Inter-roman.var.woff2") format("woff2");
        }

        @font-face {
          font-family: "Handwrite";
          src: url("/fonts/Caveat-VariableFont_wght.ttf");
        }

        @supports (font-variation-settings: normal) {
          * {
            font-family: "MyInter", sans-serif;
          }
        }

        html {
          color: ${theme.colors.normal};
          background-image: ${backgroundImg};
          background-color: ${theme.colors.backgroundColor} !important;
          background-repeat: no-repeat;
          background-size: cover;
          font-size: 16px;
          min-height: 100%;

          font-variant: none;
          font-smooth: always;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          font-feature-settings: "ss01" on, "ss02" on, "cv01" on, "cv03" on;
        }

        button {
          user-select: none;
        }
      `}
    />
  );
};

export default GlobalCSS;
