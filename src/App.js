import "./App.scss";
import AppInfor from "./components/AppInfor";
import AppList from "./components/AppList";
// import { togglePopup } from "./redux/actions/popupAction";
// import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
import { useEffect } from "react";
// // import { useState } from "react";

// import { getAllUser } from "./redux/actions/userAction";

function App() {
  // const dispatch = useDispatch();

  // const { isLoading, users, error } = useSelector((state) => state.user);

  // // const { isOpenPopup } = useSelector((state) => state.popup);

  // // Hook giong useState
  // // Chuc nang: chay vao xu ly ben trong nay khi giao dien da duoc render === componentDidmount trong class component
  // // Co 1 doi so la mang [] neu la mang [] thi no se duoc goi 1 lan duy nhat khi component render, neu truyen doi so vao 
  // // no se kiem tra doi so do co thay doi thi no se duoc goi lai
  // useEffect(() => {
  //   console.log(users);
  // }, []);

  // console.log(users.length);
  
  return (
    <div className="App">
      <div className="App__cover">
        Nguyen The Sang
        <div className="App__cover-Infor">
          <AppInfor/>
        </div>
        <div className="App__cover-List">
          <AppList/>
        </div>
      </div>
      
       
    </div>
  );
}

export default App;
