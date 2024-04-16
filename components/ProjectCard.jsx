import React from 'react'
import styles from '../styles/projectcard.module.css'
import Link from 'next/link'

function ProjectCard(props) {
  return (
    <div className = {styles.wrapper}>
      <div className = {styles.bg} style={{ backgroundImage: `url(${props.bgi})`}}> 
      <div className = {styles.overlay}>
        <div className = {styles.overlayText}>
          <h2>{props.Title}</h2>
          <p>{props.description}</p>
        </div>
        <Link href = {props.whereto}>
          <button id = "herobutton">DETAILS</button>
        </Link>
      </div>  
      </div>

        <div className = {styles.skillContainer}>
          <p id = "skills">{props.skill1}</p>
          <p id = "skills">{props.skill2}</p>
          <p id = "skills">{props.skill3}</p>
          <p id = "skills">{props.skill4}</p>
        </div>
    </div>
  )
}

export default ProjectCard
