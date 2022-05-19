import Layout from '../../components/Layout'
import Heading from '../../components/Heading'

import { getAllAlbumSlugs, getSingleAlbumData } from '../../lib/api'

export async function getStaticPaths() {
    const paths = getAllAlbumSlugs();
    return {
        paths,
        fallback: false 
    }
}

export async function getStaticProps({ params }) {
    console.log({ params })
    const albumData = getSingleAlbumData(params.id);
    return {
        props: {
            albumData 
        }
    }  
}

const SingleAlbumPage = ({ albumData }) => {
    const { title } = albumData.matchingAlbum
    return <Layout>
        <Heading level="1">{title}</Heading>
    </Layout>
}
export default SingleAbumPage;