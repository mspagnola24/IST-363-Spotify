import Link from 'next/link'

import Heading from '../..components/Heading'
import Layout from '../..components/Layout'

import { getTracks } from '../../lib/api'

export async function getStaticProps() {
    const data = getTracks();

    return {
        props: {
            tracks 
        }
    }
}

const TracksLandingPage = ({ tracks }) => {
    console.log({ tracks });
    return <Layout>
        <Heading level = "1">
            All Tracks
        </Heading>
        {tracks.map((track, index) => {
            const { title, slug } = track; 
            return <p key={index}>
                <Link href={`/tracks/${track.slug}`}>
                    <a>
                    {track.title}
                    </a>
                </Link>
            </p>
        })}
    </Layout>
}
export default TracksLandingPage;
