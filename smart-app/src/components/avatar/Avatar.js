import React from 'react'
import styles from './Avatar.css'

const Avatar = ({ avatar, name }) => {
    return(
        <div className={styles.avatar}>
            <div className={styles.avatarImage}>
                {/* <img src={avatar} alt={name}/> */}
            </div>
            <h3>{name}</h3>
        </div>
    )
}

export default Avatar