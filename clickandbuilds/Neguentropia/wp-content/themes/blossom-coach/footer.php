<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Blossom_Coach
 */
    
    /**
     * After Content
     * 
     * @hooked blossom_coach_content_end        - 20
     * @hooked blossom_coach_pro_instagram      - 22
     * @hooked blossom_coach_newsletter_section - 25
    */
    do_action( 'blossom_coach_before_footer' );
    
    /**
     * Footer
     * 
     * @hooked blossom_coach_footer_start  - 20
     * @hooked blossom_coach_footer_top    - 30
     * @hooked blossom_coach_footer_bottom - 40
     * @hooked blossom_coach_back_to_top   - 45
     * @hooked blossom_coach_footer_end    - 50
    */
    do_action( 'blossom_coach_footer' );
    
    /**
     * After Footer
     * 
     * @hooked blossom_coach_page_end - 20
    */
    do_action( 'blossom_coach_after_footer' );

    wp_footer();
    ?>
	<audio autoplay>
	<source src="https://neguentropia.org/wp-content/uploads/2023/11/Forest-Sounds-Woodland-Ambience-Bird-Song.mp3" type="audio/mp3">
	Your browser does not support the audio element.
	</audio>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script>
        var $j = jQuery.noConflict();
    </script>
</body>
</html>
