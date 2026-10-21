# Prince Singh Portfolio

A minimalist, high-performance creative portfolio website for **Prince Singh** (Graphic Designer & Video Editor based in Udaipur, India), recreated from the Framer Porto template using modern **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) or [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Production assets are generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🛠️ Tech Stack & Design System

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations & Transitions**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**:
  - **Display / Headings**: Clash Display (via Fontshare CDN)
  - **Body / Sans**: Inter
  - **Monospace / Labels**: Fragment Mono

---

## 📁 Project Structure

```
website/
├── public/
│   └── assets/               # Local images, mockups, posters, and synced brand logos
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Floating header with live nav and CTA
│   │   ├── Hero.jsx                 # Live clock, Clash Display wordmark, meta badges, hero artwork
│   │   ├── ApproachSection.jsx      # 01 //Approach • Three Phases
│   │   ├── BrandTicker.jsx          # Infinite marquee of brand logos in rounded cards
│   │   ├── PortfolioSection.jsx     # 02 //Portfolio • Zeni, Flakestake, Matchino, Vastukey
│   │   ├── WhoAmISection.jsx        # 03 //Who Am I • Retro TV Head Person card & bio
│   │   ├── ServicesSection.jsx      # 04 //Services • Fast Delivery & service tiers
│   │   ├── VoiceOfPrinceSection.jsx # 05 //Voice Of Prince • Philosophy, signature, angled mockups
│   │   ├── StatsSection.jsx         # 06 //Stats • Big or Small? metric counters
│   │   ├── ExperienceSection.jsx    # 07 //Experience • Timeline & scrolling project strip
│   │   ├── PricingSection.jsx       # 08 //Pricing • Best Plans ($499, $599, $699) + Timeline banner
│   │   ├── StackSection.jsx         # 09 //Stack • Design Ecosystem, Resources, Custom PC
│   │   ├── TestimonialsSection.jsx  # 010 //Testimonial • Client quotes from Apple, MS, Bose
│   │   ├── FaqSection.jsx           # 011 //FAQ • Interactive accordion
│   │   ├── ContactSection.jsx       # Let's Work Together, red portrait, marquee & giant PRINCE
│   │   ├── ContactModal.jsx         # Direct inquiry modal with WhatsApp integration
│   │   ├── ProjectModal.jsx         # Interactive case study modal for portfolio items
│   │   ├── PostersModal.jsx         # Gallery modal for experimental posters & graphics
│   │   └── CustomCursor.jsx         # Smooth pointer-following circle cursor
│   ├── data/
│   │   └── siteData.js              # Centralized portfolio data, testimonials, FAQs, and pricing
│   ├── App.jsx                      # Root application layout and modal state management
│   ├── index.css                    # Global Tailwind directives & dark theme utilities
│   └── main.jsx                     # Vite entry point
├── index.html                       # HTML document template with web fonts
├── tailwind.config.js               # Theme configuration (Clash Display, custom dark palette)
└── package.json                     # Project dependencies and build scripts
```

---

## 🌟 Key Features

1. **Pixel-Perfect Porto Layout**:
   - Matches the original Framer design system with exact section tagging (`01 //Approach`, `02 //Portfolio`, etc.).
   - Clean dark palette (`#080808` background, `#101010` surfaces, `#202020` borders).

2. **Matchino Café Sourced From Mocha Assets**:
   - Uses authentic mockups and brand designs strictly from the local `Mocha` project folder.

3. **Smooth Custom Cursor**:
   - Fluid desktop mouse-following cursor that expands over clickable elements with zero residual stationary dots.

4. **Direct Client Conversion**:
   - Pre-formatted WhatsApp inquiry triggers directly with selected packages and project briefs.
