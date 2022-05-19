import Col from '../..components/Col'
import Heading from '../..components/Heading'
import Image from '../..components/Image'
import Layout from '../../components/Layout'
import Paragraph from '../..components/Paragraph'
import Row from '../..components/Row'

import { getArtists } from '../..lib/api'

export async function getStaticProps() {
    const artists = getArtists();

    return {
        props: {
            artists 
        }
    }

}

const ArtistsLandingPage = ({ artists }) => {
    return <Layout>
        <Heading levels="1">artists</Heading>
        <Row>
        {artists.map((artist, index) => {
            const { title, slug, featuredImage } = artist.node;
            const {soiurceUrl, altText, mediaDetails } = featuredImage.nod;
            return <Col key={index} xs="6" sm="6">
                <Image 
                    src={soureUrl}
                    alt={altText}
                    width={mediaDetails.width}
                    height={mediaDetails.height}
                />
                <Heading level="3">{artist.title}</Heading>
                <Paragraph>
                    <Link href={`/artists/${slug}`}>
                        <a>
                            Read More
                        </a>
                    </Link>
                </Paragraph>
            </Col>
        })}
        </Row>
    </Layout>
}
export default ArtistsLandingPage;