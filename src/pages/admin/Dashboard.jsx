import React from 'react'
import Logout from '../../authentication/Logout'
import MyStepper from '../../components/admin/MyStepper'
import MasterLayout from '../../components/admin/MasterLayout'

const Dashboard = () => {

    return (
        <div >
            <MasterLayout />
            <Logout />
            <MyStepper />

        </div>

    )
}

export default Dashboard