import React from 'react'
import style from '../styles/ContactIcon.module.css'
import Link from 'next/link';



function ContactIcon(props) {
  return (
    <Link href = {props.whereTo} target = "_blank" rel="noreferrer"  className = {style.wrapper}>
          {props.logo}
    </Link>
  )
}

export default ContactIcon