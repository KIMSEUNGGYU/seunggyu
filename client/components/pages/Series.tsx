import styled from "@emotion/styled";

import Header from "@header/Header";
import Series from "@series/Series";
import { series } from "@data/data";
import { theme } from "@theme/index";

const SeriesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 60px;
`;

const SeriesBlock = styled.div`
  max-width: 48%;
  width: 48%;
  height: 330px;
  background-color: ${theme.SERIES_BOX_COLOR};
  /* border: 1px solid ${theme.BORDER_COLOR}; */
  margin-top: 49px;
  position: relative;
`;

function SeriesPage() {
  return (
    <>
      <Header />
      <SeriesContainer>
        {series.map((contents, idx) => (
          <SeriesBlock key={idx}>
            <Series series={contents} />
          </SeriesBlock>
        ))}
      </SeriesContainer>
    </>
  );
}

export default SeriesPage;
