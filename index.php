<?php
/**
 * The main template file
 *
 * This is the most generic template file and is used to display a page when nothing
 * more specific matches a query.
 *
 * @package Maasai_Investments
 */

get_header();
?>

<main id="main-content" class="site-main">
    <?php
    if (have_posts()) :
        while (have_posts()) :
            the_post();
            the_content();
        endwhile;
    else :
        ?>
        <div class="no-content">
            <h1>No content found</h1>
            <p>It seems we can't find what you're looking for. Perhaps searching can help.</p>
        </div>
        <?php
    endif;
    ?>
</main>

<?php
get_footer();
