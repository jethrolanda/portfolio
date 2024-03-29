<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Portfolio
 */

?>

<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
		<a href="<?php echo esc_url(__('https://wordpress.org/', 'portfolio')); ?>">
				<?php
/* translators: %s: CMS name, i.e. WordPress. */
printf(esc_html__('Proudly powered by %s', 'portfolio'), 'WordPress');
?>
			</a>

    </div>

    <div class="nav col-md-4 justify-content-end list-unstyled d-flex">
		  <span class="mb-3 mb-md-0">&copy; <?php echo date('Y'); ?> Jethro Landa</span>
    </div>
    <!-- <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a href="#"><i class="bi bi-linkedin"></i></a></li>
      <li class="ms-3"><a href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
      <li class="ms-3"><a href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
    </ul> -->
  </footer>
</div><!-- #page -->

<?php wp_footer();?>

</body>
</html>
