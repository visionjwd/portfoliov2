import React from 'react'
import styles from '../styles/footer.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactIcon from './ContactIcon';

function Footer() {
  return (
    <footer className = {styles.main}>
        <div className = {styles.contact} id = "contact">

        
        <div className = {styles.flex}>
            <h2>Connect with me!</h2>
        </div>
        <div className = {styles.flex}>
            <ContactIcon logo = {<GitHubIcon/>} whereTo = "https://www.github.com/visionjwd"/>
            <ContactIcon logo = {<LinkedInIcon/>} whereTo = "https://www.Linkedin.com/in/junwoooh/"/>
            <ContactIcon logo = {<MailIcon/>} whereTo = "mailto: visionjwd@gmail.com"/>
        </div>
        </div>
        <div className = {styles.footermain}>
        <div className = {styles.footer}>
                <div className = {styles.wrap}>
                    <h1 className = {styles.footerLogo}>JUNWOO</h1>
                </div>
            <div className = {styles.text}>
                <p>@2023 <br/> By Jun Woo Oh</p>
            </div>
      </div>  
      </div>
    </footer>
  )
}

export default Footer
