import React, { Component } from 'react'
import IconDropBox from '../../assets/icon.svg';
import LogoDropBox from '../../assets/logo.svg';

export class logo extends Component {
    render() {
        return (
            <div style={styles.container}>
                <img src={IconDropBox} alt="" style={styles.icon} />
                <img src={LogoDropBox} alt="" style={styles.logo} />
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        margin: '5px'
    },
    logo: {
        margin: '5px'
    }
}

export default logo
