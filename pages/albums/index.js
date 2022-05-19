import Col from '../..components/Col'
import Heading from '../..components/Heading'
import Image from '../..components/Image'
import Layout from '../../components/Layout'
import Link from '../..components/Link' 
import Paragraph from '../..components/Paragraph'
import Slug from '../..components/Slug' 
import Row from '../..components/Row'

import { getAlbums } from '../../lib/api'

export async function getStaticProps() {
    const albums = getAlbums();
    return {
        props: {
            albums
        }
    }
}

const AlbumsPages = ({ albums }) => {
    return <Layout>
        <Container>
            <Heading level="1">Albums</Heading>
                <Row>
                {albums.map((album,index) => {
                    const { featuredImage, title, slug } = album;
                    const { src, alt, width, height } = featuredImage;
                    return <Col key={index} xs="6" sm="4">
                    <Image 
                        src={`/images/${src}`}
                        alt={alt}
                        width={width}
                        height={height}
                    />
                    <Heading level="3">{title}</Heading>
                    <Paragraph>
                        <Link href={`/albums/${slug}`}>
                            <a>
                                Read more
                            </a>
                        </Link>
                    </Paragraph>
                </Col>
                })}
                </Row>
                </Container>
            </Layout>
}