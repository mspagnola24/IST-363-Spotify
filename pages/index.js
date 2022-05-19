import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// custom components
import Button from '../components/Button'
import Col from '../components/Col'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import Paragraph from '../components/Paragraph'
import Row from '../components/Row'
import TracksByGenre from '../components/TracksByGenre'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Creeeeeeeeeeeate Next App</title>
        <link rel="icon" href="/favicon.ico" />
		<meta name="description" content="This is a summary of my website"/>
      </Head>
	  <section>
		  <Container>
			  <Row>
				  <Col sm="6" md="4" lg="3">Col 1</Col>
				  <Col sm="6" md="4" lg="3">Col 2</Col>
				  <Col sm="6" md="4" lg="3">Col 3</Col>
			  </Row>
		  </Container>
	  </section>

	<main>

		<Image 
			src="/images/profile.jpg"
			width={200}
			height={200}
			alt="Jeff Passetti"
		/>
        <Heading level="1">
			<Link href="/posts/first-post">
				<a>Firrrrrrrrrst post</a>
			</Link>
        </Heading>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

		<Heading level="1">
			contact page title
		</Heading>
		<Heading level="2">
			Song title goes here
		</Heading>
		<Heading level="3">
			Song title goes here
		</Heading>

		<Paragraph intro>
			This is an intro paragraph
		</Paragraph>
		<Paragraph>
			This is a paragraph
		</Paragraph>

		<Button 
			label="Register now"
			path="/posts/first-post"
			type="primary" 
		/>
		<Button 
			label="Download now" 
			path="/download"
			type="secondary"
		/>

		<TracksByGenre />
	
      </main>

      <footer>
		IST 363 Spotify prototype.
      </footer>
    </Layout>
  )
}
