import React from 'react'
import styles from '../styles/bento.module.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from 'next/link'


function Bentodiv(props) {
  return (
    <div className = {styles.wrapper} style={{ backgroundImage: `url(${props.bgi})`}}>

        <Link href = {props.whereto} className = {styles.overlay}>
            <VisibilityIcon/>
            <h3>{props.title}</h3>
        </Link>
    </div>
  )
}

export default Bentodiv
