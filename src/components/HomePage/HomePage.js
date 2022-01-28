import React from 'react'
import myPhoto_2472 from '../../myPhoto_2472.jpg'
import classes from './HomePage.module.css'

const HomePage = () => {
    return (
        <div 
            className={classes.HomePage} 
            style={{
                backgroundImage: `url(${myPhoto_2472})`, 
                backgroundRepeat  : 'no-repeat',
                backgroundPosition: 'center', 
                backgroundSize: 'cover'
            }} 
        >
            <div className={classes.MyInfo}>
                <h2>Привет, я</h2>
                <h1>Катерина Романенко</h1>
                <h3>Frontend Developer</h3>
            </div>
        </div>
    )
}

export default HomePage