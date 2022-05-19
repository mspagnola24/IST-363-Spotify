import classNames from 'classnames/bind'

import Link from 'next/link'

import styles from './nav.module.scss'

let cx = classNames.bind(styles) 

const navLinks = [
    {
        label: "Premium",
        slug: "premium"
    },
    {
        label: "Support",
        slug: "support"
    },
    {
        label: "Download",
        slug: "download"
    },
    {
        label: "Account",
        slug: "account"
    },
    {
        label: "Logout",
        slug: "logout"
    }

];

const Nav = ({ mobile, flexDirection }) => {
    let navClasses = cx({
        nav : true,
        mobile : mobile,

    })
    let listClasses = cx({
        list: true,
        [`flex-direction-${flexDirection}`] : flexDirection
    })
    return <nav className={navClasses}> 
        <ul className={styles.list}>
            {navLinks.map((navLink, index) => {
                return <li key={index} className={styles.
                listItem}>
                    <Link 
                    href={`/${navLink.slug}`}
                    className={styles.link}
                    >

                        <a>
                    {navLink.label}
                        </a>
                    </Link>
                </li> 
            })} 
        </ul>
    </nav>
}
export default Nav;