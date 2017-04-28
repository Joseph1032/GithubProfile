const InitState = {

  data: {}, 
  repos: [],
}

export function profileReducer (state = InitState, action) {
  switch (action.type) {
    case 'GET_DATA':
    return {
      userdata: action.action,
      repos: state.repos
    }
    case 'GET_REPOS':
    return {
      userdata: state.userdata,
      repos: action.action
    }
  default:
    return state

  }

}










