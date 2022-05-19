<section>
	<div class="container">
	<h2>Artists</h2>
<?php 
$args = array(
	'post_type' => 'artists'
); // the query
$the_query = new WP_Query( $args ); ?>
 
<?php if ( $the_query->have_posts() ) : ?>
 
    <!-- pagination here -->
 
    <!-- the loop -->
    <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
		<article class="artist-teaser">
			<?php the_post_thumbnail('thumbnail', array(
				'class' => 'responsive-img'
			)); ?>
        	<h2><?php the_title(); ?></h2>
			<?php the_excerpt(); ?>
			<p><a href="<?php the_permalink(); ?>">View artist</a></p>
		</article>
    <?php endwhile; ?>
    <!-- end of the loop -->
 
    <!-- pagination here -->
 
    <?php wp_reset_postdata(); ?>
 
<?php else : ?>
    <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>

	</div><!-- /container -->
</section>
