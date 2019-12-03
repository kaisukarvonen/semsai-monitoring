import React from "react";
import styled, { css } from "styled-components";
import { pages } from "../App";
import { Done } from "@material-ui/icons";

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.9rem;
`;
const color = "#6884E6";

const Line = styled.div`
  width: 85%;
  height: 2px;
  background-color: ${color};
  position: absolute;
  top: 12px;
  z-index: 3;
  left: 8%;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 11px;
  width: 16%;
  align-items: center;
  span {
    color: #444;
  }
`;

const donePage = css`
  background-color: ${color};
  color: #fff;
`;

const Page = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  color: ${color};
  background-color: #fff;
  ${props => props.active && donePage};
  border: 1px solid ${color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  position: relative;
  z-index: 6;
`;

const ProgressBar = ({ donePages, active }) => {
  const pageIsDone = page => donePages && donePages.includes(page);
  return (
    <Container>
      <Line />
      {pages.map((page, i) => (
        <PageContainer>
          <Page active={active === page || pageIsDone(page)}>
            {pageIsDone(page) ? <Done color="action" /> : `${i + 1}`}
          </Page>
          <span>{page}</span>
        </PageContainer>
      ))}
    </Container>
  );
};

export default ProgressBar;
