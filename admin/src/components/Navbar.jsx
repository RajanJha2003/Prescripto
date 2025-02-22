import React, { useContext } from 'react'
import {assets} from '../assets/assets_admin/assets'
import { AdminContext } from '../context/AdminContext'

import {useNavigation} from 'react-router-dom'

const Navbar = () => {
    const {adminToken,setAdminToken}=useContext(AdminContext);

    const navigate=useNavigate();


    const logout=()=>{
        navigate('/')
        adminToken && setAdminToken('')
        adminToken && localStorage.removeItem('adminToken')
    }
  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white' >
        <div className='flex items-center gap-2 text-xs '>
            <img className='w-26 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="" />
            <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600 '>
                {adminToken? 'Admin':'Doctor'}

            </p>
        </div>
        <button onClick={logout} className='bg-[#5f6FFF] text-white px-10 py-2 rounded-full '>
            Logout
        </button>

    </div>
  )
}

export default Navbar