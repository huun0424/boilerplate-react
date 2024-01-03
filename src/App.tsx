/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const titleStyle = () => css`
  color: blue;
`;

function App() {
  return <div css={titleStyle}>react init!</div>;
}

export default App;
