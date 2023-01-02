

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

	<div class="entry-content">

    <div class="card mb-3 text-bg-dark">
      <div class="row g-0">
        <div class="col-md-3">
          <img class="profile-picture" src="<?php echo get_bloginfo('template_url') ?>/images/jethro_profile_pic.jpg"/>
        </div>
        <div class="col-md-9">
          <div class="card-body">
          <p class="card-text">Hi, my name is Jethro Landa.</p>
          <p class="card-text">I am a Web Developer that specializes in wordpress plugin and theme development.</p>
          <p class="card-text">I have a decade of working experience in making wordpress websites.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="card text-bg-dark mb-3">
      <div class="card-header">Education:</div>
      <div class="card-body">
        <p class="card-text">Bachelor of Science in Information Technology ( 2008 - 2012 )</p>
        <p class="card-text">Silliman University</p>
      </div>
    </div>

    <div class="card text-bg-dark mb-3">
      <div class="card-header">Experience:</div>
      <div class="card-body">
        <h5 class="card-title">Lancera</h5>
        <p class="card-text">Wordpress Developer ( Aug 2013 - Oct 2014 )</p>
        <h6>Responsibilities:</h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-bg-dark">Convert psd designs into websites from scratch</li>
          <li class="list-group-item text-bg-dark">Maintain client websites</li>
        </ul>
      </div>
    </div>

    <div class="card text-bg-dark mb-3">
      <div class="card-header">Experience:</div>
      <div class="card-body">
        <h5 class="card-title">Rymera Web Co</h5>
        <p class="card-text">Software Engineer ( Jan 2015 - Jul 2022 )</p>
        <h6>Responsibilities:</h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-bg-dark">PSD to Wordpress from scratch</li>
          <li class="list-group-item text-bg-dark">Create custom plugins</li>
          <li class="list-group-item text-bg-dark">Maintain company owned plugins</li>
          <li class="list-group-item text-bg-dark">Create frontend automated tests for company owned plugins using cypress</li>
          <li class="list-group-item text-bg-dark">Debugging customer websites</li>
        </ul>
      </div>
    </div>

    <div class="card text-bg-dark mb-3">
      <div class="card-header">Skills:</div>
      <div class="card-body">
        <p class="card-text">
          <span class="badge text-bg-secondary">GIT</span>
          <span class="badge text-bg-secondary">Javascript</span>
          <span class="badge text-bg-secondary">React JS</span>
          <span class="badge text-bg-secondary">Wordpress Theme Development</span>
          <span class="badge text-bg-secondary">Wordpress Plugin Development</span>
          <span class="badge text-bg-secondary">PSD to Wordpress</span>
        </p>
      </div>
    </div>

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
