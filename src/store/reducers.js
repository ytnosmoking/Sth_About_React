const CHANGE_ROLE = 'changeRole'
const IS_LOADING = 'isLoading'

const initalHome = {
  role: sessionStorage.getItem('role') || '',
  loading: false
}


export const home = (state = initalHome, action) => {

  switch (action.type) {
    case CHANGE_ROLE:
      sessionStorage.setItem('role', action.role)
      return Object.assign({}, state, {
        role: action.role
      })
    case IS_LOADING:
      return Object.assign({}, state, {
        loading: action.loading
      })
    default:
      return state
  }
}



// export const role = (state = 'all', action) => {
//   switch (action.type) {
//     case CHANGE_ROLE:
//       sessionStorage.setItem('role', action.role)
//       return action.role;
//     default:
//       return state
//   }
// }

// export const loading = (state = false, action) => {
//   switch (action.type) {
//     case IS_LOADING:
//       return action.loading;
//     default:
//       return state
//   }
// }