<?php
/**
 * Maasai Investments Theme Functions
 */

if (!defined('ABSPATH')) {
    exit;
}

// Theme setup
function maasai_theme_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo', array(
        'height'      => 50,
        'width'       => 50,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'maasai-investments'),
    ));
}
add_action('after_setup_theme', 'maasai_theme_setup');

// Enqueue scripts and styles
function maasai_enqueue_assets() {
    wp_enqueue_style('maasai-style', get_stylesheet_uri(), array(), '1.0.0');
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Inter:wght@300;400;600;700&display=swap', array(), null);
}
add_action('wp_enqueue_scripts', 'maasai_enqueue_assets');

// Register Custom Post Type for Profiles
function maasai_register_profiles_cpt() {
    $labels = array(
        'name'               => 'Team Profiles',
        'singular_name'      => 'Profile',
        'menu_name'          => 'Team Profiles',
        'add_new'            => 'Add New',
        'add_new_item'       => 'Add New Profile',
        'edit_item'          => 'Edit Profile',
        'new_item'           => 'New Profile',
        'view_item'          => 'View Profile',
        'search_items'       => 'Search Profiles',
        'not_found'          => 'No profiles found',
        'not_found_in_trash' => 'No profiles found in Trash',
    );

    $args = array(
        'labels'              => $labels,
        'public'              => true,
        'has_archive'         => false,
        'publicly_queryable'  => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_rest'        => true,
        'menu_icon'           => 'dashicons-admin-users',
        'supports'            => array('title', 'editor', 'thumbnail'),
        'rewrite'             => array('slug' => 'team'),
    );

    register_post_type('team_profile', $args);
}
add_action('init', 'maasai_register_profiles_cpt');

// Add custom fields support (ACF compatibility)
function maasai_add_profile_meta_boxes() {
    add_meta_box(
        'profile_details',
        'Profile Details',
        'maasai_profile_details_callback',
        'team_profile',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'maasai_add_profile_meta_boxes');

function maasai_profile_details_callback($post) {
    wp_nonce_field('maasai_profile_details', 'maasai_profile_details_nonce');

    $role = get_post_meta($post->ID, '_profile_role', true);
    $experience = get_post_meta($post->ID, '_profile_experience', true);
    $expertise = get_post_meta($post->ID, '_profile_expertise', true);
    $location = get_post_meta($post->ID, '_profile_location', true);
    $bio = get_post_meta($post->ID, '_profile_bio', true);

    ?>
    <p>
        <label for="profile_role">Role:</label><br>
        <input type="text" id="profile_role" name="profile_role" value="<?php echo esc_attr($role); ?>" style="width: 100%;">
    </p>
    <p>
        <label for="profile_experience">Experience:</label><br>
        <input type="text" id="profile_experience" name="profile_experience" value="<?php echo esc_attr($experience); ?>" style="width: 100%;">
    </p>
    <p>
        <label for="profile_expertise">Key Expertise:</label><br>
        <textarea id="profile_expertise" name="profile_expertise" rows="3" style="width: 100%;"><?php echo esc_textarea($expertise); ?></textarea>
    </p>
    <p>
        <label for="profile_location">Location:</label><br>
        <input type="text" id="profile_location" name="profile_location" value="<?php echo esc_attr($location); ?>" style="width: 100%;">
    </p>
    <p>
        <label for="profile_bio">Bio:</label><br>
        <textarea id="profile_bio" name="profile_bio" rows="5" style="width: 100%;"><?php echo esc_textarea($bio); ?></textarea>
    </p>
    <?php
}

function maasai_save_profile_details($post_id) {
    if (!isset($_POST['maasai_profile_details_nonce'])) {
        return;
    }
    if (!wp_verify_nonce($_POST['maasai_profile_details_nonce'], 'maasai_profile_details')) {
        return;
    }
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    if (isset($_POST['profile_role'])) {
        update_post_meta($post_id, '_profile_role', sanitize_text_field($_POST['profile_role']));
    }
    if (isset($_POST['profile_experience'])) {
        update_post_meta($post_id, '_profile_experience', sanitize_text_field($_POST['profile_experience']));
    }
    if (isset($_POST['profile_expertise'])) {
        update_post_meta($post_id, '_profile_expertise', sanitize_textarea_field($_POST['profile_expertise']));
    }
    if (isset($_POST['profile_location'])) {
        update_post_meta($post_id, '_profile_location', sanitize_text_field($_POST['profile_location']));
    }
    if (isset($_POST['profile_bio'])) {
        update_post_meta($post_id, '_profile_bio', sanitize_textarea_field($_POST['profile_bio']));
    }
}
add_action('save_post_team_profile', 'maasai_save_profile_details');

// Statistics shortcode
function maasai_statistics_shortcode($atts) {
    $atts = shortcode_atts(array(
        'animals' => '250+',
        'return' => '~10%',
        'wealth' => '€10K+',
        'families' => '50+',
    ), $atts);

    ob_start();
    ?>
    <div class="stats-grid">
        <div class="stat-card">
            <div class="stat-value"><?php echo esc_html($atts['animals']); ?></div>
            <div class="stat-label">Animals Bought/Sold</div>
        </div>
        <div class="stat-card">
            <div class="stat-value"><?php echo esc_html($atts['return']); ?></div>
            <div class="stat-label">Average Return</div>
        </div>
        <div class="stat-card">
            <div class="stat-value"><?php echo esc_html($atts['wealth']); ?></div>
            <div class="stat-label">Wealth Generated</div>
        </div>
        <div class="stat-card">
            <div class="stat-value"><?php echo esc_html($atts['families']); ?></div>
            <div class="stat-label">Families Supported</div>
        </div>
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode('maasai_stats', 'maasai_statistics_shortcode');

// Contact Form 7 support
add_theme_support('html5', array('contact-form'));
