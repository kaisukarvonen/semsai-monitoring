import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import SecondaryButton from "./SecondaryButton";
import { Link } from "react-router-dom";
import { changePage } from "../store";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.4rem;
  a {
    text-decoration: none;
  }
`;
const ActionButtons = ({
  previousProps,
  nextProps,
  backLink,
  nextLink,
  changePage,
  nextPage,
  previousPage
}) => (
  <ButtonContainer>
    <Link to={backLink}>
      <SecondaryButton
        variant="outlined"
        color="primary"
        {...previousProps}
        onClick={() => previousPage && changePage(previousPage)}
      >
        Back
      </SecondaryButton>
    </Link>
    <Link to={nextLink}>
      <Button
        variant="contained"
        color="primary"
        {...nextProps}
        onClick={() => changePage(nextPage, true)}
      >
        Next page
      </Button>
    </Link>
  </ButtonContainer>
);

export default connect(
  state => ({
    page: state.page
  }),
  dispatch =>
    bindActionCreators(
      {
        changePage
      },
      dispatch
    )
)(ActionButtons);
