import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import SecondaryButton from "./SecondaryButton";
import { changePage } from "../store";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DisabledLink from "./DisabledLink";

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
    <DisabledLink
      to={backLink}
      disabled={previousProps && previousProps.disabled}
    >
      <SecondaryButton
        variant="outlined"
        color="primary"
        {...previousProps}
        onClick={() => previousPage && changePage(previousPage)}
      >
        Back
      </SecondaryButton>
    </DisabledLink>
    <DisabledLink to={nextLink} disabled={nextProps.disabled}>
      <Button
        variant="contained"
        color="primary"
        {...nextProps}
        onClick={() => changePage(nextPage, true)}
      >
        {nextProps.customText || "Next page"}
      </Button>
    </DisabledLink>
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
