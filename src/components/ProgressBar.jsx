import React from "react";
import styled, { css } from "styled-components";
import { Done } from "@material-ui/icons";
import { Pages, PageLinks, changePage } from "../store";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

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

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const ProgressBar = ({ finishedPages, page }) => {
  const pageIsFinished = pa => finishedPages.includes(pa);
  return (
    <Container>
      <Line />
      {Object.keys(Pages)
        .slice(0, -1)
        .map((pa, i) => (
          <PageContainer key={pa}>
            <StyledLink to={PageLinks[pa]}>
              <Page active={page === Pages[pa] || pageIsFinished(pa)}>
                {pageIsFinished(pa) ? <Done color="action" /> : `${i + 1}`}
              </Page>
            </StyledLink>
            <span>{Pages[pa]}</span>
          </PageContainer>
        ))}
    </Container>
  );
};

export default connect(
  state => ({
    page: state.page,
    finishedPages: state.finishedPages
  }),
  dispatch =>
    bindActionCreators(
      {
        changePage
      },
      dispatch
    )
)(ProgressBar);
