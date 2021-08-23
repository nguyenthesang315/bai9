
import {
  ADD_USER,
  DELETE_USER,
  GET_EDIT_USER,
  GET_ALL_USER_FAILURE,
  GET_ALL_USER_LOADING,
  GET_ALL_USER_SUCCESS,
} from "../actions/userAction";


const INIT_STATE = {
  users: [],
  isLoading: false,
  error: "",
  usersEdit:[]
};
const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case GET_ALL_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case DELETE_USER:
      return{
        ...state,
        users: state.users.filter(users =>users.id !== action.payload),
      }
    case ADD_USER:
      return{
        ...state,
        users:{...state.users,...action.payload} 
      }
    case GET_EDIT_USER:
        return{
          ...state,
          usersEdit:action.payload
        }
    default:
      return state;
  }
};

export default userReducer;
