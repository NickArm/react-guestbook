# Welcomy Frontend (React)

This is the React frontend for Welcomy — a digital welcome book for properties like guesthouses and Airbnb listings.

## Project Overview

It connects with the Laravel-powered API to render a property-specific experience based on subdomain (e.g., `https://lias-apartment.welcomy.net/`).

### Example Case Studies

- https://lias-apartment.welcomy.net/
- https://vasileiosloft.welcomy.net/

## Features

- React 18 with Vite
- Tailwind CSS for modern UI
- Dynamic page rendering based on JSON API response
- Enabled sections: welcome, check-in/out, WiFi, location, rules, FAQs, recommendations, review, gallery, and more
- Subdomain-based API data fetch: `/api/property/{slug}`
- Offline support (PWA enabled with `vite-plugin-pwa`)
- Scrollspy navigation and responsive mobile layout
- Image lazy-loading and structured content display
- Email integrations with Brevo for contact and samples
- Icon support via Lucide and Font Awesome
- Electron.js ready (for Windows native app porting)

## Licensing

**LICENSE: All rights reserved.**

This repository is public only for demonstration purposes. You may not clone, reuse, or copy the code without express permission.

Contact: **Armenis Nick – armenisnick@gmail.com**