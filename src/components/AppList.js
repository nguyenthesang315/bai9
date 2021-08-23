import React from 'react'
import './AppList.scss'
import { getAllUser,deleteUser,editUser} from "../redux/actions/userAction";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function AppList() {
    const dispatch = useDispatch();
    const { isLoading, users, error } = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(getAllUser())
      }, []);
    return (
        <div>
            <div className="List">
                <div className="List__cover">
                    <div className="List__cover-header">
                        <h3>List</h3>
                    </div>
                    <div className="List__cover-body">
                        <table className="List__cover-body-table">
                            <tr>
                                <th>ID</th>
                                <th>Ho ten</th>
                                <th>Tuoi</th>
                                <th>MSSV</th>
                                <th>Dia chi</th>
                            </tr>
                            {users.length > 0
                                    ? users.map((item, index) => (
                                            <tr id="item" key={index}>     
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.age}</td>
                                                <td>{item.mssv}</td>
                                                <td>{item.adress}</td>
                                                <button onClick={() => dispatch(editUser(item))}>Edit</button>
                                                {/* <button>Edit</button> */}
                                                <button onClick={() => dispatch(deleteUser(item.id))}>Delete</button> 
                                            </tr>  
                                        ))
                                    : null}
                        </table>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
