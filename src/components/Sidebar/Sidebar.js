import React, { useContext } from 'react'
import classes from './Sidebar.module.css'
import SidebarMenuItem from './SidebarMenuItem/SidebarMenuItem'
import myPhoto_2472 from '../../myPhoto_2472.jpg'
import { SVGiconsSelector } from '../UI/SVGiconsSelector/SVGiconsSelector'
import { LinksMenuContext } from '../../context';

const Sidebar = () => {
    const { linksMenu } = useContext(LinksMenuContext);

    const onClickMenuItemHandler = (menuItemId) => {
      console.log('onClick works ', menuItemId);
    };
    return (
        <div className={classes.Sidebar}>
            <div className={classes.MenuMainInfo}>
                <img src={myPhoto_2472} alt='Katrine' />
                <div className={classes.InfoName}>
                    <h2>Катерина</h2>
                    <h2>Романенко</h2>
                </div>
            </div>
            <nav className={classes.NavMenu}>
                <ul>
                    { linksMenu.map((link, index) => {
                        return (
                            <SidebarMenuItem 
                                key={link.id + index}
                                to={link.to}
                                id={link.id}
                                name={link.name}
                                onClickMenuItemHandler={onClickMenuItemHandler}
                            />
                        )
                    })}
                </ul>
            </nav>
            <div className={classes.MenuSocialNetworks}>
                <a href='#'><SVGiconsSelector id='facebook' /></a>
                <a href='#'><SVGiconsSelector id='instagram' /></a>
                <a href='#'><SVGiconsSelector id='telegram' /></a>
                <a href='#'><SVGiconsSelector id='viber' /></a>
                <a href='#'><SVGiconsSelector id='linkedIn' /></a>
                <a href='#'><SVGiconsSelector id='gitHub' /></a>
            </div>
        </div>
    )
}

export default Sidebar