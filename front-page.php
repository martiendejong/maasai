<?php
/**
 * Template Name: Maasai Home Page
 * Description: Full-page slider homepage for Maasai Investments
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <meta name="description" content="Invest €40 in Maasai livestock. Support communities, target 10% annual returns. Transparent, sustainable impact investing.">
    <meta name="theme-color" content="#D84315">

    <!-- Open Graph / Social Media -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo esc_url(home_url('/')); ?>">
    <meta property="og:title" content="Maasai Investments - €40 Creates Impact">
    <meta property="og:description" content="Invest in Maasai livestock. Support communities while building sustainable returns.">
    <meta property="og:image" content="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/logo.png">

    <!-- Preconnect to external resources -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <!-- Preload critical assets -->
    <link rel="preload" href="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/maasai_livestock.avif" as="image" type="image/avif">
    <link rel="preload" href="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/logo.png" as="image" type="image/png">
    <link rel="preload" href="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/goats.png" as="image" type="image/png">
    <link rel="preload" href="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/sofy.png" as="image" type="image/png">
    <link rel="preload" href="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/natumi.png" as="image" type="image/png">
    <link rel="preload" href="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/goat-profit.png" as="image" type="image/png">
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Inter:wght@300;400;600;700&display=swap" as="style">

    <!-- Fonts with optimized loading -->
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Maasai Investments",
      "description": "Impact investment platform supporting Maasai communities through livestock investment",
      "url": "<?php echo esc_url(home_url('/')); ?>",
      "logo": "<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Investment Inquiries"
      }
    }
    </script>

    <?php wp_head(); ?>

    <style>
        /* ============================================
           CSS CUSTOM PROPERTIES (DESIGN TOKENS)
           ============================================ */
        :root {
            /* Brand Colors - Gradient Orange */
            --color-primary: #ff6b35;
            --color-primary-dark: #f7931e;
            --color-primary-light: #ff8c5a;
            --gradient-primary: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);

            /* Neutral Colors */
            --color-text-primary: #1a1a1a;
            --color-text-secondary: #4a4a4a;
            --color-text-tertiary: #666666;
            --color-background: #ffffff;
            --color-background-alt: #fafafa;
            --color-border: #e0e0e0;

            /* Spacing Scale */
            --space-xs: 0.5rem;
            --space-sm: 1rem;
            --space-md: 1.5rem;
            --space-lg: 2rem;
            --space-xl: 3rem;
            --space-2xl: 4rem;
            --space-3xl: 6rem;

            /* Typography Scale */
            --font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            --font-family-heading: 'Cormorant Garamond', Georgia, serif;
            --font-size-xs: 0.75rem;
            --font-size-sm: 0.875rem;
            --font-size-base: 1rem;
            --font-size-lg: 1.125rem;
            --font-size-xl: 1.25rem;
            --font-size-2xl: 1.5rem;
            --font-size-3xl: 2rem;
            --font-size-4xl: 2.5rem;
            --font-size-5xl: 3rem;
            --font-size-6xl: 4rem;

            /* Font Weights */
            --font-weight-light: 300;
            --font-weight-normal: 400;
            --font-weight-semibold: 600;
            --font-weight-bold: 700;

            /* Line Heights */
            --line-height-tight: 1.1;
            --line-height-normal: 1.5;
            --line-height-relaxed: 1.8;

            /* Border Radius */
            --radius-sm: 4px;
            --radius-md: 8px;
            --radius-lg: 12px;
            --radius-full: 9999px;

            /* Transitions */
            --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
            --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
            --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);

            /* Shadows */
            --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
            --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
            --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
            --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);

            /* Z-index Scale */
            --z-base: 1;
            --z-dropdown: 100;
            --z-sticky: 200;
            --z-fixed: 300;
            --z-modal: 400;
            --z-popover: 500;
            --z-tooltip: 600;

            /* Layout */
            --container-max-width: 1400px;
            --header-height: 80px;
            --slide-padding: 8%;

            /* Animation Duration */
            --slide-duration: 6000;
        }

        /* ============================================
           CSS RESET & BASE STYLES
           ============================================ */
        *, *::before, *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            font-size: 16px;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
            scroll-behavior: smooth;
        }

        body {
            font-family: var(--font-family-primary);
            font-size: var(--font-size-base);
            line-height: var(--line-height-normal);
            color: var(--color-text-primary);
            background-color: var(--color-background);
            overflow-x: hidden;
        }

        /* Focus styles for accessibility */
        *:focus {
            outline: 2px solid var(--color-primary);
            outline-offset: 2px;
        }

        *:focus:not(:focus-visible) {
            outline: none;
        }

        *:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 2px;
        }

        /* Skip to content link for accessibility */
        .skip-to-content {
            position: absolute;
            top: -100%;
            left: var(--space-md);
            z-index: var(--z-tooltip);
            padding: var(--space-sm) var(--space-md);
            background-color: var(--color-primary);
            color: white;
            text-decoration: none;
            font-weight: var(--font-weight-semibold);
            border-radius: var(--radius-md);
            transition: top var(--transition-fast);
        }

        .skip-to-content:focus {
            top: var(--space-md);
        }

        /* ============================================
           BRAND HEADER
           ============================================ */
        .brand-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: var(--header-height);
            padding: 0 var(--slide-padding);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: var(--space-md);
            z-index: var(--z-fixed);
            background-color: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--color-border);
        }

        .brand-left {
            display: flex;
            align-items: center;
            gap: var(--space-md);
        }

        .brand-logo {
            width: 50px;
            height: 50px;
            object-fit: contain;
            transition: transform var(--transition-base);
        }

        .brand-logo:hover {
            transform: scale(1.05);
        }

        .brand-name {
            font-size: var(--font-size-xl);
            font-weight: var(--font-weight-bold);
            letter-spacing: 0.02em;
            color: var(--color-text-primary);
        }

        .header-whatsapp {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: var(--space-sm);
            background: #25D366;
            color: white;
            text-decoration: none;
            border-radius: var(--radius-full);
            transition: all var(--transition-base);
            box-shadow: 0 2px 8px rgba(37, 211, 102, 0.3);
        }

        .header-whatsapp:hover {
            background: #22c55e;
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
            transform: translateY(-1px);
        }

        .header-whatsapp svg {
            width: 24px;
            height: 24px;
            fill: white;
        }

        /* ============================================
           MAIN SLIDER CONTAINER
           ============================================ */
        .slider-container {
            width: 100%;
            height: 100vh;
            position: relative;
            overflow: hidden;
            padding-top: var(--header-height);
            background-image: url('<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/maasai_livestock.avif');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            background-repeat: no-repeat;
        }

        /* Fallback for browsers that don't support AVIF */
        @supports not (background-image: url('test.avif')) {
            .slider-container {
                background-image: url('<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/savanna_background.jpg');
            }
        }

        /* Gradient overlay - transparent top-left to opaque bottom-right */
        .slider-container::before {
            content: '';
            position: absolute;
            inset: 0;
            background:
                linear-gradient(
                    135deg,
                    rgba(255, 255, 255, 0.3) 0%,
                    rgba(255, 255, 255, 0.5) 20%,
                    rgba(255, 255, 255, 0.75) 60%,
                    rgba(255, 255, 255, 0.92) 80%,
                    rgba(255, 255, 255, 0.98) 100%
                );
            z-index: 0;
            pointer-events: none;
        }

        /* ============================================
           INDIVIDUAL SLIDES
           ============================================ */
        .slide {
            position: absolute;
            inset: var(--header-height) 0 0 0;
            opacity: 0;
            visibility: hidden;
            transform: translateX(100%);
            transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1),
                        opacity 600ms cubic-bezier(0.4, 0, 0.2, 1),
                        visibility 600ms;
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            padding: 0 var(--slide-padding);
            gap: 5%;
            will-change: transform, opacity;
            z-index: 1;
            max-width: var(--container-max-width);
            margin: 0 auto;
        }

        .slide[aria-hidden="false"] {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
            z-index: 2;
        }

        .slide.slide-exit-left {
            transform: translateX(-100%);
            opacity: 0;
        }

        .slide.slide-exit-right {
            transform: translateX(100%);
            opacity: 0;
        }

        .slide.slide-enter-left {
            transform: translateX(-100%);
            opacity: 0;
        }

        .slide.slide-enter-right {
            transform: translateX(100%);
            opacity: 0;
        }

        .slide-logo-side {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            contain: layout;
        }

        .slide-logo {
            width: 100%;
            max-width: 300px;
            height: auto;
            margin-bottom: var(--space-lg);
            aspect-ratio: 1 / 1;
        }

        /* Feature image styling (for goats.png) */
        .slide-feature-image {
            width: 100%;
            max-width: 600px;
            height: auto;
            margin-bottom: var(--space-lg);
            object-fit: contain;
            filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2))
                    drop-shadow(0 4px 10px rgba(0, 0, 0, 0.15));
        }

        .slide-image-feature {
            position: relative;
        }

        .slide-tagline {
            font-size: var(--font-size-lg);
            color: var(--color-text-tertiary);
            text-align: center;
            max-width: 350px;
            line-height: var(--line-height-relaxed);
        }

        .slide-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            padding: var(--space-xl);
            border-radius: var(--radius-lg);
        }

        /* Gradient background - asymmetric corners (top-left & bottom-right larger) */
        .slide-content::before {
            content: '';
            position: absolute;
            inset: -100px;
            background: rgba(255, 255, 255, 0.85);
            mask-image:
                radial-gradient(ellipse 55% 55% at center, black 0%, black 35%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0.4) 72%, rgba(0,0,0,0.15) 88%, transparent 100%),
                radial-gradient(ellipse 200px 200px at top left, transparent 0%, transparent 80px, black 240px),
                radial-gradient(ellipse 200px 200px at bottom right, transparent 0%, transparent 80px, black 240px),
                radial-gradient(ellipse 120px 120px at top right, transparent 0%, transparent 40px, black 140px),
                radial-gradient(ellipse 120px 120px at bottom left, transparent 0%, transparent 40px, black 140px);
            mask-composite: intersect;
            -webkit-mask-image:
                radial-gradient(ellipse 55% 55% at center, black 0%, black 35%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0.4) 72%, rgba(0,0,0,0.15) 88%, transparent 100%),
                radial-gradient(ellipse 200px 200px at top left, transparent 0%, transparent 80px, black 240px),
                radial-gradient(ellipse 200px 200px at bottom right, transparent 0%, transparent 80px, black 240px),
                radial-gradient(ellipse 120px 120px at top right, transparent 0%, transparent 40px, black 140px),
                radial-gradient(ellipse 120px 120px at bottom left, transparent 0%, transparent 40px, black 140px);
            -webkit-mask-composite: source-in;
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
            border-radius: var(--radius-lg);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
            z-index: -1;
        }

        .slide-category {
            font-size: var(--font-size-sm);
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: var(--color-primary);
            margin-bottom: var(--space-sm);
            font-weight: var(--font-weight-semibold);
        }

        .slide-title {
            font-family: var(--font-family-heading);
            font-size: clamp(var(--font-size-4xl), 5vw, var(--font-size-6xl));
            font-weight: var(--font-weight-bold);
            line-height: var(--line-height-tight);
            margin-bottom: var(--space-md);
            color: var(--color-text-primary);
        }

        .slide-description {
            font-size: var(--font-size-xl);
            line-height: var(--line-height-relaxed);
            color: var(--color-text-secondary);
            margin-bottom: var(--space-xl);
            max-width: 500px;
        }

        .slide-disclaimer {
            font-size: var(--font-size-xs);
            line-height: var(--line-height-normal);
            color: var(--color-text-secondary);
            margin-bottom: var(--space-md);
            max-width: 500px;
            opacity: 0.8;
        }

        /* Proof Grid */
        .proof-grid {
            display: flex;
            gap: var(--space-lg);
            margin-bottom: var(--space-xl);
            flex-wrap: wrap;
        }

        .proof-stat {
            display: flex;
            flex-direction: column;
            gap: var(--space-xs);
        }

        .proof-number {
            font-size: var(--font-size-3xl);
            font-weight: var(--font-weight-bold);
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1;
        }

        .proof-label {
            font-size: var(--font-size-sm);
            color: var(--color-text-tertiary);
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        /* Trust Badges */
        .trust-badges {
            display: flex;
            flex-direction: column;
            gap: var(--space-xs);
            margin-bottom: var(--space-lg);
        }

        .trust-badge {
            display: flex;
            align-items: center;
            gap: var(--space-sm);
            font-size: var(--font-size-sm);
            color: var(--color-text-secondary);
        }

        .trust-badge::before {
            content: '✓';
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            background: var(--gradient-primary);
            color: white;
            border-radius: var(--radius-full);
            font-weight: var(--font-weight-bold);
            font-size: var(--font-size-xs);
            flex-shrink: 0;
        }

        .slide-cta {
            display: inline-block;
            align-self: flex-start;
            padding: var(--space-sm) var(--space-lg);
            background: var(--gradient-primary);
            color: white;
            text-decoration: none;
            border: none;
            border-radius: var(--radius-md);
            font-weight: var(--font-weight-semibold);
            font-size: var(--font-size-base);
            cursor: pointer;
            transition: all var(--transition-base);
            box-shadow: var(--shadow-md);
            min-height: 48px;
            white-space: nowrap;
        }

        .slide-cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(255, 107, 53, 0.4);
        }

        .slide-cta:active {
            transform: translateY(0);
        }

        /* ============================================
           NAVIGATION - Step Dots with Line
           ============================================ */
        .slider-navigation {
            position: absolute;
            bottom: var(--space-3xl);
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            align-items: center;
            gap: 3rem;
            z-index: var(--z-fixed);
        }

        .slider-navigation::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 2px;
            background-color: rgba(0, 0, 0, 0.2);
            transform: translateY(-50%);
            z-index: -1;
        }

        .nav-button {
            width: 12px;
            height: 12px;
            padding: 0;
            border-radius: var(--radius-full);
            background-color: rgba(0, 0, 0, 0.3);
            border: 2px solid rgba(0, 0, 0, 0.4);
            cursor: pointer;
            transition: all var(--transition-base);
            position: relative;
            z-index: 2;
            flex-shrink: 0;
        }

        .nav-button[aria-current="true"] {
            background: var(--gradient-primary);
            border-color: white;
            transform: scale(1.4);
            box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.3), 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .nav-button:hover {
            background: var(--gradient-primary);
            transform: scale(1.3);
        }

        .nav-button[aria-current="true"]:hover {
            transform: scale(1.5);
        }

        /* Arrow controls - side positioned */
        .slider-controls {
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            transform: translateY(-50%);
            display: flex;
            justify-content: space-between;
            pointer-events: none;
            z-index: var(--z-fixed);
            padding: 0 var(--space-md);
        }

        .control-button {
            width: 40px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.9);
            border: none;
            border-radius: var(--radius-full);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all var(--transition-base);
            color: var(--color-text-primary);
            font-size: var(--font-size-xl);
            pointer-events: auto;
            opacity: 0.6;
            box-shadow: var(--shadow-md);
        }

        .control-button:hover {
            background-color: var(--color-primary);
            color: white;
            opacity: 1;
            transform: scale(1.1);
        }

        /* ============================================
           RESPONSIVE DESIGN
           ============================================ */
        @media (max-width: 1024px) {
            :root {
                --slide-padding: 5%;
                --header-height: 60px;
            }

            .slider-container {
                background-attachment: scroll;
            }

            .slider-container::before {
                background:
                    linear-gradient(
                        135deg,
                        rgba(255, 255, 255, 0.6) 0%,
                        rgba(255, 255, 255, 0.75) 20%,
                        rgba(255, 255, 255, 0.88) 60%,
                        rgba(255, 255, 255, 0.95) 80%,
                        rgba(255, 255, 255, 0.98) 100%
                    );
            }

            .slide {
                grid-template-columns: 1fr;
                padding: var(--space-xl) var(--slide-padding) 25vh;
                text-align: center;
            }

            .slide-logo-side {
                display: none;
            }

            .slide-image-feature {
                display: block;
                margin-bottom: var(--space-xs);
                order: 1;
            }

            .slide-feature-image {
                max-width: 160px;
                height: auto;
                margin: 0 auto var(--space-xs);
            }

            .slide-tagline {
                font-size: 11px;
                margin: 0;
                line-height: 1.3;
            }

            .slide-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: var(--space-xs) var(--space-md);
                margin: 0 auto;
                max-width: 90%;
                order: 2;
                gap: var(--space-xs);
            }

            .slide-title {
                max-width: 100%;
                font-size: clamp(var(--font-size-lg), 5vw, var(--font-size-xl));
                margin: var(--space-xs) 0;
            }

            .slide-description {
                display: none;
            }

            .slide-disclaimer {
                display: none;
            }

            .slide-category {
                font-size: var(--font-size-xs);
                margin-bottom: var(--space-xs);
            }

            .proof-grid {
                gap: var(--space-md);
                margin: var(--space-sm) 0;
            }

            .proof-number {
                font-size: var(--font-size-lg);
            }

            .proof-label {
                font-size: var(--font-size-xs);
            }

            .slide-cta {
                margin-top: var(--space-sm);
                padding: var(--space-sm) var(--space-lg);
                font-size: var(--font-size-sm);
            }

            .brand-logo {
                width: 40px;
                height: 40px;
            }

            .brand-name {
                font-size: var(--font-size-base);
            }

            .slider-navigation {
                bottom: var(--space-md);
            }

            .slider-controls {
                display: none;
            }
        }

        /* ============================================
           ACCESSIBILITY & MOTION PREFERENCES
           ============================================ */
        @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
            .brand-header {
                border-bottom-width: 2px;
            }

            .nav-button {
                border-width: 3px;
            }

            .control-button {
                border-width: 3px;
            }
        }

        /* Dark mode support (future-proofing) */
        @media (prefers-color-scheme: dark) {
            :root {
                --color-background: #1a1a1a;
                --color-background-alt: #2a2a2a;
                --color-text-primary: #ffffff;
                --color-text-secondary: #e0e0e0;
                --color-text-tertiary: #aaaaaa;
                --color-border: #444444;
            }

            .brand-header {
                background-color: rgba(26, 26, 26, 0.95);
            }

            .slider-navigation {
                background-color: rgba(26, 26, 26, 0.9);
            }
        }


        /* Back to Top Button */
        .back-to-top {
            position: fixed;
            bottom: var(--space-lg);
            left: var(--space-lg);
            z-index: var(--z-tooltip);
            width: 50px;
            height: 50px;
            background: var(--gradient-primary);
            border-radius: var(--radius-full);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 16px rgba(255, 107, 53, 0.4);
            transition: all var(--transition-base);
            text-decoration: none;
            color: white;
            font-size: 24px;
            font-weight: bold;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }

        .back-to-top.visible {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }

        .back-to-top:hover {
            transform: translateY(-4px);
            box-shadow: 0 6px 24px rgba(255, 107, 53, 0.6);
        }

        /* Content Sections below slider */
        .content-sections {
            background: var(--color-background-alt);
        }

        .content-section {
            max-width: var(--container-max-width);
            margin: 0 auto;
            padding: var(--space-3xl) var(--slide-padding);
        }

        .section-header {
            text-align: center;
            margin-bottom: var(--space-3xl);
        }

        .section-category {
            font-size: var(--font-size-sm);
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: var(--color-primary);
            margin-bottom: var(--space-sm);
            font-weight: var(--font-weight-semibold);
        }

        .section-title {
            font-family: var(--font-family-heading);
            font-size: clamp(var(--font-size-4xl), 5vw, var(--font-size-6xl));
            font-weight: var(--font-weight-bold);
            line-height: var(--line-height-tight);
            margin-bottom: var(--space-lg);
            color: var(--color-text-primary);
        }

        .section-description {
            font-size: var(--font-size-xl);
            line-height: var(--line-height-relaxed);
            color: var(--color-text-secondary);
            max-width: 700px;
            margin: 0 auto;
        }

        /* Profile Layout */
        .profile-content {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: var(--space-3xl);
            align-items: start;
        }

        .profile-image-container {
            position: sticky;
            top: calc(var(--header-height) + var(--space-lg));
        }

        .profile-image {
            width: 100%;
            max-width: 400px;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-xl);
        }

        .profile-details {
            background: white;
            padding: var(--space-2xl);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-md);
        }

        .profile-item {
            padding: var(--space-md) 0;
            border-bottom: 1px solid var(--color-border);
        }

        .profile-item:last-child {
            border-bottom: none;
        }

        .profile-label {
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-semibold);
            color: var(--color-primary);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: var(--space-xs);
        }

        .profile-value {
            font-size: var(--font-size-lg);
            line-height: var(--line-height-relaxed);
            color: var(--color-text-secondary);
        }

        /* Stats Grid */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: var(--space-lg);
            margin-top: var(--space-2xl);
        }

        .stat-card {
            background: white;
            padding: var(--space-2xl);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-md);
            text-align: center;
            transition: all var(--transition-base);
        }

        .stat-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-xl);
        }

        .stat-number {
            font-size: var(--font-size-5xl);
            font-weight: var(--font-weight-bold);
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1;
            margin-bottom: var(--space-sm);
        }

        .stat-label {
            font-size: var(--font-size-base);
            color: var(--color-text-secondary);
            font-weight: var(--font-weight-semibold);
        }

        .stat-sublabel {
            font-size: var(--font-size-sm);
            color: var(--color-text-tertiary);
            margin-top: var(--space-xs);
        }

        /* Contact Form */
        .contact-container {
            max-width: 600px;
            margin: var(--space-2xl) auto 0;
        }

        .contact-form {
            background: white;
            padding: var(--space-2xl);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-md);
        }

        .form-group {
            margin-bottom: var(--space-lg);
        }

        .form-label {
            display: block;
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-semibold);
            color: var(--color-text-primary);
            margin-bottom: var(--space-xs);
        }

        .form-input,
        .form-textarea {
            width: 100%;
            padding: var(--space-sm) var(--space-md);
            border: 2px solid var(--color-border);
            border-radius: var(--radius-md);
            font-family: var(--font-family-primary);
            font-size: var(--font-size-base);
            transition: border-color var(--transition-base);
        }

        .form-input:focus,
        .form-textarea:focus {
            outline: none;
            border-color: var(--color-primary);
        }

        .form-textarea {
            min-height: 150px;
            resize: vertical;
        }

        .form-submit {
            width: 100%;
            padding: var(--space-md) var(--space-lg);
            background: var(--gradient-primary);
            color: white;
            border: none;
            border-radius: var(--radius-md);
            font-weight: var(--font-weight-semibold);
            font-size: var(--font-size-base);
            cursor: pointer;
            transition: all var(--transition-base);
            box-shadow: var(--shadow-md);
        }

        .form-submit:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }

        @media (max-width: 1024px) {
            .header-whatsapp {
                padding: var(--space-xs);
            }

            .header-whatsapp svg {
                width: 20px;
                height: 20px;
            }

            .back-to-top {
                width: 45px;
                height: 45px;
                bottom: var(--space-md);
                left: var(--space-md);
                font-size: 20px;
            }

            .profile-content {
                grid-template-columns: 1fr;
            }

            .profile-image-container {
                position: static;
            }

            .profile-image {
                margin: 0 auto;
            }
        }

        /* ============================================
           GALLERY SECTION
           ============================================ */
        .maasai-gallery {
          padding: 6rem 0;
          background: transparent;
          width: 100%;
        }
        
        .gallery-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        /* Header */
        .gallery-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .gallery-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 3rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 1rem 0;
          line-height: 1.1;
        }
        
        .gallery-subtitle {
          font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 1.25rem;
          color: #666666;
          margin: 0;
          font-weight: 400;
        }
        
        /* Gallery Grid */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .gallery-item {
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
          overflow: hidden;
          cursor: pointer;
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        
        .gallery-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
        }
        
        .gallery-item:focus {
          outline: 3px solid #ff6b35;
          outline-offset: 2px;
        }
        
        .gallery-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
          display: block;
        }
        
        /* Video Items */
        .gallery-video .video-thumbnail {
          position: relative;
        }
        
        .video-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,107,53,0.8), rgba(247,147,30,0.8));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .gallery-video:hover .video-overlay {
          opacity: 1;
        }
        
        .play-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(1);
          transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .gallery-video:hover .play-icon {
          transform: scale(1.1);
        }
        
        /* Lightbox */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .lightbox-close {
          position: absolute;
          top: 2rem;
          right: 2rem;
          background: rgba(0, 0, 0, 0.5);
          border: none;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 10001;
        }
        
        .lightbox-close:hover {
          background: rgba(255, 107, 53, 0.9);
          transform: rotate(90deg);
        }
        
        .lightbox-close:focus {
          outline: 3px solid #ff6b35;
          outline-offset: 2px;
        }
        
        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          border: none;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 10001;
        }
        
        .lightbox-nav:hover {
          background: rgba(255, 107, 53, 0.9);
          transform: translateY(-50%) scale(1.1);
        }
        
        .lightbox-nav:focus {
          outline: 3px solid #ff6b35;
          outline-offset: 2px;
        }
        
        .lightbox-prev {
          left: 2rem;
        }
        
        .lightbox-next {
          right: 2rem;
        }
        
        .lightbox-content {
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .lightbox-content img,
        .lightbox-content video {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 8px;
        }
        
        /* Responsive */
        @media (max-width: 1023px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        
          .gallery-title {
            font-size: 2.5rem;
          }
        }
        
        @media (max-width: 767px) {
          .maasai-gallery {
            padding: 4rem 1rem;
          }
        
          .gallery-header {
            margin-bottom: 3rem;
          }
        
          .gallery-title {
            font-size: 2rem;
          }
        
          .gallery-subtitle {
            font-size: 1.125rem;
          }
        
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
        
          .gallery-image {
            height: 200px;
          }
        
          .lightbox-close {
            top: 1rem;
            right: 1rem;
            width: 40px;
            height: 40px;
          }
        
          .lightbox-nav {
            width: 48px;
            height: 48px;
          }
        
          .lightbox-prev {
            left: 1rem;
          }
        
          .lightbox-next {
            right: 1rem;
          }
        
          .play-icon {
            width: 48px;
            height: 48px;
          }
        
          .play-icon svg {
            width: 48px;
            height: 48px;
          }
        }
        
        @media (max-width: 479px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        
          .gallery-title {
            font-size: 1.75rem;
          }
        }
        
        /* Accessibility */
        .gallery-item:focus-visible {
          outline: 3px solid #ff6b35;
          outline-offset: 2px;
        }
        
        button:focus-visible {
          outline: 3px solid #ff6b35;
          outline-offset: 2px;
        }
        
        /* Loading state */
        .gallery-image[loading="lazy"] {
          background: linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        /* ============================================
           NAVIGATION MENU IN HEADER
           ============================================ */
        .header-nav {
            flex: 1;
            display: flex;
            justify-content: center;
            margin: 0 2rem;
        }
        
        .nav-menu {
            display: flex;
            align-items: center;
            gap: 2rem;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        
        .nav-link {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 1rem;
            font-weight: 500;
            color: #4a4a4a;
            text-decoration: none;
            padding: 0.5rem 0;
            position: relative;
            transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
            transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .nav-link:hover,
        .nav-link.active {
            color: #ff6b35;
        }
        
        .nav-link:hover::after,
        .nav-link.active::after {
            width: 100%;}
        
        /* Smooth scroll offset */
        section[id] {
            scroll-margin-top: 100px;
        }
        
        /* Mobile - hide nav */
        @media (max-width: 767px) {
            .header-nav {
                display: none;
            }
        }
        
        </style>
</head>
<body <?php body_class(); ?>>
    <!-- Skip to content link for keyboard users -->
    <a href="#main-content" class="skip-to-content">Skip to main content</a>

    <!-- Brand Header -->
    <!-- Brand Header -->
    <header class="brand-header" role="banner">
        <div class="brand-left">
            <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/logo.png" alt="Maasai Investments Logo" class="brand-logo" width="50" height="50" loading="eager">
            <h1 class="brand-name">Maasai Investments</h1>
        </div>

        <!-- Navigation Menu -->
        <nav class="header-nav">
            <ul class="nav-menu">
                <li><a href="#main-content" class="nav-link">Home</a></li>
                <li><a href="#sofy-profile" class="nav-link">About</a></li>
                <li><a href="#gallery" class="nav-link">Gallery</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
        </nav>

        <a href="https://wa.me/254718130265" class="header-whatsapp" target="_blank" rel="noopener" aria-label="Contact via WhatsApp">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
        </a>
    </header>

    <!-- Back to Top Button -->
    <a href="#main-content" class="back-to-top" id="backToTop" aria-label="Back to top">↑</a>

    <!-- Main Slider Container -->
    <main id="main-content" class="slider-container" role="main">
        <div class="slider" role="region" aria-label="Investment opportunities" aria-live="polite">

            <!-- Slide 1: Investment Opportunity -->
            <article class="slide" role="tabpanel" aria-hidden="false" id="slide-1" aria-labelledby="slide-1-title">
                <section class="slide-content">
                    <span class="slide-category">Step 1</span>
                    <h2 class="slide-title" id="slide-1-title">Invest €40</h2>
                    <div class="proof-grid">
                        <div class="proof-stat">
                            <div class="proof-number">250+</div>
                            <div class="proof-label">Bought/Sold</div>
                        </div>
                        <div class="proof-stat">
                            <div class="proof-number">~10%</div>
                            <div class="proof-label">Average Return</div>
                        </div>
                    </div>
                    <p class="slide-description">Help build struggling families, make a return of up to 10%*</p>
                    <p class="slide-disclaimer">*Not guaranteed, this is a social investment, based on the average return we have given in the past years</p>
                    <button class="slide-cta" type="button" aria-label="Start investing with Maasai Investments">Start Investing</button>
                </section>
                <figure class="slide-logo-side slide-image-feature">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/goats.png" alt="Maasai goats in the savanna" class="slide-feature-image" width="600" height="600" loading="eager">
                    <figcaption class="slide-tagline">Invest with purpose. Support Maasai communities. Build sustainable returns.</figcaption>
                </figure>
            </article>

            <!-- Slide 2: Animal Purchase -->
            <article class="slide" role="tabpanel" aria-hidden="true" id="slide-2" aria-labelledby="slide-2-title">
                <section class="slide-content">
                    <span class="slide-category">Step 2</span>
                    <h2 class="slide-title" id="slide-2-title">Animal Purchase & Transfer</h2>
                    <p class="slide-description">Sofy arranges that an animal is bought and transferred to the herd.</p>
                    <div class="trust-badges">
                        <div class="trust-badge">100% Transparent Tracking</div>
                        <div class="trust-badge">Expert Animal Selection</div>
                        <div class="trust-badge">Direct Community Partnership</div>
                    </div>
                    <a href="#sofy-profile" class="slide-cta" aria-label="Meet Sofy">Meet Sofy</a>
                </section>
                <figure class="slide-logo-side slide-image-feature">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/sofy.png" alt="Sofy - Investment Coordinator" class="slide-feature-image" width="600" height="600" loading="lazy">
                    <figcaption class="slide-tagline">Transparent. Traceable. Trustworthy.</figcaption>
                </figure>
            </article>

            <!-- Slide 3: Animal Care -->
            <article class="slide" role="tabpanel" aria-hidden="true" id="slide-3" aria-labelledby="slide-3-title">
                <section class="slide-content">
                    <span class="slide-category">Step 3</span>
                    <h2 class="slide-title" id="slide-3-title">Animal Care Period</h2>
                    <p class="slide-description">The animals are being cared for by Natumi for a period of ~10 months for €1 per month which is subtracted from the profit when the animal is sold.</p>
                    <div class="trust-badges">
                        <div class="trust-badge">Traditional Maasai Expertise</div>
                        <div class="trust-badge">Decades of Livestock Knowledge</div>
                        <div class="trust-badge">Community-Based Care</div>
                    </div>
                    <a href="#natumi-profile" class="slide-cta" aria-label="Meet Natumi">Meet Natumi</a>
                </section>
                <figure class="slide-logo-side slide-image-feature">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/natumi.png" alt="Natumi - Maasai Livestock Expert" class="slide-feature-image" width="600" height="600" loading="lazy">
                    <figcaption class="slide-tagline">Meet the people making it happen.</figcaption>
                </figure>
            </article>

            <!-- Slide 4: Profit Distribution -->
            <article class="slide" role="tabpanel" aria-hidden="true" id="slide-4" aria-labelledby="slide-4-title">
                <section class="slide-content">
                    <span class="slide-category">Step 4</span>
                    <h2 class="slide-title" id="slide-4-title">Profit Distribution</h2>
                    <p class="slide-description">The animal is sold, profit is divided equally in three parts among Natumi, Sofy and the investor and added to the investor's capital balance.</p>
                    <div class="trust-badges">
                        <div class="trust-badge">Fair 3-Way Split</div>
                        <div class="trust-badge">Proven 10% ROI Target</div>
                        <div class="trust-badge">Reinvest or Withdraw</div>
                    </div>
                    <a href="#statistics" class="slide-cta" aria-label="View statistics about past years">View Statistics</a>
                </section>
                <figure class="slide-logo-side slide-image-feature">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/goat-profit.png" alt="Profit distribution visualization" class="slide-feature-image" width="600" height="600" loading="lazy">
                    <figcaption class="slide-tagline">250+ animals bought and sold. €10,000+ in wealth generated</figcaption>
                </figure>
            </article>

            <!-- Slide 5: Repeat & Grow -->
            <article class="slide" role="tabpanel" aria-hidden="true" id="slide-5" aria-labelledby="slide-5-title">
                <section class="slide-content">
                    <span class="slide-category">Step 5</span>
                    <h2 class="slide-title" id="slide-5-title">Repeat and Grow Wealth</h2>
                    <p class="slide-description">Become part of a growing community creating real change in Maasai communities while building your own sustainable returns.</p>
                    <button class="slide-cta" type="button" aria-label="Start investing now">Start Now</button>
                </section>
                <figure class="slide-logo-side">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/logo.png" alt="Maasai Investments" class="slide-logo" width="300" height="300" loading="lazy">
                    <figcaption class="slide-tagline">Join our community of impact investors.</figcaption>
                </figure>
            </article>

        </div>

        <!-- Navigation Dots -->
        <nav class="slider-navigation" role="tablist" aria-label="Slide navigation">
            <button class="nav-button" type="button" role="tab" aria-label="Go to slide 1" aria-controls="slide-1" aria-current="true" data-slide="0"></button>
            <button class="nav-button" type="button" role="tab" aria-label="Go to slide 2" aria-controls="slide-2" data-slide="1"></button>
            <button class="nav-button" type="button" role="tab" aria-label="Go to slide 3" aria-controls="slide-3" data-slide="2"></button>
            <button class="nav-button" type="button" role="tab" aria-label="Go to slide 4" aria-controls="slide-4" data-slide="3"></button>
            <button class="nav-button" type="button" role="tab" aria-label="Go to slide 5" aria-controls="slide-5" data-slide="4"></button>
        </nav>

        <!-- Arrow Controls -->
        <div class="slider-controls">
            <button class="control-button" type="button" aria-label="Previous slide" id="prev-slide">‹</button>
            <button class="control-button" type="button" aria-label="Next slide" id="next-slide">›</button>
        </div>
    </main>

    <!-- Content Sections Below Slider -->
    <div class="content-sections">

        <!-- Sofy Profile -->
        <section id="sofy-profile" class="content-section">
            <div class="section-header">
                <div class="section-category">Team Profile</div>
                <h2 class="section-title">Meet Sofy</h2>
                <p class="section-description">Your trusted investment coordinator connecting international investors with Maasai communities</p>
            </div>

            <div class="profile-content">
                <div class="profile-image-container">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/sofy_profile.png" alt="Sofy - Investment Coordinator" class="profile-image">
                </div>

                <div class="profile-details">
                    <div class="profile-item">
                        <div class="profile-label">Role</div>
                        <div class="profile-value">Investment Coordinator & Community Liaison</div>
                    </div>

                    <div class="profile-item">
                        <div class="profile-label">Experience</div>
                        <div class="profile-value">5+ years coordinating livestock investments between international investors and Maasai communities. Deep understanding of both traditional Maasai practices and modern investment requirements.</div>
                    </div>

                    <div class="profile-item">
                        <div class="profile-label">Expertise</div>
                        <div class="profile-value">
                            <ul style="list-style: none; padding: 0; margin: 0;">
                                <li style="margin-bottom: 0.5rem;">• Expert animal selection at local markets</li>
                                <li style="margin-bottom: 0.5rem;">• Negotiation and fair pricing</li>
                                <li style="margin-bottom: 0.5rem;">• Transparent tracking systems</li>
                                <li style="margin-bottom: 0.5rem;">• Community relations and cultural bridge-building</li>
                                <li>• Investor communication and reporting</li>
                            </ul>
                        </div>
                    </div>

                    <div class="profile-item">
                        <div class="profile-label">Impact</div>
                        <div class="profile-value">Facilitated 250+ animal transactions with 99%+ stakeholder satisfaction. Maintains complete transparency with full tracking documentation for every investment.</div>
                    </div>

                    <div class="profile-item">
                        <div class="profile-label">Contact</div>
                        <div class="profile-value">
                            <a href="https://wa.me/254718130265" style="color: #25D366; text-decoration: none; font-weight: 600;">
                                WhatsApp: +254 718 130265
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Natumi Profile -->
        <section id="natumi-profile" class="content-section">
            <div class="section-header">
                <div class="section-category">Team Profile</div>
                <h2 class="section-title">Meet Natumi</h2>
                <p class="section-description">Traditional Maasai livestock expert ensuring optimal animal health and growth</p>
            </div>

            <div class="profile-content">
                <div class="profile-image-container">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/natumi_large.jpg" alt="Natumi - Maasai Livestock Expert" class="profile-image">
                </div>

                <div class="profile-details">
                    <div class="profile-item">
                        <div class="profile-label">Role</div>
                        <div class="profile-value">Maasai Livestock Expert & Caretaker</div>
                    </div>

                    <div class="profile-item">
                        <div class="profile-label">Experience</div>
                        <div class="profile-value">30+ years of traditional Maasai livestock management, with knowledge passed down through generations. Combines ancestral wisdom with practical modern animal husbandry.</div>
                    </div>

                    <div class="profile-item">
                        <div class="profile-label">Expertise</div>
                        <div class="profile-value">
                            <ul style="list-style: none; padding: 0; margin: 0;">
                                <li style="margin-bottom: 0.5rem;">• Animal health monitoring and disease prevention</li>
                                <li style="margin-bottom: 0.5rem;">• Traditional feeding methods and nutrition</li>
                                <li style="margin-bottom: 0.5rem;">• Seasonal grazing pattern management</li>
                                <li style="margin-bottom: 0.5rem;">• Optimal weight gain strategies</li>
                                <li>• Herd integration and social dynamics</li>
                            </ul>
                        </div>
                    </div>

                    <div class="profile-item">
                        <div class="profile-label">Impact</div>
                        <div class="profile-value">Cares for 100+ animals annually with a 95%+ health success rate. Ensures optimal growth during the ~10 month care period, maximizing returns for investors while maintaining traditional Maasai practices.</div>
                    </div>

                    <div class="profile-item">
                        <div class="profile-label">Philosophy</div>
                        <div class="profile-value">"Every animal receives the same care our ancestors provided for centuries. This is not just business—it is our way of life, our heritage, and our responsibility to both the animals and our community."</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Statistics -->
        <section id="statistics" class="content-section">
            <div class="section-header">
                <div class="section-category">Performance Data</div>
                <h2 class="section-title">Our Track Record</h2>
                <p class="section-description">Started in 2023, we combine Effective Altruism with Stakeholder Capitalism. 250+ animals bought and sold with an average ROI of 10%, maintaining 99%+ stakeholder satisfaction through complete transparency.</p>
            </div>

            <div class="stats-grid" style="grid-template-columns: repeat(2, 1fr); gap: var(--space-lg); max-width: 800px; margin: 0 auto;">
                <div class="stat-card" style="padding: var(--space-lg); text-align: center;">
                    <div class="stat-number" style="font-size: 2rem; margin-bottom: var(--space-sm);">💡</div>
                    <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: var(--space-xs); color: var(--color-text-primary);">Impact + Returns</h3>
                    <p style="font-size: 0.875rem; line-height: 1.5; color: var(--color-text-secondary);">Sustainable income for families, education for children, competitive returns for you.</p>
                </div>

                <div class="stat-card" style="padding: var(--space-lg); text-align: center;">
                    <div class="stat-number" style="font-size: 2rem; margin-bottom: var(--space-sm);">📈</div>
                    <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: var(--space-xs); color: var(--color-text-primary);">Proven & Scalable</h3>
                    <p style="font-size: 0.875rem; line-height: 1.5; color: var(--color-text-secondary);">More investors enable us to support more communities and create exponential impact.</p>
                </div>
            </div>

            <div style="text-align: center; margin-top: var(--space-3xl);">
                <a href="#main-content" class="slide-cta" style="text-decoration: none;">Start Investing Today</a>
            </div>
        </section>

        <!-- Contact -->
        <section id="contact" class="content-section">
            <div class="section-header">
                <div class="section-category">Get In Touch</div>
                <h2 class="section-title">Contact Us</h2>
                <p class="section-description">Have questions about investing? Want to learn more about our process? We're here to help.</p>
            </div>

            <div class="contact-container">
                <form class="contact-form" onsubmit="return false;">
                    <div class="form-group">
                        <label for="name" class="form-label">Your Name *</label>
                        <input type="text" id="name" class="form-input" required>
                    </div>

                    <div class="form-group">
                        <label for="email" class="form-label">Email Address *</label>
                        <input type="email" id="email" class="form-input" required>
                    </div>

                    <div class="form-group">
                        <label for="phone" class="form-label">Phone Number (optional)</label>
                        <input type="tel" id="phone" class="form-input">
                    </div>

                    <div class="form-group">
                        <label for="message" class="form-label">Your Message *</label>
                        <textarea id="message" class="form-textarea" required></textarea>
                    </div>

                    <button type="submit" class="form-submit">Send Message</button>

                    <div style="margin-top: var(--space-lg); text-align: center;">
                        <p style="font-size: var(--font-size-sm); color: var(--color-text-tertiary); margin-bottom: var(--space-sm);">Or contact us directly via WhatsApp:</p>
                        <a href="https://wa.me/254718130265" style="display: inline-flex; align-items: center; gap: 0.5rem; color: #25D366; font-weight: 600; text-decoration: none;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            +254 718 130265
                        </a>
                    </div>
                </form>
            </div>
        </section>

    </div>

    <!-- Maasai Investments Gallery Section -->
    <section id="gallery" class="maasai-gallery">
      <div class="gallery-container">
        <!-- Header -->
        <div class="gallery-header">
          <h2 class="gallery-title">Impact in Action</h2>
          <p class="gallery-subtitle">Transparency Through Visuals</p>
        </div>
    
        <!-- Gallery Grid -->
        <div class="gallery-grid">
    
          <!-- Image 1: Hero Landscape -->
          <div class="gallery-item" data-type="image" data-index="0">
            <img
              src="/wp-content/uploads/2026/02/maasai-gallery/maasai-market-landscape.jpg"
              alt="Large Maasai livestock market gathering with traditional dress and expansive landscape"
              loading="lazy"
              class="gallery-image"
            />
          </div>
    
          <!-- Image 2: Investor -->
          <div class="gallery-item" data-type="image" data-index="1">
            <img
              src="/wp-content/uploads/2026/02/maasai-gallery/investor-at-market.jpg"
              alt="Investor at Maasai livestock market observing traditional trading practices"
              loading="lazy"
              class="gallery-image"
            />
          </div>
    
          <!-- Image 3: Partnership -->
          <div class="gallery-item" data-type="image" data-index="2">
            <img
              src="/wp-content/uploads/2026/02/maasai-gallery/community-partnership.jpg"
              alt="Partnership discussion at livestock market with local community members"
              loading="lazy"
              class="gallery-image"
            />
          </div>
    
          <!-- Video 1: Market Overview -->
          <div class="gallery-item gallery-video" data-type="video" data-index="3">
            <div class="video-thumbnail">
              <img
                src="/wp-content/uploads/2026/02/maasai-gallery/market-overview-1-thumb.jpg"
                alt="Market overview video thumbnail"
                loading="lazy"
                class="gallery-image"
              />
              <div class="video-overlay">
                <div class="play-icon">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="30" fill="rgba(255,255,255,0.9)"/>
                    <path d="M24 18L42 30L24 42V18Z" fill="#ff6b35"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
    
          <!-- Image 4: Market Engagement -->
          <div class="gallery-item" data-type="image" data-index="4">
            <img
              src="/wp-content/uploads/2026/02/maasai-gallery/market-engagement.jpg"
              alt="Community members engaged in livestock market activities"
              loading="lazy"
              class="gallery-image"
            />
          </div>
    
          <!-- Image 5: Livestock Inspection -->
          <div class="gallery-item" data-type="image" data-index="5">
            <img
              src="/wp-content/uploads/2026/02/maasai-gallery/livestock-inspection.jpg"
              alt="Hands-on livestock quality assessment at traditional Maasai market"
              loading="lazy"
              class="gallery-image"
            />
          </div>
    
          <!-- Image 6: Quality Assessment -->
          <div class="gallery-item" data-type="image" data-index="6">
            <img
              src="/wp-content/uploads/2026/02/maasai-gallery/quality-assessment.jpg"
              alt="Careful quality assessment of goats at livestock market"
              loading="lazy"
              class="gallery-image"
            />
          </div>
    
          <!-- Video 2: Market Overview 2 -->
          <div class="gallery-item gallery-video" data-type="video" data-index="7">
            <div class="video-thumbnail">
              <img
                src="/wp-content/uploads/2026/02/maasai-gallery/market-overview-2-thumb.jpg"
                alt="Market overview video thumbnail"
                loading="lazy"
                class="gallery-image"
              />
              <div class="video-overlay">
                <div class="play-icon">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="30" fill="rgba(255,255,255,0.9)"/>
                    <path d="M24 18L42 30L24 42V18Z" fill="#ff6b35"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
    
          <!-- Image 7: Youth Development 1 -->
          <div class="gallery-item" data-type="image" data-index="8">
            <img
              src="/wp-content/uploads/2026/02/maasai-gallery/youth-development-1.jpg"
              alt="Young community member learning traditional livestock management"
              loading="lazy"
              class="gallery-image"
            />
          </div>
    
          <!-- Image 8: Youth Development 2 -->
          <div class="gallery-item" data-type="image" data-index="9">
            <img
              src="/wp-content/uploads/2026/02/maasai-gallery/youth-development-2.jpg"
              alt="Youth participating in traditional livestock assessment and management"
              loading="lazy"
              class="gallery-image"
            />
          </div>
    
          <!-- Video 3: Livestock Operations 1 -->
          <div class="gallery-item gallery-video" data-type="video" data-index="10">
            <div class="video-thumbnail">
              <img
                src="/wp-content/uploads/2026/02/maasai-gallery/livestock-operations-1-thumb.jpg"
                alt="Livestock operations video thumbnail"
                loading="lazy"
                class="gallery-image"
              />
              <div class="video-overlay">
                <div class="play-icon">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="30" fill="rgba(255,255,255,0.9)"/>
                    <path d="M24 18L42 30L24 42V18Z" fill="#ff6b35"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
    
          <!-- Image 9: Youth Engagement -->
          <div class="gallery-item" data-type="image" data-index="11">
            <img
              src="/wp-content/uploads/2026/02/maasai-gallery/youth-engagement.jpg"
              alt="Joyful engagement with livestock at community market"
              loading="lazy"
              class="gallery-image"
            />
          </div>
    
          <!-- Image 10: Market Activity -->
          <div class="gallery-item" data-type="image" data-index="12">
            <img
              src="/wp-content/uploads/2026/02/maasai-gallery/market-activity.jpg"
              alt="Active livestock trading at traditional Maasai market"
              loading="lazy"
              class="gallery-image"
            />
          </div>
    
          <!-- Video 4: Livestock Operations 2 -->
          <div class="gallery-item gallery-video" data-type="video" data-index="13">
            <div class="video-thumbnail">
              <img
                src="/wp-content/uploads/2026/02/maasai-gallery/livestock-operations-2-thumb.jpg"
                alt="Livestock operations video thumbnail"
                loading="lazy"
                class="gallery-image"
              />
              <div class="video-overlay">
                <div class="play-icon">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="30" fill="rgba(255,255,255,0.9)"/>
                    <path d="M24 18L42 30L24 42V18Z" fill="#ff6b35"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
    
        </div><!-- .gallery-grid -->
      </div><!-- .gallery-container -->
    
      <!-- Lightbox Modal -->
      <div id="gallery-lightbox" class="lightbox" style="display: none;">
        <button class="lightbox-close" aria-label="Close lightbox">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M24 8L8 24M8 8L24 24" stroke="white" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </button>
    
        <button class="lightbox-nav lightbox-prev" aria-label="Previous">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M20 6L10 16L20 26" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
    
        <button class="lightbox-nav lightbox-next" aria-label="Next">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M12 6L22 16L12 26" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
    
        <div class="lightbox-content">
          <img id="lightbox-image" src="" alt="" style="display: none;" />
          <video id="lightbox-video" controls style="display: none;">
            <source src="" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div><!-- .lightbox -->
    
    </section><!-- .maasai-gallery -->
    

    <script>

        /**
         * Maasai Investments Gallery - Lightbox Functionality
         */
        
        (function() {
          'use strict';
        
          // Gallery data (maps index to media info)
          const galleryMedia = [
            { type: 'image', src: '/wp-content/uploads/2026/02/maasai-gallery/maasai-market-landscape.jpg', alt: 'Large Maasai livestock market gathering with traditional dress and expansive landscape' },
            { type: 'image', src: '/wp-content/uploads/2026/02/maasai-gallery/investor-at-market.jpg', alt: 'Investor at Maasai livestock market observing traditional trading practices' },
            { type: 'image', src: '/wp-content/uploads/2026/02/maasai-gallery/community-partnership.jpg', alt: 'Partnership discussion at livestock market with local community members' },
            { type: 'video', src: '/wp-content/uploads/2026/02/maasai-gallery/market-overview-1.mp4', alt: 'Market overview video' },
            { type: 'image', src: '/wp-content/uploads/2026/02/maasai-gallery/market-engagement.jpg', alt: 'Community members engaged in livestock market activities' },
            { type: 'image', src: '/wp-content/uploads/2026/02/maasai-gallery/livestock-inspection.jpg', alt: 'Hands-on livestock quality assessment at traditional Maasai market' },
            { type: 'image', src: '/wp-content/uploads/2026/02/maasai-gallery/quality-assessment.jpg', alt: 'Careful quality assessment of goats at livestock market' },
            { type: 'video', src: '/wp-content/uploads/2026/02/maasai-gallery/market-overview-2.mp4', alt: 'Market overview video 2' },
            { type: 'image', src: '/wp-content/uploads/2026/02/maasai-gallery/youth-development-1.jpg', alt: 'Young community member learning traditional livestock management' },
            { type: 'image', src: '/wp-content/uploads/2026/02/maasai-gallery/youth-development-2.jpg', alt: 'Youth participating in traditional livestock assessment and management' },
            { type: 'video', src: '/wp-content/uploads/2026/02/maasai-gallery/livestock-operations-1.mp4', alt: 'Livestock operations video' },
            { type: 'image', src: '/wp-content/uploads/2026/02/maasai-gallery/youth-engagement.jpg', alt: 'Joyful engagement with livestock at community market' },
            { type: 'image', src: '/wp-content/uploads/2026/02/maasai-gallery/market-activity.jpg', alt: 'Active livestock trading at traditional Maasai market' },
            { type: 'video', src: '/wp-content/uploads/2026/02/maasai-gallery/livestock-operations-2.mp4', alt: 'Livestock operations video 2' }
          ];
        
          let currentIndex = 0;
        
          // DOM elements
          const lightbox = document.getElementById('gallery-lightbox');
          const lightboxImage = document.getElementById('lightbox-image');
          const lightboxVideo = document.getElementById('lightbox-video');
          const closeBtn = document.querySelector('.lightbox-close');
          const prevBtn = document.querySelector('.lightbox-prev');
          const nextBtn = document.querySelector('.lightbox-next');
          const galleryItems = document.querySelectorAll('.gallery-item');
        
          // Open lightbox
          function openLightbox(index) {
            currentIndex = parseInt(index);
            showMedia(currentIndex);
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scroll
        
            // Focus management
            closeBtn.focus();
          }
        
          // Close lightbox
          function closeLightbox() {
            lightbox.style.display = 'none';
            document.body.style.overflow = ''; // Restore scroll
        
            // Pause video if playing
            if (!lightboxVideo.paused) {
              lightboxVideo.pause();
            }
        
            // Return focus to gallery item
            const activeItem = document.querySelector(`.gallery-item[data-index="${currentIndex}"]`);
            if (activeItem) {
              activeItem.focus();
            }
          }
        
          // Show media in lightbox
          function showMedia(index) {
            const media = galleryMedia[index];
        
            if (media.type === 'image') {
              lightboxImage.src = media.src;
              lightboxImage.alt = media.alt;
              lightboxImage.style.display = 'block';
              lightboxVideo.style.display = 'none';
              lightboxVideo.pause();
            } else if (media.type === 'video') {
              lightboxVideo.querySelector('source').src = media.src;
              lightboxVideo.load();
              lightboxVideo.style.display = 'block';
              lightboxImage.style.display = 'none';
            }
          }
        
          // Navigate to previous item
          function showPrevious() {
            currentIndex = (currentIndex - 1 + galleryMedia.length) % galleryMedia.length;
            showMedia(currentIndex);
          }
        
          // Navigate to next item
          function showNext() {
            currentIndex = (currentIndex + 1) % galleryMedia.length;
            showMedia(currentIndex);
          }
        
          // Event listeners - Gallery items
          galleryItems.forEach(item => {
            item.addEventListener('click', function() {
              const index = this.getAttribute('data-index');
              openLightbox(index);
            });
        
            // Keyboard accessibility for gallery items
            item.addEventListener('keydown', function(e) {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const index = this.getAttribute('data-index');
                openLightbox(index);
              }
            });
        
            // Make items tabbable
            item.setAttribute('tabindex', '0');
          });
        
          // Event listeners - Lightbox controls
          closeBtn.addEventListener('click', closeLightbox);
          prevBtn.addEventListener('click', showPrevious);
          nextBtn.addEventListener('click', showNext);
        
          // Click backdrop to close
          lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
              closeLightbox();
            }
          });
        
          // Keyboard navigation
          document.addEventListener('keydown', function(e) {
            if (lightbox.style.display === 'flex') {
              switch(e.key) {
                case 'Escape':
                  closeLightbox();
                  break;
                case 'ArrowLeft':
                  showPrevious();
                  break;
                case 'ArrowRight':
                  showNext();
                  break;
              }
            }
          });
        
          // Prevent default image drag
          lightboxImage.addEventListener('dragstart', function(e) {
            e.preventDefault();
          });
        
        })();
        
        /**
         * Maasai Investments Slider
         * Accessible, performant hero slider with keyboard navigation
         */
        (function() {
            'use strict';

            // Configuration
            const CONFIG = {
                autoAdvanceInterval: 6000,
                transitionDuration: 500,
                pauseOnHover: true,
                pauseOnFocus: true
            };

            // State
            let currentSlide = 0;
            let autoAdvanceTimer = null;
            let isPaused = false;

            // DOM Elements
            const slides = document.querySelectorAll('.slide');
            const navButtons = document.querySelectorAll('.nav-button');
            const prevButton = document.getElementById('prev-slide');
            const nextButton = document.getElementById('next-slide');
            const sliderContainer = document.querySelector('.slider-container');

            /**
             * Show a specific slide
             * @param {number} index - Slide index to show
             */
            function showSlide(index) {
                // Validate index
                if (index < 0) index = slides.length - 1;
                if (index >= slides.length) index = 0;

                // Update current slide
                const previousSlideIndex = currentSlide;
                currentSlide = index;

                // Determine direction (going forward or backward)
                const direction = currentSlide > previousSlideIndex ? 'next' : 'prev';

                // Update slides with animation
                slides.forEach((slide, i) => {
                    const isActive = i === currentSlide;
                    const wasPrevious = i === previousSlideIndex;

                    // Remove all animation classes
                    slide.classList.remove('slide-exit-left', 'slide-exit-right', 'slide-enter-left', 'slide-enter-right');

                    if (isActive) {
                        // This is the new active slide
                        // Set initial position based on direction
                        if (direction === 'next') {
                            slide.classList.add('slide-enter-right');
                        } else {
                            slide.classList.add('slide-enter-left');
                        }

                        slide.setAttribute('aria-hidden', false);

                        // Remove enter class on next frame to trigger animation
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                slide.classList.remove('slide-enter-left', 'slide-enter-right');
                            });
                        });
                    } else if (wasPrevious) {
                        // This was the previous slide, animate it out
                        if (direction === 'next') {
                            slide.classList.add('slide-exit-left');
                        } else {
                            slide.classList.add('slide-exit-right');
                        }
                        slide.setAttribute('aria-hidden', true);
                    } else {
                        // All other slides
                        slide.setAttribute('aria-hidden', true);
                    }

                    // Manage focus for accessibility
                    if (isActive) {
                        const focusableElements = slide.querySelectorAll('button, a');
                        focusableElements.forEach(el => el.removeAttribute('tabindex'));
                    } else {
                        const focusableElements = slide.querySelectorAll('button, a');
                        focusableElements.forEach(el => el.setAttribute('tabindex', '-1'));
                    }
                });

                // Update navigation buttons
                navButtons.forEach((btn, i) => {
                    const isActive = i === currentSlide;
                    btn.setAttribute('aria-current', isActive);
                });

                // Show/hide prev button based on current slide
                if (currentSlide === 0) {
                    prevButton.style.opacity = '0';
                    prevButton.style.pointerEvents = 'none';
                } else {
                    prevButton.style.opacity = '0.6';
                    prevButton.style.pointerEvents = 'auto';
                }

                // Reset auto-advance timer
                resetAutoAdvance();
            }

            /**
             * Go to next slide
             */
            function nextSlide() {
                showSlide(currentSlide + 1);
            }

            /**
             * Go to previous slide
             */
            function prevSlide() {
                showSlide(currentSlide - 1);
            }

            /**
             * Start auto-advance timer
             */
            function startAutoAdvance() {
                if (!isPaused) {
                    autoAdvanceTimer = setInterval(nextSlide, CONFIG.autoAdvanceInterval);
                }
            }

            /**
             * Stop auto-advance timer
             */
            function stopAutoAdvance() {
                if (autoAdvanceTimer) {
                    clearInterval(autoAdvanceTimer);
                    autoAdvanceTimer = null;
                }
            }

            /**
             * Reset auto-advance timer
             */
            function resetAutoAdvance() {
                stopAutoAdvance();
                startAutoAdvance();
            }

            /**
             * Pause slider
             */
            function pauseSlider() {
                isPaused = true;
                stopAutoAdvance();
            }

            /**
             * Resume slider
             */
            function resumeSlider() {
                isPaused = false;
                startAutoAdvance();
            }

            // Event Listeners

            // Navigation button clicks
            navButtons.forEach((button, index) => {
                button.addEventListener('click', () => {
                    showSlide(index);
                });
            });

            // Arrow button clicks
            if (prevButton) {
                prevButton.addEventListener('click', prevSlide);
            }

            if (nextButton) {
                nextButton.addEventListener('click', nextSlide);
            }

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    prevSlide();
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    nextSlide();
                }
            });

            // Pause on hover (if enabled)
            if (CONFIG.pauseOnHover) {
                sliderContainer.addEventListener('mouseenter', pauseSlider);
                sliderContainer.addEventListener('mouseleave', resumeSlider);
            }

            // Pause on focus (for accessibility)
            if (CONFIG.pauseOnFocus) {
                slides.forEach(slide => {
                    slide.addEventListener('focusin', pauseSlider);
                    slide.addEventListener('focusout', resumeSlider);
                });
            }

            // Handle visibility change (pause when tab not visible)
            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    pauseSlider();
                } else {
                    resumeSlider();
                }
            });

            // Touch swipe support
            let touchStartX = 0;
            let touchEndX = 0;

            sliderContainer.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            sliderContainer.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, { passive: true });

            function handleSwipe() {
                const swipeThreshold = 50;
                const diff = touchStartX - touchEndX;

                if (Math.abs(diff) > swipeThreshold) {
                    if (diff > 0) {
                        nextSlide();
                    } else {
                        prevSlide();
                    }
                }
            }

            // Initialize
            showSlide(0);
            startAutoAdvance();

        })();

        /**
         * Back to Top Button
         * Show/hide based on scroll position
         */
        (function() {
            const backToTopBtn = document.getElementById('backToTop');
            const sliderContainer = document.querySelector('.slider-container');
            const sliderHeight = sliderContainer.offsetHeight;

            function toggleBackToTop() {
                const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

                // Show button when scrolled past the slider
                if (scrollPosition > sliderHeight) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            }

            // Check on scroll
            window.addEventListener('scroll', toggleBackToTop, { passive: true });

            // Check on load
            toggleBackToTop();
        })();
    </script>

    <?php wp_footer(); ?>
</body>
</html>