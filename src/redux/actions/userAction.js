import axios from "axios";

// Ten hanh dong
export const GET_ALL_USER_LOADING = "user@GET_ALL_USER_LOADING";
export const GET_ALL_USER_SUCCESS = "user@GET_ALL_USER_SUCCESS";
export const GET_ALL_USER_FAILURE = "user@GET_ALL_USER_FAILURE";
export const DELETE_USER = "user@DELETE_USER";
export const ADD_USER ="user@ADD_USER";
export const GET_EDIT_USER ="user@GET_EDIT_USER";
export const ADD_EDIT_USER = "user@ADD_EDIT_USER";

export const getAllUser = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_USER_LOADING });
    try {
      const dulieu = await axios.get("http://localhost:3000/users");
      if (dulieu.data.length > 0) {
        dispatch({ type: GET_ALL_USER_SUCCESS, payload:dulieu.data });
      }
    } catch (error) {
      dispatch({ type: GET_ALL_USER_FAILURE, payload: "Da that bai" });
    }
  };
};
export const deleteUser = (id) => {
  return async (dispatch) => {
      await axios.delete(`http://localhost:3000/users/${id}`);
            dispatch({ type: DELETE_USER,payload:id})
    };
}
export const addUser = (Elements,users) => {
  return async (dispatch) => {
    try {  
      const newItem = users.some(x => x.id === Elements.id);
      if (newItem==false){
        alert("POST" + Elements)
        axios.post(`http://localhost:3000/users/`,Elements).then(
          alert("DA POST ")
        );
        dispatch({ type: ADD_USER,payload:Elements}); 
      }
      else{
          axios.put(`http://localhost:3000/users/${Elements.id}`,Elements).then(
            alert("DA PUT")
          );
          dispatch({ type: ADD_USER,payload:Elements});
        }     
    } catch (error) { 
        alert("Lỗi: "+error.message)
    }
    };
}
export const addEditUser=(Elements)=>{
  return async (dispatch) => {
          dispatch({ type: ADD_USER,payload:Elements});
          axios.put(`http://localhost:3000/users/${Elements.id}`,Elements).then(
            alert("DA PUT")
          );
  }
}
export const editUser = (item) => {
  return async (dispatch) => {
            dispatch({ type: GET_EDIT_USER,payload:item})
    };
}

