import React, { Component } from 'react'
import classes from './MainPageCV.module.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import HomePage from '../../components/HomePage/HomePage'
import { SVGiconsSelector } from '../../components/UI/SVGiconsSelector/SVGiconsSelector'

class MainPageCV extends Component {
    state = {
        linksMenu: 
            [
                {
                    name: 'Главная',
                    id: 'homePage'
                },
                {
                    name: 'Обо мне',
                    id: 'aboutMe'
                },
                {
                    name: 'Навыки',
                    id: 'skills'
                },
                {
                    name: 'Опыт работы',
                    id: 'experience'
                },
                {
                    name: 'Образование',
                    id: 'education'
                },
                {
                    name: 'Портфолио',
                    id: 'portfolio'
                },
                {
                    name: 'Контакты',
                    id: 'contact'
                },
                {
                    name: 'Мое резюме PDF',
                    id: 'downloadResume'
                },
            ]
    }

    render() {
        return(
            <div className={classes.MainPageCV}>
                <button className={classes.MenuBurger}> <SVGiconsSelector id='menuBurger' /> </button>
                <HomePage />
                <Sidebar 
                    linksMenu={this.state.linksMenu}
                />
                
            </div>
        )
    }
}

export default MainPageCV