import React, { PropTypes } from 'react'

import styles from './styles.module.css'

export class HomeContainer extends React.Component {


    render() {
        const state = this.context.store.getState();

        return (
            <div className={ styles.app }>
              Hello World
            </div>
        )
    }
}


HomeContainer.contextTypes = {
    store: PropTypes.object
}


export default HomeContainer
