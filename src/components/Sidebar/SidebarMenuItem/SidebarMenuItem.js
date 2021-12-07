import React from 'react'
import classes from './SidebarMenuItem.module.css'
import { NavLink } from 'react-router-dom'
import { SVGiconsSelector } from '../../UI/SVGiconsSelector/SVGiconsSelector'

const SidebarMenuItem = props => {
    const colorMenu = [classes.SidebarMenuItem]

    if (props.link.id) {
        colorMenu.push(classes[props.link.id])
    }

    return (
        <li className={colorMenu.join(' ')} onClick={() => props.onMenuClick(props.link.id)} >      
            {props.link.id
            ? <NavLink
                to={props.link.to}
            > <SVGiconsSelector id={props.link.id} /> {props.link.name} </NavLink> 
            : null
            }
        </li>
    )
}

export default SidebarMenuItem