import classNames from 'classnames/bind'
import styles from './row.module.scss'

let cx = classNames.bind(styles)

const Row = ({children, justifyContent, alignItems}) => {
	let rowClasses = cx({
		row : true,
		[`justify-content-${justifyContent}`] : justifyContent,
		[`align-items-${alignItems}`] : alignItems
	})
	return <div className={rowClasses}>{children}</div>
}
export default Row;
