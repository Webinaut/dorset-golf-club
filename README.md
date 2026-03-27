# Dorset Golf Club

Website: [Dorset Golf Club](https://dorsetgolfclub.com.au/)  
Github: [dorset-golf-club](https://github.com/Webinaut/dorset-golf-club)

## Description

Dorset Golf Club plays at Dorset Golf Course in Croyden, Melbourne, Australia. This static website replaces a Wordpress website the club had for many years.

## Features

- [Astro](https://astro.build/) static website stored in a Github repo and hosted on Netlify.
- Uses the [Pico CSS](https://picocss.com/) framework (Customised SCSS version) - A minimalist and lightweight starter kit that prioritizes semantic syntax, making every HTML element responsive and elegant by default.
- [Swiperjs](https://swiperjs.com/) used for front page hero image slider.

## Organisation

- SCSS Files:
  - main.scss: load partials and define type selectors
  - themes\\\_custom-colors.scss: custom color pallette
  - \_style.scss: global styles
- scoped SCSS definitions within component files
- Swiperjs script within front page layout file

### Structure

```
└── 📁src
    └── 📁components
        ├── ContactFormNetlify.astro
        ├── Dorset2024Gallery.astro
        ├── Dorset2025Gallery.astro
        ├── Email.astro
        ├── Footer.astro
        ├── FPImageStack.astro
        ├── FrontPageHeader.astro
        ├── Hamburger.astro
        ├── Header.astro
        ├── Hello.astro
        ├── Honour.astro
        ├── Location.astro
        ├── Logo.astro
        ├── Mail.astro
        ├── MobilePhone.astro
        ├── Navigation.astro
        ├── QuillEscape.astro
        ├── QuillInlineDown.astro
    └── 📁data
        ├── galleryphotos2024.json
        ├── galleryphotos2025.json
    └── 📁images
        └── 📁committee
        └── 📁DGCHonourBoards
        └── 📁front-page
        ├── Logos
    └── 📁layouts
        ├── FrontPageLayout.astro
        ├── GalleryLayout.astro
        ├── Layout.astro
    └── 📁pages
        ├── about.astro
        ├── contact.astro
        ├── galleries.astro
        ├── honour-boards.astro
        ├── index.astro
        ├── membership.astro
        ├── syllabus.astro
    └── 📁scripts
        ├── menu.js
    └── 📁styles
        └── 📁themes
            ├── _custom-colors.scss
            ├── README.md
        ├── _style.scss
        ├── global.scss
        └── my-swiper-styles.scss
```
