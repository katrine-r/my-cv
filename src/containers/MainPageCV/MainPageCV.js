import React, { Component } from 'react'
import classes from './MainPageCV.module.css'
import { SVGiconsSelector } from '../../components/UI/SVGiconsSelector/SVGiconsSelector'
import { Routes, Route } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import HomePage from '../../components/HomePage/HomePage'
import AboutMePage from '../../components/AboutMePage/AboutMePage'

class MainPageCV extends Component {
    state = {
        linksMenu: 
            [
                {
                    to: '/',
                    name: 'Главная',
                    id: 'homePage'
                },
                {
                    to: '/about-me',
                    name: 'Обо мне',
                    id: 'aboutMe'
                },
                {
                    to: '/skills',
                    name: 'Навыки',
                    id: 'skills'
                },
                {
                    to: '/experience',
                    name: 'Опыт работы',
                    id: 'experience'
                },
                {
                    to: '/education',
                    name: 'Образование',
                    id: 'education'
                },
                {
                    to: '/portfolio',
                    name: 'Портфолио',
                    id: 'portfolio'
                },
                {
                    to: '/contact',
                    name: 'Контакты',
                    id: 'contact'
                },
                {
                    to: '/downloadResume',
                    name: 'Мое резюме PDF',
                    id: 'downloadResume'
                },
            ]
    }

    onClickMenuItemHandler = (menuItemId) => {
        console.log('onClick works ', menuItemId )
    }

    render() {
        return(
            <div className={classes.MainPageCV}>
                <button className={classes.MenuBurger}> <SVGiconsSelector id='menuBurger' /> </button>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about-me' element={<AboutMePage />} />
                </Routes>
                <Sidebar 
                    linksMenu={this.state.linksMenu}
                    onMenuClick={this.onClickMenuItemHandler}
                />    
            </div>
        )
    }
}

export default MainPageCV