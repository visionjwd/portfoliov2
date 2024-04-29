import React from 'react'
import hexapodimg from '../assets/hexapod.jpg'
import styles from '../styles/projectdetails.module.css'
import Head from 'next/head'

function hexapod() {
  return (
    <div className = {styles.main}>
        <Head>
        <title>Projects - Hexapod</title>
        <meta name="description" content="Project Details - Hexapod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
                    <p>3D printed hexapod powered by ESP32 and MG996R servos, controlled by a PS4 controller through an open source library for ESP32. Inverse Kinematics algorithm was implemented in C++, with PCA9685 PWM motor controllers used to control the servos. Future plans include a gyroscope to dynamically balance on uneven surfaces. </p>
                    <h3>Skills:</h3>
                    <p>FEA, Load Analysis, Design Analysis, System Integration, C++, Circuit Analysis, Inverse Kinematics</p>
                </div>
            </div>
        </div>
        <div className = {styles.overview}>
            <div className = {styles.flex2}>
                <h2>MECHANICAL DESIGN</h2>
                <p><span>Initial Calculations: </span>Each MG996R servos have a torque rating of 12kg/cm, so keeping that in mind the body was designed to be minimal in weight. Printed at just 10% infill in order to keep it lightweight while keeping the design asthetic, 2 lightweight carbon fiber rods were utilized as structural support for the main body.</p>
                <p><span>Topology Optimization: </span> Forthe legs, topology optimization feature in combination with FEA analysis in Fusion360 was used to minimize weight, with each component&#39;s optimization setting at 60% of original weight.</p>
                <p>As well as these, proper tolerance values for a transitional fit was utilized. This stage also involved measuring my 3D printer&#39;s dimensional accuracy values, therefore each attachment&#39;s tolerance values were adjusted .25mm in the x direction and -0.1mm in the y direction accordingly.</p>
            </div>
            <div className = {styles.flex1}>

            </div>
        </div>
        <div className = {styles.overview}>
            <div className = {styles.flex1}>

            </div>
            <div className = {styles.flex2}>
                <h2>HARDWARE CONFIGURATION</h2>
                <p>Each Servo used has a voltage rating of 6v, with max current at stall being 2.4A. In order to supply a constant voltage for all 18 servos, a 3S lipo battery was utilized with a DC buck converter to step the voltage down from 11.6v to 5.5V, as well as setting a max current rating of 5A to ensure that the PCA9685 servo drivers are protected.</p>
                <p>ESP32 was used for it's built in bluetooth connectivity which I am using to pair it to my PS4 controller for inputs. With the 3S battery's voltage being 11.6V, I can wire it directly to the ESP32 without needing to step down the voltage again.</p>
                <p>All the hardware components are mounted directly in the center of the bot as to keep the balance.</p>
            </div>
        </div>
        <div className = {styles.overview}>
            <div className = {styles.flex2}>
                <h2>INVERSE KINEMATICS</h2>
                <p>In regards to the Inverse Kinematics algorithm, each leg utilizes the same formula within it's local coordinates, which are then unified with global coordinates with repect to the Hexapod&#39;s center.</p>
                <p>Utilizing PlatformIO over Arduino IDE for firmware development was a superior choice as it made it easier to follow a more traditional C++ programming environment, as well as being able to utilize trusted libraries for PS4 controller input and output.</p>
            </div>
            <div className = {styles.flex1}>

            </div>
        </div>
    </div>
  )
}

export default hexapod
