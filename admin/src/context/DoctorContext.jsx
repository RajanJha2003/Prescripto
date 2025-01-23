import { createContext } from "react";


export const DoctorContext=createContext();



const DoctorContextProvider = (props) => {    

    const values={
         
    }

    return(
        <DoctorContext.Provider value={values}>
            {props.children}
        </DoctorContext.Provider>
    )

    

}


export default DoctorContextProvider;