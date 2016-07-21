import React from 'react'

import styles from './styles.module.css'

const LoadingPleaseWait = ({message}) => {
    const display = message || "Please Wait..."
    return (
        <div className={ styles.loading }>
          { display }
        </div>
    )
}

export default LoadingPleaseWait


