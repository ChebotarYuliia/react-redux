export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function handlerLogin() {
  return function(dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });

    //eslint-disable-next-line no-undef
    VK.Auth.login(r => {
      if (r.session) {
        let userName = r.session.user.first_name;

        dispatch({
          type: LOGIN_SUCCESS,
          payload: userName,
        });
      } else {
        dispatch({
          type: LOGIN_ERROR,
          error: true,
          payload: new Error('Ошибка авторизации'),
        });
      }
    }, 4);
  };
}
