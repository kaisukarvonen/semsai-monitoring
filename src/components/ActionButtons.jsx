import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import SecondaryButton from "./SecondaryButton";
import { changePage, PageLinks, Pages } from "../store";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DisabledLink from "./DisabledLink";
import { withRouter } from "react-router-dom";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  a {
    text-decoration: none;
  }
`;

const Container = styled.div`
  text-align: center;
`;

const ConfirmationLink = styled.a`
  color: ${({ theme }) => theme.palette.primary.main};
`;

const ActionButtons = ({
  previousProps,
  nextProps,
  backLink,
  nextLink,
  changePage,
  nextPage,
  previousPage,
  cameFromConfirmation,
  history,
  page
}) => {
  const backToConfirmation = () => {
    changePage(Pages.CONFIRMATION_SCREEN);
    history.push(PageLinks.CONFIRMATION_SCREEN);
  };
  return (
    <Container>
      {cameFromConfirmation &&
        [
          Pages.PROBLEM,
          Pages.WORKERS_AFFECTED,
          Pages.LOCATION,
          Pages.MORE_INFO
        ].includes(page) && (
          <ConfirmationLink onClick={backToConfirmation}>
            Back to confirmation
          </ConfirmationLink>
        )}
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
            {previousProps.customText || "Back"}
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
    </Container>
  );
};

const Component = connect(
  state => ({
    page: state.page,
    cameFromConfirmation: state.cameFromConfirmation
  }),
  dispatch =>
    bindActionCreators(
      {
        changePage
      },
      dispatch
    )
)(ActionButtons);

export default withRouter(Component);
