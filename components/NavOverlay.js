import ButtonUI from './ButtonUI'
import Logo from './Logo'
import Nav from './Nav'

import styles from './navoverlay.module.scss'

const NavOverlay = ({ clickHandler }) => {
    return <div className={styles.navOverlay}>
        <Logo color="white" size={2}/>
        <Nav mobile flexDirection="column"/>
        <ButtonUI 
            icon="close" 
            color="white"
            clickHandler={() => {
                clickHandler(false)
            }}
        />
    </div>
}
export default NavOverlay; 