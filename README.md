# Maasai Investments WordPress Theme

Custom WordPress theme for Maasai Investments platform.

## Installation

1. The theme is already installed in `wp-content/themes/maasai-investments-theme/`
2. Go to WordPress Admin > Appearance > Themes
3. Activate the "Maasai Investments" theme

## Theme Structure

```
maasai-investments-theme/
├── style.css           # Theme metadata and base styles
├── functions.php       # Theme functions and custom post types
├── index.php          # Default template (fallback)
├── front-page.php     # Homepage template (full slider page)
├── assets/
│   └── images/        # Theme images
│       ├── logo.png
│       ├── goats.png
│       ├── sofy.png
│       ├── natumi.png
│       └── goat-profit.png
└── README.md          # This file
```

## Features

- Full-page slider homepage with investment steps
- Responsive design (mobile, tablet, desktop)
- WhatsApp integration in header
- Team profiles section (Sofy, Natumi)
- Statistics showcase
- Contact form section
- Back-to-top button
- Smooth scroll navigation
- Slide animations (left/right)
- Custom Post Type: Team Profiles

## Configuration

### Homepage

The homepage uses `front-page.php` template which includes:
- Investment slider (5 slides)
- Profile sections (Sofy, Natumi)
- Statistics page
- Contact form

### Custom Post Type: Team Profiles

Create team member profiles in WordPress Admin > Team Profiles

Fields:
- Title (Name)
- Featured Image (Photo)
- Content (Bio)
- Custom Fields:
  - Role
  - Experience
  - Key Expertise
  - Location

### WhatsApp Contact

WhatsApp number configured in header: +254 718 130265
To change: Edit `front-page.php` line with `wa.me` URL

## Customization

### Colors

Primary colors defined in CSS custom properties (`:root`):
- `--color-primary`: #ff6b35
- `--color-primary-dark`: #f7931e
- `--gradient-primary`: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)

### Typography

Fonts:
- Headings: Cormorant Garamond (serif)
- Body: Inter (sans-serif)

### Images

To replace images:
1. Upload new images to `assets/images/`
2. Keep same filenames or update references in `front-page.php`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Preload critical assets
- Optimized font loading
- Lazy loading for images
- CSS custom properties for theming
- Passive event listeners

## Notes

- This is a single-page theme focused on the homepage
- Additional templates can be created for blog posts, pages, etc.
- The theme includes structured data (JSON-LD) for SEO
- Social media meta tags (Open Graph) included

## Support

For questions or modifications, contact Martien de Jong.
