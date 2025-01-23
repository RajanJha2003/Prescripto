import { createContext } from "react";


export const AdminContext=createContext();



const AdminContextProvider = (props) => {    

    const values={
         
    }

    return(
        <AdminContext.Provider value={values}>
            {props.children}
        </AdminContext.Provider>
    )

    

}


export default AdminContextProvider;