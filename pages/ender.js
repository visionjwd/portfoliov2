import React from 'react'
import ender3 from '../assets/v3ke.jpg'
import analysis from '../assets/rootcause.jpg'
import quali from '../assets/qualitycheck.jpg'
import assembly from '../assets/assembly.png'
import styles from '../styles/projectdetails.module.css'

function ender() {
  return (
    <div className = {styles.main}>
        <div className = {styles.title}>
            <h2>ENDER 3 V3 KE</h2>
        </div>
        <div className = {styles.overview}>
            <div className = {styles.half}>
                <img src = {ender3.src} className = {styles.image}/>
            </div>
            <div className = {styles.half}>
                <div className = {styles.details}>
                    <h3>Project: Ender 3 Improvements</h3>
                    <h3>Overview:</h3>
                    <p>Independant RCA conducted to drastically improve print quality of Creality Ender 3 V3 KE. Both Mechanical and Structural solutions were implemented after meticulous data collection of the problem source. </p>
                    <h3>Skills:</h3>
                    <p>FEA, Root-Cause Analysis, CAD, Data collection/analysis, GD&T</p>
                </div>
            </div>
        </div>
        <div className = {styles.overview}>
            <div className = {styles.flex2}>
                <h2>Problem Diagnosis</h2>
                <p> Ender 3 V3 KE suffered from irregular layer extrusions from the initial print tests. </p>
                <p>Through recording the bed movement and gantry vibrations during a test print, it was apparent that both Z axis and Y axis suffered from mechanical vibration issues. Additional input shaping calibration with a gyro yielded no significant improvement on print quality, therefore it was determined that a mechanical solution was to be implemented. </p>
                <p><span>Image: </span>By recording the Top Gantry during a 300mm/s print, I was able to measure the average travel distance of the gantry during sudden movements to be 6.5mm.</p>
            </div>
            <div className = {styles.flex1}>
                <img src = {analysis.src} className = {styles.projectImage}/>
            </div>
        </div>
        <div className = {styles.overview} id = {styles.flipped}>
            <div className = {styles.flex1}>

            </div>
            <div className = {styles.flex2}>
                <h2>Solution Concept</h2>
                <p><span>1. </span>The bed vibration issue was partially resolved through the replacement of linear rods with a proper h7 tolerance machined rod with WD-40 lubricant, limiting wobbles caused by incorrect tolerance fit.</p>
                <p><span>2. </span>I decided to custom build a gantry structural improvement taking inspiration from taller bed-slinger printers such as the Elegoo Neptune 4 that implements this very solution to combat gantry vibrations. </p>
            </div>
        </div>
        <div className = {styles.overview}>
            <div className = {styles.flex2}>
                <h2>CAD & Print</h2>
                <p><span>Major Issue 1: </span>I bought this printer on January 20th, 2024, and got started on improvements just 3 days after. The problem with buying a brand new printer was that there was absolutely <span>0</span> information on the dimensions or any technical drawings available for this. </p>
                <p>As any Mech Eng student would, I modeled the entire printer with +- 0.2mm tolerance from measurements in order to design the fixture parts.</p>
                <p>Utilizing the existing M3 screws on the bottom and top of the printer, the attachment pieces would be secured properly to the structural elements of the printer.</p>
            </div>
            <div className = {styles.flex1}>
                <img src = {assembly.src} className = {styles.projectImage}/>
            </div>
        </div>
        <div className = {styles.overview} id = {styles.flipped}>
            <div className = {styles.flex1}>
                <img src = {quali.src} className = {styles.projectImage}/>
            </div>
            <div className = {styles.flex2}>
                <h2>Implementation & Results</h2>
                <p>Visually, with the same slicer settings and filaments from the same brand, there was a drastic improvement in print quality, with significantly less visible layer irregularity.</p>
                <p>To quantify the improvement, the same test for the gantry was conducted, and the average vibration was measured to be around 3.4 - 3.5mm, a 52% decrease from the original amount. </p>
                <p><span>Future upgrades: </span>Currently in the middle of implementing linear rails for the y-axis, as the replaced linear rods still show slight vibration during fast prints exceeding 200mm/s.</p>
            </div>
        </div>
    </div>
  )
}

export default ender
