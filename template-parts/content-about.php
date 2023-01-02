

<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Portfolio
 */

?>

<article id="post-<?php the_ID();?>" <?php post_class();?>>
	<header class="entry-header">
		<?php the_title('<h1 class="entry-title">', '</h1>');?>
	</header><!-- .entry-header -->

	<?php portfolio_post_thumbnail();?>

	<div class="entry-content">
  <img class="profile-picture" src="<?php echo get_bloginfo('template_url') ?>/images/jethro_profile_pic.jpg"/>
  <p>Hi, my name is Jethro Landa.</p>
  <p>I am a Web Developer that specializes in wordpress plugin and theme development.</p>
  <p>I have a decade of working experience in wordpress websites.</p>


  <p>Education:</p>
  <p>Bachelor of Science in Information Technology 2008-2012</p>
  <p>Experience:</p>
  <p>
  Lancera
  Wordpress Developer
  Aug 2013-Oct 2014
  </p>

  <p>
  Primary Work
  Convert psd designs into websites from scratch
  Maintain websites
  </p>


  <p>
  Rymera Web Co
  Software Engineer
  Jan 2015-July 2022
  </p>


<p>
Primary Work
PSD to Wordpress from scratch
Create custom plugins
Maintain company owned plugins
Create frontend automated tests for company owned plugins using cypress
Debugging Customer Websites
</p>


<p>Skills:</p>
<p>GIT, Javascript, React JS, Wordpress Theme Development, Wordpress Plugin Development, PSD to Wordpress</p>


		<?php
the_content();

?>
	</div><!-- .entry-content -->

	<?php if (get_edit_post_link()): ?>
		<footer class="entry-footer">
			<?php
edit_post_link(
    sprintf(
        wp_kses(
            /* translators: %s: Name of current post. Only visible to screen readers */
            __('Edit <span class="screen-reader-text">%s</span>', 'portfolio'),
            array(
                'span' => array(
                    'class' => array(),
                ),
            )
        ),
        wp_kses_post(get_the_title())
    ),
    '<span class="edit-link">',
    '</span>'
);
?>
		</footer><!-- .entry-footer -->
	<?php endif;?>
</article><!-- #post-<?php the_ID();?> -->
