import classNames from 'classnames/bind'

import styles from './tabs/module.scss'

let cx = classNames.bind(styles)

const Tabs = ({items, activeItem}) => {
    return <ul className={styles.tabs}>
        {items.map((item, index) => {
            let tabItemClasses = cx({
                tabItem : true,
                active : activeItem === item
        })
            return <li key={index}> className={styles.tabItem}{item}</li>

        })}
    </ul>
}
export default Tabs; 