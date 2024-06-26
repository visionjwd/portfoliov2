import React from 'react'
import wecimg from '../assets/WEC.jpg'
import styles from '../styles/projectdetails.module.css'
import Head from 'next/head'

function wec() {
  return (
    <div className = {styles.main}>
        <Head>
        <title>Projects - WEC Waste Collection Robot</title>
        <meta name="description" content="Project Details - WEC Waste Collection Robot" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className = {styles.title}>
        <h2>Waterloo Engineering Competition</h2>
    </div>
    <div className = {styles.overview}>
        <div className = {styles.half}>
            <img src = {wecimg.src} className = {styles.image}/>
        </div>
        <div className = {styles.half}>
            <div className = {styles.details}>
                <h3>Project: Waste Collection Robot</h3>
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
