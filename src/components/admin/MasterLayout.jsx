import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import MyStepper from './MyStepper'

const MasterLayout = () => {
    return (

        <div className='flex flex-col'>
            <div>
                <Navbar />
            </div>
            <div>
                
            </div>
        </div>

        
        
    )
}

export default MasterLayout