<?php get_header(); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>


	<h1><?php the_title(); ?></h1>

	<?php $albums = get_field('songs_to_albums'); ?>

	
	<pre>
		<?php print_r($albums); ?>
	</pre>
	

	<?php foreach($albums as $album_id) { ?>
		<?php 
			$title = get_the_title($album_id); 
			$featuredImage = get_the_post_thumbnail($album_id, 'thumbnail');
			$path = get_the_permalink($album_id);
		?>
		<h3><?php print $title; ?></h3>
		<a href="<?php print $path; ?>">
			<?php print $featuredImage; ?>
		</a>
		<p><a href="<?php print $path; ?>">View album</a></p>
		
	<?php } // foreach loop end ?>	

<?php endwhile; else : ?>
	<p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>


<?php get_footer(); ?>
