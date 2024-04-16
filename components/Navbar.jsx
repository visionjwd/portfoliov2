
import React, { useEffect } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/navbar.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { usePathname } from 'next/navigation'
import { motion, useScroll, useTransform } from "framer-motion";


function Navbar() {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();
  const[scaleValue, setScale] = useState(1);
  const[positionValue, setPosition] = useState(0);
  let scale = useTransform(scrollYProgress, [0, .25], [scaleValue, 1]);
  let position = useTransform(scrollYProgress, [0, .25], [positionValue, 0]);
  

  useEffect(() => {
    if (pathname === '/') {
      setPosition(300);
      setScale(4.5);
    } else {
      setPosition(0);
      setScale(1);
    }
  }, [pathname]);
  const [openLinks, setLinks] = useState(false)

  const toggleNav = () => {
    setLinks(!openLinks);
  }
  return (
    <nav className = {styles.primarywrapper} id = {openLinks ? styles.open : styles.close}>
        
        <div className = {styles.menuOpen} onClick = {toggleNav}>
          <div className = {styles.menuHalf}>
            <Link href = '/'>1.HOME</Link>
            <Link href = '/about'>2.ABOUT</Link>
          </div>
          <div className = {styles.menuHalf}>
            <Link href = '/projects'>3.PROJECTS</Link>
            <Link href = '#contact'>4.CONTACT</Link>
          </div>
        </div>
        <div className = {styles.desktopnav}>
        <div className = {styles.half} id = {styles.navlinks}>
            <Link href = 'https://instagram.com/visionjwd' target = "_blank" rel="noreferrer" >
                <InstagramIcon/>
            </Link>
            <Link href = 'https://Linkedin.com/in/junwoooh/' target = "_blank" rel="noreferrer" >
                <LinkedInIcon/>
            </Link> 
            <Link href = 'https://jwdcreativehouse.ca' target = "_blank" rel="noreferrer" >
                <CameraAltOutlinedIcon/>
            </Link>
        </div>
        <div className = {styles.imagecenter}>
        <Link href = '/'>
             <motion.h1 style={{scale, translateY: position}} priority alt = '/' id = {styles.desktopLogo}>JUNWOO</motion.h1>
        </Link>
        </div>
        <div className = {styles.half} id = {styles.mobileLogo}>
          <Link href = '/'>
            <h1 priority alt = '/' id = {styles.desktopLogo}>JUNWOO</h1>
            </Link>
        </div>
        <div className = {styles.half} id = {styles.menuButton}> 
            <button onClick={toggleNav}>
              <AddCircleOutlineOutlinedIcon/>
            </button>
        </div>
        
      </div>
      
    </nav>
  )
}

export default Navbar
