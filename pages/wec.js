import React from 'react'
import hexapodimg from '../assets/hexapod.jpg'
import styles from '../styles/projectdetails.module.css'

function wec() {
  return (
    <div className = {styles.main}>
    <div className = {styles.title}>
        <h2>Waterloo Engineering Competition</h2>
    </div>
    <div className = {styles.overview}>
        <div className = {styles.half}>
            <img src = {hexapodimg.src} className = {styles.image}/>
        </div>
        <div className = {styles.half}>
            <div className = {styles.details}>
                <h3>Project: Hexapod</h3>
                <h3>Overview:</h3>
                <p>Arduino powered waste collection robot built in a single day from ideation to production as part of Waterloo Engineering Senior Competition 2023. With cost being part of the competition, cost benefit analysis was involved in order to produce the most suitable robot for the cheapest price. </p>
                <h3>Skills:</h3>
                <p>Rapid Prototyping, Arduino, Cost Benefit Analysis, Python, Teamwork</p>
            </div>
        </div>
    </div>
    <div className = {styles.overview}>
        <div className = {styles.flex2}>
        </div>
        <div className = {styles.flex1}>

        </div>
    </div>
</div>
  )
}

export default wec
