import React from 'react'
import fmcad from '../assets/uwfm.jpg'
import styles from '../styles/projectdetails.module.css'

function uwfm() {
  return (
    <div className = {styles.main}>
    <div className = {styles.title}>
        <h2>UWFM Aero</h2>
    </div>
    <div className = {styles.overview}>
        <div className = {styles.half}>
            <img src = {fmcad.src} className = {styles.image}/>
        </div>
        <div className = {styles.half}>
            <div className = {styles.details}>
                <h3>Project: UWFM Rear Wing support relocation</h3>
                <h3>Overview:</h3>
                <p>Relocated the rear wing fixture design in order to meet the regulation guidelines. Performed Static FEA and simple CFD to ensure minimal disturbance to rear wing airflow and similar structural rigidity. </p>
                <h3>Skills:</h3>
                <p>FEA, Load Analysis, Design Analysis, CFD, Design Integration</p>
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

export default uwfm
