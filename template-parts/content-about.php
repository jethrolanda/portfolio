

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

    <div class="row g-2 mb-3">
      <div class="col-md-4">
        <div class="card text-bg-dark card-profile">
          <img class="profile-picture" src="<?php echo get_bloginfo('template_url') ?>/images/jethro_profile_pic.jpg"/>

          <div class="col-md-12">
            <h3>Jethro Landa</h3>
            <p><i class="bi bi-pin-map"></i> Negros Oriental, Philippines</p>
            <p><i class="bi bi-envelope"></i> <a href="mailto:jethrolanda@outlook.com">jethrolanda@outlook.com</a></p>
            <p><i class="bi bi-linkedin"></i> <a target="_blank" href="https://www.linkedin.com/in/jethro-landa-26736852/">Linkedin</a></p>
            <p><i class="bi bi-github"></i> <a target="_blank" href="https://github.com/jethrolanda">Github</a></p>
            <p><i class="upwork-icon"></i> <a target="_blank" href="https://www.upwork.com/freelancers/~01f558084c49d14f15">Upwork</a></p>
            <p><i class="onlinejobs-icon"></i> <a target="_blank" href="https://www.onlinejobs.ph/jobseekers/info/97274">Onlinejobs.ph</a></p>
          </div>
        </div>

      </div>
      <div class="col-md-8">
        <div class="card text-bg-dark mb-3">
          <div class="card-header">About:</div>
          <div class="card-body">
            <p class="card-text">Hi, my name is Jethro Landa.</p>
            <p class="card-text">I am a Web Developer that specializes in wordpress plugin and theme development.</p>
            <p class="card-text">I have a decade of working experience in making wordpress websites.</p>
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
              <li class="list-group-item text-bg-dark">PSD to Wordpress from scratch</li>
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
              <li class="list-group-item text-bg-dark">Main developer of WWP, WWPP, WWOF and WWLC plugins</li>
              <li class="list-group-item text-bg-dark">Create automated tests for company owned plugins using cypress</li>
              <li class="list-group-item text-bg-dark">Debugging plugin issue from customer websites</li>
              <li class="list-group-item text-bg-dark">Deploying premium plugins to wp.org and premium plugin sites</li>
            </ul>
          </div>
        </div>

        <div class="card text-bg-dark mb-3">
          <div class="card-header">Skills:</div>
          <div class="card-body">
            <p class="card-text">
              <span class="badge text-bg-secondary">GIT</span>
              <span class="badge text-bg-secondary">SVN</span>
              <span class="badge text-bg-secondary">Mercurial</span>
              <span class="badge text-bg-secondary">Javascript</span>
              <span class="badge text-bg-secondary">React JS</span>
              <span class="badge text-bg-secondary">WooCommerce</span>
              <span class="badge text-bg-secondary">Wordpress Theme Development</span>
              <span class="badge text-bg-secondary">Wordpress Plugin Development</span>
              <span class="badge text-bg-secondary">PSD to Wordpress</span>
            </p>
          </div>
        </div>

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
