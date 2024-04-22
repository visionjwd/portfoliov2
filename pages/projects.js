import React from 'react'
import styles from '../styles/projects.module.css'
import hexapod from '../assets/hexapod.jpg'
import ender from '../assets/v3ke.jpg'
import uwfm from '../assets/uwfm.jpg'
import wec from '../assets/WEC.jpg'
import tmmc from '../assets/TMMC.jpg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import Bentodiv from '@/components/Bentodiv';
import Link from 'next/link'
import Head from 'next/head'

function projects() {

  return (
    <div className = {styles.main}>
      <Head>
        <title>Projects by Junwoo</title>
        <meta name="description" content="Projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className = {styles.hero}>
        <h2>My Projects so far:</h2>
        <p>Click on any to see details</p>
      </div>
      <div className = {styles.projectContainer}>
        <div className = {styles.projectSection}>
            <div className = {styles.flex1}>
            <Bentodiv
                bgi = {hexapod.src}
                title = "hexapod"
                whereto = '/hexapod'
            />
            </div>
            <div className = {styles.flex2}>
            <div className = {styles.flexvertical}>
                <div className = {styles.flex2}>
                <div className = {styles.flex1}>
                <Bentodiv
                    bgi = {ender.src}
                    title = "Ender 3 KE"
                    whereto = '/ender'
                />
                </div>
                <div className = {styles.flex2}>
                <Bentodiv
                    bgi = {tmmc.src}
                    title = "Toyota Assembly Line Body Hole Detection"
                    whereto = '/tmmc'
                />
                
                </div>
                </div>
                <div className = {styles.flex1}>
                <div className = {styles.flex2}>
                <Bentodiv
                    bgi = {wec.src}
                    title = "Waste Collection"
                    whereto = '/wec'
                />
                </div>
                <div className = {styles.flex1}>
                <Bentodiv
                    bgi = {uwfm.src}
                    title = "uwfm aero"
                    whereto = '/uwfm'
                />
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className = {styles.projectSection} id = {styles.web}>
          <div className = {styles.flex1}>
            <div className = {styles.flexvertical}>
              <h2>My Web Projects</h2>
              <p>Project built with React, NextJS, Django, and other tech</p>
            </div>
          </div>
          <div className = {styles.flex2} id = {styles.v}>
              <Link href = 'https://jwdcreativehouse.ca'target = "_blank" rel="noreferrer" className = {styles.website} id = {styles.jwd}>
                  <h3>JWD Creative House</h3>
                  <VisibilityIcon/>
              </Link>
              <Link href = '/'className = {styles.website} id = {styles.junwoo}>
                  <h3>This website ^^</h3>
                  <VisibilityIcon/>
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default projects
