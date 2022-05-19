import { useState } from 'react'

import ButtonUI from './ButtonUI'
import Col from './Col'
import Container from './Container'
import Logo from './Logo'
import Nav from './Nav'
import NavOverlay from './NavOverlay'
import Row from './Row'

import styles from './header.module.scss'

const Header = () => {
    const [isMenuVisable, setMenuVisible] = useState(false);

    return <header className={styles.header}> 
        {isMenuVisible && 
            <NavOverlay clickHandler={setMenuVisible} />
        }
        <Container>
            <Row 
            
                justifyContent="space-between"
                alignItems="center"
            
            >
                <Col xs="3" sm="3">
                    <Logo color="white" size={2} />
                </Col>
                <Col xs="9" sm="9" textAlign="right">
                    <Nav />
                    <ButtonUI 
                        icon="menu"
                        color="white"
                        clickHandler={() => {
                            setMenuVisible(true)
                        }}
                    />
                </Col>
            </Row>
        </Container>
    </header>
}
export default Header;   