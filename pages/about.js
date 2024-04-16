import React from 'react'
import styles from '../styles/about.module.css'

function about() {
  return (
    <div className = {styles.main}>
      <div className = {styles.aboutHero}>
          <h2>hi! welcome to my webspace</h2>
      </div>
      <div className = {styles.aboutDescription}>
        <div className={styles.half}>
          <h2>who am i</h2>
          <p>I&#39;m a second year Mechanical Engineering Student at University of Waterloo. My main interests are in Robotics Design, System Integration and Additive Manufacturing.I&#39;m just wrapping up my internship at IKO industries as a mechanical engineering intern, and currently seeking opportunities for Fall 2024 term.</p>
          <p>In my free time, I work on personal projects to further my skills in engineering, most recently completing the ESP32 Hexapod, named Mech. My obsession with 3D printing since 2017 has allowed me to be versed in additive manufacturing techniques especially with design constraints with CAD.</p>
          <p>When I&#39;m not working hard academically - hehe - you&#39;ll find me working on media projects through my business, JWD Creative House. I produce cinematic content for events and businesses in Toronto and Seoul. If you ever go to a car show in toronto, chances are JWD Creative House is working with them!</p>
        </div>
        <div className={styles.half} id = {styles.cimg}>
            <div className = {styles.contactimg}>
              
            </div>
        </div>
      </div>

    </div>
  )
}

export default about
