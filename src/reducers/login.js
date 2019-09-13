const reducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_DATA_USER_NAME':
        return { ...state, userName: action.value };
      case 'SET_DATA_PASSWORD':
        return { ...state, password: action.value };
      default: 
        return state;
    }
  };
export default reducer;
  