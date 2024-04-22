import React from 'react'
import group from '../assets/tmmcgroup.jpg'
import enginebay from '../assets/Engine.jpg'
import dataset from '../assets/dataset.jpg'
import cv from '../assets/py.jpg'
import styles from '../styles/projectdetails.module.css'
import Link from 'next/link'

function tmmc() {
  return (
    <div className = {styles.main}>
        <Head>
        <title>Projects - TMMC ML Dev</title>
        <meta name="description" content="Project Details - TMMC Machine Learning Dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className = {styles.title}>
            <h2>Toyota Assembly Line Body Hole Detection</h2>
        </div>
        <div className = {styles.overview}>
            <div className = {styles.half}>
                <img src = {group.src} className = {styles.image}/>
            </div>
            <div className = {styles.half}>
                <div className = {styles.details}>
                    <h3>Project: TMMC Auto Body Hole Detection Program</h3>
                    <h3>Overview:</h3>
                    <p>A YOLOv8 trained OpenCV model applicable to detecting body hole coverage states on a simulated auto assembly line at Toyota Canada. The detection model has a 94% accuracy rate accross 3 different lighting condition closely immitating the environment at the factory.</p>
                    <h3>Skills:</h3>
                    <p>OpenCV, Python, Data Collection, Project Management</p>
                    <Link href = "https://colab.research.google.com/drive/1yZ7atIrTI75b2AXXO9ZwbUu21SROY5pa?usp=sharing" target = "_blank" rel="noreferrer" >
                      View
                    </Link>
                </div>
            </div>
        </div>
        <div className = {styles.overview}>
            <div className = {styles.flex2}>
                <h2>Problem Statement</h2>
                <p>Every vehicle produced at Toyota Motor Manufacturing Canada has body holes which needs to be covered by a sticker completely as part of the manufacturing process. </p>
                <p>The purpose of this hackathon was to develop an automated coverage detection model that could potentially be implemented at the plant which would save hours of manual labour. </p>
            </div>
            <div className = {styles.flex1}>
                <img src = {enginebay.src} className = {styles.projectImage}/>
            </div>
        </div>
        <div className = {styles.overview} id = {styles.flipped}>
            <div className = {styles.flex1}>
                <img src = {cv.src} className = {styles.projectImage}/>
            </div>
            <div className = {styles.flex2}>
                <h2>Solution Concept</h2>
                <p><span>1. </span>The intial part of the hackthon was spent in optimizing hole detection through OpenCV. One of the big challenges were the variations in lighting conditions and angles. The core functions of OpenCV such as houghcircle detection, exposure adjustments, thresholding and contour approximation was utilized to detect holes efficiently in the scripts. </p>
                <p><span>2. </span>Due to the nature of hole stickers being similar in size and colour, I decided to shift the development direction to utilize Tensorflow Machine Learning training from this point as the project manager. It was under the conclusion that it would provide much better results compared to what we could collectively achieve with out limited skillset with python and opencv, as well as being able to increase accuracy through meticuous data verification. </p>
                <p><span>Image: </span>Initial trials of hole detection and area calculation through thresholding and houghcircle functions.</p>
            </div>
        </div>
        <div className = {styles.overview}>
            <div className = {styles.flex2}>
                <h2>Data Collection & Validation</h2>
                <p><span>Image Data Collection: </span>Over 90 pictures were taken with systematic variation of angles and lightning condition optimized for the final judging setup. Those 90 images were then duplicated twice to simulate different exposure level, saturation, and blurriness to train the model.</p>
                <p>With 20 epochs in the YoloV8 model, the final product which incorporated the YoloV8 model with additional OpenCV Video feed manupulation that achieved 97% accuracy over 80+ detection points at 85% confidence threshold. </p>
            </div>
            <div className = {styles.flex1}>
                <img src = {dataset.src} className = {styles.projectImage}/>
            </div>
        </div>
        <div className = {styles.overview} id = {styles.flipped}>
            <div className = {styles.flex1}>
                <iframe className = {styles.video} src="https://www.youtube.com/embed/YhF-_OoqexY?si=B5SIkFlL6WXCC2h8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className = {styles.flex2}>
                <h2>Result</h2>
                <p><span>Awards: </span>Systematic Engineering Award by the staff at TMMC, recognized for it&#39;s practical applicability in the actual plant.</p>
            </div>
        </div>
    </div>
  )
}

export default tmmc
