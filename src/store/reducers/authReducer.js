const initialState = {
  authError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('LOGIN FAILED');
      return {
        ...state,
        authError: 'Login failed',
      };
    case 'LOGIN_SUCCESS':
      console.log('LOGIN SUCCESS');
      return {
        ...state,
        authError: null,
      };
    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return {
        ...state,
      };
    case 'SIGNUP_SUCCESS':
      console.log('SIGNUP_SUCCESS');
      return {
        ...state,
        authError: null,
      };
    case 'SIGNUP_FAILED':
      console.log('SIGNUP_FAILED');
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
