import sytles from './tracks.module.scss'

const Tracks = () => {
	return <ul>
	{item.map((item, index) => {

			return <li key={index}>
				className
				<h3>{item.title}</h3>
				<h4>{item.artist}</h4>
			</li>
		})}
	</ul>
}
export default Tracks; 
