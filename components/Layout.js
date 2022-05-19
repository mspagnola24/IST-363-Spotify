import { Fragment } from 'react'

import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
	return <Fragment>
		<Header />
		<main>
			{children}
		</main>
		<Footer />
	</Fragment>
}
