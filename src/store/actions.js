const CHANGE_ROLE = 'changeRole'
const IS_LOADING = 'isLoading'

export const changeRole = role => {
  return function (dispatch) {
    dispatch(isLoading(true))
    return new Promise((resolve, reject) => {
        if (role) {
          setTimeout(() => {
            resolve(role)
          }, 1000)
        } else {
          reject('err')
        }
      }).then(res => {

        dispatch(actionRole(res))
      }, err => {
        console.log(2)
        dispatch(actionRole(''))
      })
      .then(res => {
        dispatch(isLoading(false))
      })
  }
}

export const actionRole = role => ({
  type: CHANGE_ROLE,
  role
})



export const isLoading = loading => ({
  type: IS_LOADING,
  loading,
})