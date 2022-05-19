import Link from 'next/link'

import styles from './button.module.scss'

export default function Button({lbel, path}) {
    return <button className={StyleSheet.btn}>
        {path ?
            <link href={path}>
                <a>{label}</a>
            </link>
            :
                label

            }
        </button>
}