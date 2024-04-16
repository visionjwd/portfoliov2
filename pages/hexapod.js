import React from 'react'
import hexapodimg from '../assets/hexapod.jpg'
import styles from '../styles/projectdetails.module.css'

function hexapod() {
  return (
    <div className = {styles.main}>
        <div className = {styles.title}>
            <h2>Hexapod</h2>
        </div>
        <div className = {styles.overview}>
            <div className = {styles.half}>
                <img src = {hexapodimg.src} className = {styles.image}/>
            </div>
            <div className = {styles.half}>
                <div className = {styles.details}>
                    <h3>Project: Hexapod</h3>
                    <h3>Overview:</h3>
                    <p>3D printed hexapod powered by ESP32 and MG996R servos, controlled by a PS4 controller through an open source library for ESP32. Inverse Kinematics algorithm using DH parameter was implemented in C++, with PCA9685 PWM motor controllers used to control the servos. Future plans include a gyroscope to dynamically balance on uneven surfaces. </p>
                    <h3>Skills:</h3>
                    <p>FEA, Load Analysis, Design Analysis, System Integration, C++, Circuit Analysis</p>
                </div>
            </div>
        </div>
        <div className = {styles.overview}>
            <div className = {styles.flex2}>
                <h2>MECHANICAL DESIGN</h2>
                <p>- </p>
            </div>
            <div className = {styles.flex1}>

            </div>
        </div>
    </div>
  )
}

export default hexapod
