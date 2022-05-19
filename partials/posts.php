<section>
	<div class="container">
	<h2>Posts</h2>
	<div class="row">
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

	<article class="col col-sm-6 col-md-4">
		<?php the_post_thumbnail('thumbnail', array(
			'class' => 'responsive-img'
		)); ?>
		<h2><?php the_title(); ?></h2>
		<h3>Written by <?php the_author(); ?></h3>
		<?php the_excerpt(); ?>
		<p><a href="<?php the_permalink(); ?>">Read more</a></p>
	</article>
	<article class="col col-sm-6 col-md-4">
		<?php the_post_thumbnail('thumbnail', array(
			'class' => 'responsive-img' 
		)); ?>
		<h2><?php the_title(); ?></h2>
		<h3>Written by <?php the_author(); ?></h3>
		<?php the_excerpt(); ?>
		<p><a href="<?php the_permalink(); ?>">Read more</a></p>
	</article>
	<article class="col col-sm-6 col-md-4">
		<?php the_post_thumbnail('thumbnail', array(
			'class' => 'responsive-img'
		)); ?>
		<h2><?php the_title(); ?></h2>
		<h3>Written by <?php the_author(); ?></h3>
		<?php the_excerpt(); ?>
		<p><a href="<?php the_permalink(); ?>">Read more</a></p>
	</article>

<?php endwhile; else : ?>
	<p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>

</div><!-- /row -->
</div><!-- /container -->
</section>
