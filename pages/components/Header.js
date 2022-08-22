import React from 'react'
import HeaderStyles from '../../styles/Header.module.scss'
import Link from "next/link"
const logoImg = "https://freepikpsd.com/file/2019/10/logo-design-in-png-2-Transparent-Images-Free.png"

const Header = () => {
    return (
        <div className={HeaderStyles.container}>
        <div className={HeaderStyles.header}>
            <div className={HeaderStyles.logo}>
                <img src={logoImg} alt="Logo img" />
            </div>
            <nav className={HeaderStyles.nav}>
            <ul className={HeaderStyles}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/donate">Donate Denis</Link>
                </li>
                <li>
                    <Link href="/infoapi">API</Link>
                </li>
            </ul>
            </nav>
            <div className={HeaderStyles.accounts}>
                <button>Log in</button>
                <button>Register</button>
            </div>
        </div>
        <div className={HeaderStyles.moto}>
            <h2>Narodowy Bank Polski Currency rates</h2>
            <h5>by Denis P.</h5>
        </div>
        </div>
    )
}

export default Header
