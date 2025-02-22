import React from 'react'
import { assets } from '../../assets/assets_admin/assets'

const AddDoctor = () => {
  return (
    <form action="">
        <p>
            Add Doctor

        </p>
        <div>
            <div>
                <label htmlFor="doc-img">
                    <img src={assets.upload_area} alt="" />
                </label>
                <input type="file" id='doc-img' hidden  />
                <p>Upload doctor picture</p>
            </div>
            <div>
                <div>
                    <div>
                        <p>Doctor name</p>
                        <input type="text" placeholder='Name' required />
                    </div>
                    <div>
                        <p>Doctor email</p>
                        <input type="email" placeholder='Email' required />
                    </div>

                    <div>
                        <p>Doctor Password</p>
                        <input type="password" placeholder='Password' required />
                    </div>

                    <div>
                        <p>Experience</p>
                        <select name="" id="">
                            <option value="1 Year">1 Year</option>
                            <option value="2 Year">2 Year</option>
                            <option value="3 Year">3 Year</option>
                            <option value="4 Year">4 Year</option>
                            <option value="5 Year">5 Year</option>
                            <option value="6 Year">6 Year</option>
                            <option value="7 Year">7 Year</option>
                            <option value="8 Year">8 Year</option>
                            <option value="9 Year">9 Year</option>
                            <option value="10 Year">10 Year</option>
                        </select>
                    </div>
                    <div>
                        <p>Fees</p>
                        <input type="number" placeholder='Fee' required />
                    </div>
                    <div>
                        <div>
                            <p>Speciality</p>
                            <select name="" id="">
                                <option value="General Physician">General Physician</option>
                                <option value="Gynecologist">Gynecologist</option>
                                <option value="Dermatologist">Dermatologist</option>
                                <option value="Pediatricians">Pediatricians</option>
                                <option value="Neurologist">Neurologist</option>
                                <option value="Gastroenterologist">Gastroenterologist</option>
                            </select>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
  )
}

export default AddDoctor