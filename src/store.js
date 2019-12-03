// actions

const CHANGE_PAGE = 'CHANGE_PAGE'

export function changePage(page) {
  return {
    type: CHANGE_PAGE,
    page
  }
}

// constants

export const Pages = {
  CHOOSE_VIOLATION: 'CHOOSE_VIOLATION',
  WORKERS_AFFECTED: 'WORKERS_AFFECTED',
  FACTORY_LOCATION: 'FACTORY_LOCATION',
  ADDITIONAL_INFORMATION: 'ADDITIONAL_INFORMATION',
  CONFIRMATION_SCREEN: 'CONFIRMATION_SCREEN'
}

// reducers

const initialState = {
  page: Pages.CHOOSE_VIOLATION,
}

export default function semsaiApp(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return Object.assign({}, state, {
        page: action.page
      })
  default:
    return state
  }
}
