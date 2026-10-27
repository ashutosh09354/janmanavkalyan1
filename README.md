# Janmanav Kalyan Foundation — Website (Goonj-style design)

React + Vite + Tailwind + React Router + Framer Motion + Lucide.

## Run
    npm install
    npm run dev        # development  -> http://localhost:5173
    npm run build      # production build in /dist
    npm run preview    # preview the production build

## Project structure
    index.html
    tailwind.config.js          colours (brand orange / charcoal / yellow) + fonts
    vite.config.js
    public/images/...           all photos, logo, QR, videos
    src/
      main.jsx  App.jsx  index.css
      data/siteData.js          <- edit contact, social, donation, impact numbers here
      pages/                    one file per page (routes are in App.jsx)
        HomePage.jsx   AboutPage.jsx   CausesPage.jsx   WorkPage.jsx
        CampaignsPage.jsx   StoryPage.jsx   MediaPage.jsx   GalleryPage.jsx
        ContactPage.jsx   DonatePage.jsx   LegalCenter.jsx   NotFound.jsx
      components/
        Navbar.jsx  Footer.jsx  MobileCTA.jsx  Logo.jsx  ScrollManager.jsx
        layout/Ticker.jsx       top orange scrolling announcement bar
        PageBanner.jsx          Goonj-style banner at the top of inner pages
        SectionTitle.jsx        big heading + orange underline
        home/                   one file per home-page section
          HeroSlider  MissionSection  WhatWeDo  ImpactBand
          ContributeSection  LatestUpdates  KnowingSection  WriteToUs
          homeImages.js         photo paths used on the home page
        About  CauseCard  ContactForm  DonateSection  Gallery  Lightbox
        MediaSection  MediaCard  StoriesSection  WorkSection ... (inner-page sections)

## Pages / routes
    /  /about  /causes  /work  /campaigns  /stories/:slug  /media  /gallery
    /contact  /donate  /legal-center

## Notes
- Placeholders in siteData.js (phone, email, Facebook, YouTube) must be replaced with real details.
- The "Write to us" and Contact forms need a backend (Formspree / EmailJS / your API) — see `submit` in each.
- Change the brand colour in tailwind.config.js (`brand`, `leaf`).
- For hosting, redirect every route to index.html (single-page app).
