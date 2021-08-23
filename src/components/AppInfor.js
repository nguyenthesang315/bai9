import React,{useState} from 'react'
import './AppInfor.scss'
import { addUser,addEditUser} from "../redux/actions/userAction";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from 'axios';



export default function AppInfor() {
   
    const { usersEdit,users } = useSelector((state) => state.user);// state chứa object sinh viên để edit
    const [id, setID] = useState();// sate chứa id để truyền vào ADD object mới
    const [name, setName] = useState('');   // sate chứa name để truyền vào ADD object mới
    const [mssv, setMssv] = useState('');   // sate chứa mssv để truyền vào ADD object mới
    const [age, setAge] = useState(''); // sate chứa age để truyền vào ADD object mới
    const [adress, setAdress] = useState(''); // sate chứa adress để truyền vào ADD object mới
    // State tổng để dispatch vào Action ADD 
    const newElements = {"id":id,"name":`${name}`,"mssv":`${mssv}`,"age":`${age}`,"adress":`${adress}`}
    const dispatch = useDispatch();
    useEffect(()=>{
        async function EditList(){
            try {
                setID(usersEdit.id);
                setMssv(usersEdit.mssv);
                setName(usersEdit.name);
                setAge(usersEdit.age);
                setAdress(usersEdit.adress);
                
            } catch (error) {
               console.log(error.message) 
            }
        }
        EditList();
    },[usersEdit]);
    // const newItem = users.some(x => x.id === id);
    // async function ADD(){
    //     // Biến kiểm tra xem ID của Elements truyền vào có tồn tại trong Users chưa
    //     // alert(newElements)
    //     // alert(newItem) 
    //     // if (newItem == false){
    //         alert("ADD")
    //         debugger;
    //         dispatch(addUser(newElements))
    //     // }
    //     // else{
    //     //     alert("EDIT")
    //     //     debugger;
    //     //     dispatch(addEditUser(newElements))
    //     // }
    // }
    return (
        <div>   
            <form className="Infor">
                <div className="Infor__header">
                    <h2>Profile Information </h2>
                </div>
                <div className="Infor__body">
                    {/* <div className="Infor__body-elements">
                        <label for="id">Id</label><br></br>
                        <input id="id" onChange={event=> setID(event.target.value)} value={id}
                        placeholder="Enter your ID" ></input>
                    </div> */}
                    <div className="Infor__body-elements"> 
                        <label for="name">Họ và tên</label><br></br>
                        <input id="name" onChange={event => setName(event.target.value)} value={name} placeholder="Enter your name" ></input>
                                            
                    </div>
                    <div className="Infor__body-elements">
                        <label for="mssv">MSSV</label><br></br>
                        <input id="mssv" onChange={event => setMssv(event.target.value)} value={mssv} placeholder="Enter your mssv"  ></input>
                                           
                    </div>
                    <div className="Infor__body-elements">
                        <label for="address">Địa chỉ</label><br></br>
                        <input id="address" onChange={event => setAdress(event.target.value)} value={adress}  placeholder="Enter your adress" ></input>
                                    
                    </div>
                    <div className="Infor__body-elements">
                        <label for="age">Tuổi</label><br></br>
                        <input id="age" onChange={event => setAge(event.target.value)} value={age} placeholder="Enter your age"></input>
                    </div>
                </div>                          
                <button id="btnAdd" onClick={() => dispatch(addUser(newElements,users))}>Save Change</button>
                {/* <button id="btnEdit" onClick={() => dispatch(addEditUser(newElements))}>EDIT Sinh vien</button> */}
                {/* <button id="btnAdd" onClick={ADD()}>Thêm Sinh viên</button> */}
            </form>         
        </div>
    )
}

