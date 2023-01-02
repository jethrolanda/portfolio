<?php
/**
 *  Template Name: Projects Template
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Portfolio
 */

get_header();
?>

	<main id="primary" class="site-main">

		<?php
while (have_posts()):
    the_post();

    get_template_part('template-parts/content', 'projects');

endwhile; // End of the loop.
?>

	</main><!-- #main -->

<?php
get_footer();
