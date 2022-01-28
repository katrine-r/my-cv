import React from 'react'
import classes from './SidebarMenuItem.module.css'
import { NavLink } from 'react-router-dom'
import { SVGiconsSelector } from '../../UI/SVGiconsSelector/SVGiconsSelector'

const SidebarMenuItem = ({ to, id, name, onClickMenuItemHandler }) => {
    const colorMenu = [classes.SidebarMenuItem]

    if (id) {
        colorMenu.push(classes[id])
    }

    return (
        <li className={colorMenu.join(' ')} onClick={() => onClickMenuItemHandler(id)} >      
            { id
                ? <NavLink
                    to={to}
                  > 
                    <SVGiconsSelector id={id} />
                    {name} 
                  </NavLink> 
                : null
            }
        </li>
    )
}

export default SidebarMenuItem