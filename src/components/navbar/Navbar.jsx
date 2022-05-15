import React from 'react'
import styles from './Navbar.module.scss'

function Navbar() {
    return (
        <nav className={`${styles.nav_container}`}>
            <div className='container flex align-center justify-between'>
                <span className={styles.logo}>TransMonitor</span>
                <div>
                    <label htmlFor='nav-input' ><img src='./icons/search.svg' alt='logo' /></label>
                    <input placeholder='Search...' type="text" className={styles.input} id="nav-input" />
                </div>
                <ul className={`${styles.right_nav} flex align-center`}>
                    <li>Support</li>
                    <li>FAQ</li>
                    <li>
                        <img src='./icons/bell.svg' alt='notification' />
                    </li>
                    <li className={`${styles.user} flex`}>
                        <div>
                            <small>Hello</small>
                            <p>Oluwaleke Ojo</p>
                        </div>
                        <img src='./images/user.png' alt='user' className='ml-3' />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar