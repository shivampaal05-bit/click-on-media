# Click On Media — Modern React Hero Section

High-converting, responsive Video Hero Section and Navigation Bar for **Click On Media**, built with **HTML5, CSS3, Modern JavaScript, and React 18 (Vite)**.

## 🚀 Quick Start

### 1. Development Server
Run the local development server with instant Hot Module Replacement (HMR):
```bash
npm run dev
```
It will open automatically in your browser at `http://localhost:3000`.

### 2. Production Build
To create a production-ready optimized build:
```bash
npm run build
```
The output will be placed in the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
click on media/
├── public/
│   └── assets/
│       ├── hero-video.mp4       # Autoplaying background video
│       ├── logo-light.png       # Optimized high-res transparent brand logo
│       ├── logo-transparent.png # Original palette transparent logo
│       └── logo.jpg             # Original logo file
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Transparent + frosted glass sticky navigation
│   │   ├── Hero.jsx             # Fullscreen video hero, headline & dual pill CTAs
│   │   ├── AudioToggle.jsx      # Video mute/unmute circular audio control
│   │   └── ContactModal.jsx     # Lead generation & consultation modal
│   ├── styles/
│   │   ├── index.css            # Global variables, reset, font imports
│   │   ├── Navbar.css           # Navigation & mobile slide-out drawer styles
│   │   ├── Hero.css             # Dual vignette overlay, responsive typography
│   │   ├── AudioToggle.css      # Bottom-right audio toggle styling
│   │   └── ContactModal.css     # Glassmorphic modal popup styles
│   ├── App.jsx                  # Main application component
│   └── main.jsx                 # React root mount
├── dist/                        # Production build (ready to deploy)
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
└── vite.config.js               # Vite configuration
```

---

## ✨ Features
- **React Components**: Clean, modular, component-driven architecture (`Navbar`, `Hero`, `AudioToggle`, `ContactModal`).
- **Autoplaying Background Video**: Smooth looping video with strict autoplay compliance across all modern browsers.
- **Dynamic Audio Control**: Interactive mute/unmute button located at the bottom-right corner.
- **Glassmorphic Navigation Bar**: Transparent at the top and transitions into a frosted glass background on scroll.
- **Mobile Responsive Drawer**: Animated hamburger menu with full-screen slide drawer on tablet and mobile devices.
- **Interactive Consultation Modal**: Accessible popup triggered by "Partner as a Client" and "Get App" CTAs.
