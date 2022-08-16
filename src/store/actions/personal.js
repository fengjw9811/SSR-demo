export const FETCH_PERSONAL_DATA = 'fetch_personal_data'

export const fetchPersonalData = async (dispach) => {
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        userInfo: {
          username: 'fengjw',
          job: '学生'
        }
      })
    }, 2000)
  })
  dispach({
    type: FETCH_PERSONAL_DATA,
    payload: data
  })
}
