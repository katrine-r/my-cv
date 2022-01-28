import React from 'react'
import classes from './Layout.module.css'
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';

const Layout = () => {
    return (
        <div className={classes.Layout}>
            <main>
                <Outlet />
                <Sidebar />
            </main>
        </div>
    )
}

export default Layout