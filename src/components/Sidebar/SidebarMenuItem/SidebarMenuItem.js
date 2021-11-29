import React from 'react'
import classes from './SidebarMenuItem.module.css'
import { SVGiconsSelector } from '../../UI/SVGiconsSelector/SVGiconsSelector'

const SidebarMenuItem = props => {
    const colorMenu = [classes.SidebarMenuItem]

    if (props.link.id) {
        colorMenu.push(classes[props.link.id])
    }

    return (
        <li className={colorMenu.join(' ')}>
            {props.link.id
            ? <a href='#'><SVGiconsSelector id={props.link.id} /> {props.link.name} </a> 
            : null
            }
        </li>
    )
}

export default SidebarMenuItem