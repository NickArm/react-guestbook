# 🏡 Welcomy – Property Guest Guide App

A modern, mobile-friendly web application that provides guests with all the essential information about their stay — including check-in/out details, house rules, amenities, local transportation, emergency contacts, and more. Built using **React**, **Tailwind CSS**, and powered by a dynamic **Laravel API** backend.

---

## ✨ Features

- 🌐 Dynamic property loading via subdomain (e.g. `lias-apartment.welcomy.net`)
- 🗂️ Modular page structure powered by API (e.g. welcome, rules, wifi, faq)
- 📷 Optimized Cloudinary-powered image galleries
- 🎨 Per-property custom colors and branding
- 📱 Mobile-first design with bottom navigation
- 🧭 Directions via Google Maps
- 📶 WiFi credentials, contact details, and emergency numbers
- 🔐 Secure backend with user authentication and admin panel
- ⚙️ Easily extendable (FAQs, transportation, gallery, etc.)

---

## 🛠️ Tech Stack

- **Frontend**: React, React Router, Tailwind CSS, Framer Motion, FontAwesome, Swiper.js
- **Backend**: Laravel 11 API (with UUIDs, policy-based access, resource transformers)
- **Image Hosting**: Cloudinary
- **Deployment**: Docker, Nginx, Git, Ubuntu 24.04, cPanel (optional fallback)

---

## 🧩 Project Structure

```bash
/
├── public/               # Static files & fallback images
├── src/
│   ├── components/       # Reusable UI components
│   ├── context/          # Global property context (React Context API)
│   ├── pages/            # Individual page views (Welcome, Rules, FAQ, etc.)
│   ├── config/           # Dynamic menu config
│   ├── utils/            # Subdomain resolver, helpers
│   └── App.jsx           # Main app router
```

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/your-username/welcomy-app.git
cd welcomy-app

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Make sure your backend is running at `https://app.welcomy.net/api/property/:slug`

---

## 🌐 API Response Sample

> `GET /api/property/lias-apartment`

Returns all data for the subdomain `lias-apartment`, including:

```json
{
  "id": "...",
  "slug": "lias-apartment",
  "name": "Lia's Apartment",
  "gallery": [...],
  "rules": [...],
  "wifi": {...},
  "transportation": [...],
  "enabled_pages": [...],
  "settings": {
    "primary_color": "#000000",
    "secondary_color": "#ffffff"
  }
}
```

---

## 📸 Cloudinary Optimization

All images are served via Cloudinary using `w_600,q_auto,f_auto` for performance. Fallbacks are included for empty galleries or missing fields.

---

## 📬 Author

**Nick Armenis**  
📧 armenisnick@gmail.com  
🌐 https://armenisnick.gr

---

## 📄 License

MIT – use it freely, improve it, and give back if you'd like 🚀
