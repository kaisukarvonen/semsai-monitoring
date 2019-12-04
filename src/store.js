// actions

const CHANGE_PAGE = "CHANGE_PAGE";

export const changePage = (page, pageFinished) => ({
  type: CHANGE_PAGE,
  page,
  pageFinished
});

// constants

export const Pages = {
  CHOOSE_VIOLATION: "Problem",
  WORKERS_AFFECTED: "Scale",
  FACTORY_LOCATION: "Factory",
  ADDITIONAL_INFORMATION: "More info",
  CONFIRMATION_SCREEN: "Confirmation"
};

// reducers

const initialState = {
  page: Pages.CHOOSE_VIOLATION,
  finishedPages: []
};

export default function semsaiApp(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      const updatedPages = [...state.finishedPages];
      if (!state.finishedPages.includes(state.page) && action.pageFinished) {
        updatedPages.push(state.page);
      }
      return { ...state, page: action.page, finishedPages: updatedPages };
    default:
      return state;
  }
}
