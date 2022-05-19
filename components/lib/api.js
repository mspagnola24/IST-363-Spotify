const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
	const headers = { 'Content-Type': 'application/json' }

	const res = await fetch(API_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	})

	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json.data
}

export function getGenres() {
    const genres = ["Rock", "Country", "Hip-Hop", "All"]
    return genres;
}

export function getTracks () {
    const tracks = [
            {
                title: "Ramble On",
                slug: "ramble-on",
                artist: "Led Zeppelin",
                genre: "Rock"
            },
            {
                title: "Whole Lotta Love",
                slug: "whole-lotta-love",
                artist: "Led Zeppelin",
                genre: "Rock"
            },
            {
                title: "I Walk the Line",
                slug: "i-walk-the-line",
                artist: "Johnny Cash",
                genre: "Country"
            },
            {
                title: "Jolene",
                slug: "jolene",
                artist: "Dolly Parton",
                genre: "Country"
            },
            {
                title: "Where I'm From",
                slug: "where-im-from",
                artist: "Jay-Z",
                genre: "Hip-hop"
            },
            {
                title: "Dead Presidents II",
                slug: "dead-presidents-2",
                artist: "Jay-Z",
                genre: "Hip-hop"
            },
        ];
    return tracks;
}

/*export function getArtists() {
    const artists = [
        {
            title: "Led Zeppelin",
            genre: "Rock",
            slug: "led-zeppelin",
            featuredImage: {
                src: "led-zeppelin.jpg",
                alt: "Led Zeppelin",
                width: 976,
                height: 549
                }
            },
            {
                title: "Johnny Cash",
                genre: "Country",
                slug: "johnny-cash",
                featuredImage: {
                src: "johnny-cash.jpg",
                alt: "Johnny Cash",
                width: 1200,
                height: 800
                }
            }
        ];
                
    return artists;
} */

export async function getArtists() {
	const data = await fetchAPI(`
query MyQuery {
  artists {
    edges {
      node {
        id
        title
        slug
        content
        featuredImage {
          node {
            id
            altText
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
        artistInformation {
          artistsToAlbums {
            ... on Album {
              id
              title
              slug
              featuredImage {
                node {
                  altText
                  sourceUrl
                  mediaDetails {
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`)
	return data.artists.edges
}


export function getAlbums() {
    const albums = [
        {
            title: "Led Zeppelin II",
            slug: "led-zeppelin-ii",
            featuredImage: {
                src: "led-zeppelin-ii.jpg",
                alt: "Led Zeppelin II",
                width: 300,
                height: 300
            }
        },
        {
            title: "I Walk the Line",
            slug: "i-walk-the-line",
            featuredImage: {
                src: "i-walk-the-line.jpg",
                alt: "I Walk The Line - Greatest Hits",
                width: 640,
                height: 640
            }
        } 
    ]};
    return albums

export function filterTracksByGenre(tracks, activeGenre) {
    let filteredTracks = [];

    if (activeGenre === "All") {
        filteredTracks = tracks;
    } else {
        filteredTracks = tracks.filter((track) => {
            return track.genre === activeGenre;
        });
    }
    return filteredTracks;
}

export function getAllTrackPaths() {
    const tracks = getTracks();
    const trackPaths = tracks.map((track) => {
        return {
            params : {
                id : track.slug 
            }
        }
    });
    return trackPaths;
}

export function getSingleTrackData(slug) {
    const tracks = getTracks();

    const matchingTrack = tracks.find((track) => {
        return track.slug === id 
    });

    return { 
        id,
        matchingTrack 

    }
}

export function getAllArtistSLugs() {
    const artists = getArtists();
    const artistSLugs = artists.map((artist) => {
        return {
            params: {
                id: artist.slug
            }
        }
    });
    return artistSLugs;
}


export async function getSingleArtistData($id) {
    const data = await fetchAPI(`
    query Myquery($id: ID!) {
        artist(id: idType: SLUG) {
            id
            title
            featuredImage {
                node {
                    altText
                    mediaDetails {
                        height
                        width
                    }
                    sourceUrl
                }
            }
            artistInformation {
                artistsToAlbums {
                ... on Album {
                    id
                    title
                    slug
                    featuredImage {
                        node {
                            altText
                            sourceUrl
                            mediaDetails {
                                height
                                width
                            }
                        }
                    }

                }
                }
            }
        }
    }`
    , {
        variable: {
            "id": $id
        }
    })
    return data.artist 
}

/* export function getSingleArtistData() {
    const artists = getArtists(); 

    const matchingArtist = artist.find((artist) => {
        return artist.slug === id
    });

    return {
        id,
        matchingArtist
    }
} */

export function getAllArtistSLugs() {
    const albums = getArtists();
    const albumSLugs = albums.map((album) => {
        return {
            params: {
                id: albums.slug
            }
        }
    });
    return albumSLugs;
}

export async function getSingleAlbumData($id) {
    const data = await fetchAPI(``,{
        variables: {
            "id": $id
        }
    })
    return data.album 
}


/* export function getSingleAlbumData() {
    const artists = getAlbums(); 

    const matchingAlbum = Albums.find((album) => {
        return album.slug === id
    });

    return {
        id,
        matchingAlbum
    }
}
*/

export async function getAllAlbumSlugs() {
    const data = await fetchAPI(`
    query MyQuery {
        albums {
            edges {
                node {
                    id
                    slug
                }
            }
        }
    }
    ` )
        const albumSlugs = data.albums.edges.map((album) => {
            return {
                params: {
                    id: album.slug 
                }
            }
        })
        return albumSlugs
}