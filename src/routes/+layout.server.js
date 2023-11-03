// import { dev } from '$app/environment'

export async function load({ locals: { getSession } }) {
  // const brugPopup = cookies.get('brug_popup')

  // !brugPopup &&
  //   cookies.set('brug_popup', 'true', {
  //     path: '/',
  //     httpOnly: false,
  //     secure: !dev,
  //     // maxAge: 2 * 24 * 60 * 60,
  //     maxAge: 60,
  //   })

  return {
    session: await getSession(),
  }
}
