<?php
function spotify_cpt() {
    register_post_type('artists',
        array(
            'labels'      => array(
                'name'          => __('Artists', 'textdomain'),
                'singular_name' => __('Artist', 'textdomain'),
            ),
			'public'      => true,
			'show_in_rest' => true, // displays the new content editor
			'supports' => array(
				'title', 
				'editor', 
				'thumbnail',
				'excerpt',
				'page-attributes'
			),
			'show_in_graphql' => true,
			'graphql_single_name' => 'artist',
			'graphql_plural_name' => 'artists',

        )
    );
	register_post_type('albums',
        array(
            'labels'      => array(
                'name'          => __('Albums', 'textdomain'),
                'singular_name' => __('Album', 'textdomain'),
            ),
			'public'      => true,
			'show_in_rest' => true, // displays the new content editor
			'supports' => array(
				'title', 
				'editor', 
				'thumbnail',
				'excerpt',
				'page-attributes'
			),
			'show_in_graphql' => true,
			'graphql_single_name' => 'album',
			'graphql_plural_name' => 'albums',

        )
    );
	 register_post_type('songs',
        array(
            'labels'      => array(
                'name'          => __('Songs', 'textdomain'),
                'singular_name' => __('Song', 'textdomain'),
            ),
			'public'      => true,
			'show_in_rest' => true, // displays the new content editor
			'supports' => array(
				'title', 
				'editor', 
				'thumbnail',
				'excerpt',
				'page-attributes'
			),
			'show_in_graphql' => true,
			'graphql_single_name' => 'song',
			'graphql_plural_name' => 'songs',

        )
    );
	 register_post_type('playlists',
        array(
            'labels'      => array(
                'name'          => __('Playlists', 'textdomain'),
                'singular_name' => __('Playlist', 'textdomain'),
            ),
			'public'      => true,
			'show_in_rest' => true, // displays the new content editor
			'supports' => array(
				'title', 
				'editor', 
				'thumbnail',
				'excerpt',
				'page-attributes'
			),
			'show_in_graphql' => true,
			'graphql_single_name' => 'playlist',
			'graphql_plural_name' => 'playlists',

        )
    );
} // end of spotify_cpt function
add_action('init', 'spotify_cpt');
