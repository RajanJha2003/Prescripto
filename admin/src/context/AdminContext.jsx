import { createContext, useState } from "react";


export const AdminContext=createContext();



const AdminContextProvider = (props) => {    

    const [adminToken,setAdminToken]=useState('');
    const backendUrl=import.meta.env.VITE_BACKEND_URL;


    const values={
        adminToken,
        setAdminToken,
        backendUrl
    }

    return(
        <AdminContext.Provider value={values}>
            {props.children}
        </AdminContext.Provider>
    )

    

}


export default AdminContextProvider;