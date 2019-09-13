const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_DATA_CAT':
      return { ...state, loading: true };
    case 'SET_DATA_CAT':
      return { ...state, dataCat: action.data, loading: false }
    case 'GET_DATA_DOG':
      return { ...state, loading: true };
    case 'SET_DATA_DOG':
      return { ...state, dataDog: action.data.message, loading: false }
    default: 
      return state;
  }
 };
 
 export default reducer;
