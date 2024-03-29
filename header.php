<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Portfolio
 */

?>
<!doctype html>
<html <?php language_attributes();?>>
<head>
	<meta charset="<?php bloginfo('charset');?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head();?>
</head>

<body <?php body_class();?>>

<?php wp_body_open();?>
<div id="page" class="container">

	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'portfolio');?></a>

	<header id="masthead" class="site-header">
		<div class="site-branding">
		<a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
			<img class="logo" src="<?php echo get_bloginfo('template_url') ?>/images/jl.png"/>
		</a>
			<?php

$portfolio_description = get_bloginfo('description', 'display');
if ($portfolio_description || is_customize_preview()):
?>
				<p class="site-description"><?php echo $portfolio_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped                             ?></p>
			<?php endif;?>
		</div><!-- .site-branding -->

		<nav id="site-navigation" class="main-navigation">

			<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e('Primary Menu', 'portfolio');?></button>
			<?php
wp_nav_menu(
    array(
        'theme_location'  => 'menu-1',
        'menu_id'         => 'primary-menu',
        'container_class' => 'd-flex flex-wrap justify-content-end py-3',
        'menu_class'      => 'nav nav-pills',
    )
);
?>
		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->
