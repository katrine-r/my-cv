import React from 'react'
import classes from './AboutMePage.module.css'

const AboutMePage = () => {
    return (
        <div className={classes.AboutMePage}>
            <div className={classes.WrapperAboutMe}>
                <h2>Front-End Developer</h2>
                <h1>Катерина Романенко</h1>
                <p className={classes.AboutMeInfo}>
                    Я готова к саморазвитию и обучению, и хочу получить практический опыт, 
                    работая в команде профессионалов с большим опытом работы. Я хочу расти, 
                    развиваться и совершенствоваться в направлении Front-End Developer 
                    и работать в креативной, сильной и дружной команде.
                </p>
                <p className={classes.AboutMeText}>
                    В течение последних 9-ти лет я работала продавцом-консультантом в магазине. 
                    В этой же компании работала контент-менеджером сайта, занималась разработкой 
                    рекламных макетов в Adobe Photoshop, созданием рекламных объявлений в Google 
                    AdWords, ведением аккаунтов Facebook и Instagram. Программированием, 
                    в частности Frontend разработкой, заинтересовалась примерно год назад, 
                    когда поняла, что я хочу работать по профессии, на которую училась 
                    в техникуме.
                </p>
                <p className={classes.AboutMeText}>
                    Оставаясь на постоянной работе, в свободное время я начала восстанавливать 
                    свои знания HTML и CSS. Сейчас прохожу курс по React JS на платформе Udemy. 
                    На данный момент я написала 2 приложения на React JS: Guess My Number 
                    и Rock Paper Scissors. Посмотреть приложения можно в моем профиле 
                    на GitHub (<a href='https://github.com/katrine-r'>https://github.com/katrine-r</a>).
                </p>
            </div>
        </div>
    )
}

export default AboutMePage