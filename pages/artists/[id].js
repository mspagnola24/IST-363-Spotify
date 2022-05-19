import Col from '../..components/Col'
import Heading from '../../components/Heading'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Link from 'next/link'
import Row from '../..components/Row'


import { getAllArtistSLugs, getSingleArtistData } from '../..lib/api' 

export async function getStaticPaths() {
    const paths = await getAllArtistsSlugs();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const artistData = getSingleArtistData(params.id);
    return {
        props: {
            artistData
        }
    }

}

const SingleArtistPage = ({ artistData }) => {
    const { title, featuredImage, artistInformation} = artistData.matchingArtist;
    const { sourceUrl, altText, mediaDetails } = featuredImage.node;
    const { artistsToAlbums } = artistinformation;
    return <Layout>
        <Image 
            src={sourceUrl}
            alt={altText}
            width={mediaDetails.width}
            height={mediaDetails.height} 
        />
        <Heading level="1">{title}</Heading>
        <section>
            <Heading level="2">Albums</Heading>
            <Row>
            {artistsToAlbums.map((album) => {
                const { title, slug, featuredImage } = album;
                const {sourceUrl, altText, mediaDetails } = featuredImage.node;
                return <Col xs="6" sm="4" md="3">
                    <Link href={`/albums/${slug}`}>
                        <a>
                    <Image 
                        src={sourceUrl}
                        alt={altText}
                        width={mediaDetails.width}
                        height={mediaDetails.height}
                    />
                        </a>
                    </Link>
                    <Heading level="3">{title}</Heading>
                </Col>
            })}
            </Row>
        </section>
    </Layout>
}

export default SingleArtistPage; 