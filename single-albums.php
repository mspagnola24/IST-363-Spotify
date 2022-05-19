<?php get_header(); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
	<?php 
	$year = get_field('year'); 
	$artists = get_field('artists_to_albums');
	?>	

	<pre>
		<?php print_r($artists); ?>
	</pre>

	<?php the_post_thumbnail('medium', array(
		//'class' => 'responsive-img',
		//'title' => 'hellllllo'
	)); ?>
	<h1><?php the_title(); ?> (<?php print $year; ?>)</h1>

	<?php the_content(); ?>

	<?php foreach($artists as $artist_id) { ?>
		<?php
			$title = get_the_title($artist_id); 
			$featuredImage = get_the_post_thumbnail($artist_id, 'thumbnail');
			$path = get_the_permalink($artist_id);
		?>
		<article>
			<?php print $featuredImage; ?>
			<h3><?php print $title; ?></h3>
			<p><a href="<?php print $path; ?>">View artist</a></p>
		</article>
	<?php } // foreach loop end ?>

<?php endwhile; else : ?>
	<p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>



<?php get_footer(); ?>
