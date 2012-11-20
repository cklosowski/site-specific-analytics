<?php

/*
Plugin Name: Site Specific Analytics
Description: Drops in the Google Analytics Tracking and Social Interactino Tracking
Version: 1.0
Author: Chris Klosowski
Author URI: http://www.kungfugrep.com
License: GPLv2
*/

add_action( 'init', 'site_specific_ga_enqueue_script' );
wp_register_script( 'site-specific-analytics', plugins_url('ga.js', __FILE__ ), NULL, '1.0', false );


function site_specific_ga_enqueue_script() {
  wp_enqueue_script( 'site-specific-analytics' );
}
