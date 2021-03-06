import { css, Global } from '@emotion/react';

import { useTheme } from '@context/themeProvider';
import { lightTheme, darkTheme } from './theme';

const GlobalStyle = () => {
  const [mode, _] = useTheme();

  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          overflow-y: scroll;
          background: ${theme.backgroundColor};
          color: ${theme.primaryColor};
        }

        ul {
          margin: 0;
          padding-left: 0;
        }
        li {
          list-style: none;
        }
        h1 {
          margin: 0;
        }
        a {
          text-decoration: none;
          color: inherit;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: ${theme.primaryColor};
        }
      `}
    />
  );
};

export default GlobalStyle;
