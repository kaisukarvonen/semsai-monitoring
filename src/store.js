// actions

const CHANGE_PAGE = "CHANGE_PAGE";
const SAVE_REPORT = "SAVE_REPORT";

export const changePage = (page, pageFinished) => ({
  type: CHANGE_PAGE,
  page,
  pageFinished
});

export const saveReport = report => ({
  type: SAVE_REPORT,
  report
});

// constants

export const Pages = {
  PROBLEM: "Problem",
  WORKERS_AFFECTED: "Scale",
  LOCATION: "Factory",
  MORE_INFO: "More info",
  CONFIRMATION_SCREEN: "Confirmation",
  THANK_YOU: "App name"
};

export const PageLinks = {
  PROBLEM: "/",
  WORKERS_AFFECTED: "/workers-affected",
  LOCATION: "/location",
  MORE_INFO: "/more-info",
  CONFIRMATION_SCREEN: "/confirmation",
  THANK_YOU: "/thank-you"
};

// reducers

const initialState = {
  page: Pages.PROBLEM,
  finishedPages: [],
  report: { problem:{},location:{},affected:{},moreInfo:{} } 
};

export default function semsaiApp(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      const updatedPages = [...state.finishedPages];
      if (!state.finishedPages.includes(state.page) && action.pageFinished) {
        updatedPages.push(state.page);
      }
      return { ...state, page: action.page, finishedPages: updatedPages };
    case SAVE_REPORT:
      return { ...state, report: action.report };
    default:
      return state;
  }
}
