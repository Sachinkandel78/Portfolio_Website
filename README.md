# Portfolio Website

A responsive, single-page personal portfolio for **Sachin Kandel**, a Computer Engineering student focused on Python/Django, web development, IoT and AI/ML. Built with plain HTML, CSS and JavaScript — no build step, no dependencies to install.

**Live site:** [sachinkandel78.github.io/Portfolio_Website](https://sachinkandel78.github.io/Portfolio_Website/)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Page Sections](#page-sections)
- [Getting Started](#getting-started)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [Contact](#contact)

---

## Overview

The site is a one-page layout with a fixed navigation bar that smooth-scrolls between sections: Home, About, Skills, Portfolio and Contact. It uses a dark navy theme (`#081b29`) with a cyan neon accent (`#0ef`), glowing buttons and animated skill indicators. The layout is fully responsive, with a collapsible mobile menu below 768px.

## Features

- **Typing animation** in the hero section, cycling through roles (Backend Developer, Problem Solver, AI/ML Enthusiast, Full Stack Developer, Computer Engineer), powered by Typed.js.
- **Fixed header** with smooth-scrolling anchor navigation.
- **Scroll-spy navigation** — the active nav link is underlined automatically as the visitor scrolls past each section.
- **Hamburger menu** for mobile (below 768px), built with vanilla JS and a slide-in panel.
- **Animated technical skill bars** for HTML, CSS, JavaScript, IoT (ESP32/Arduino), AI/ML and Python-Django.
- **Animated radial (circular) progress bars** for professional skills: Creativity, Communication, Problem Solving and Teamwork, built with SVG `stroke-dasharray` animation.
- **Hover-reveal project cards** with real descriptions for Backend, IoT and AI/ML projects.
- **Working contact form** connected to [Formspree](https://formspree.io), so submissions arrive by email — no backend code required.
- **Responsive layout** — About, Skills and Contact sections reflow and stack cleanly on tablets and phones.
- **Accessible** — `aria-label`s on all icon-only links, `alt` text on every image, and a proper meta description and favicon for SEO.
- **Back-to-top button** and a footer copyright line.
- **CSS keyframe entrance animations** (slide from right, top, bottom and left).
- **Boxicons** for social, skill and UI icons; **Poppins** loaded via Google Fonts.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3 (custom properties, flexbox/grid, keyframes, SVG animation, `@media` breakpoints) |
| Scripting | Vanilla JavaScript (hamburger toggle, scroll-spy) |
| Libraries (CDN) | [Typed.js 2.0.15](https://github.com/mattboldt/typed.js), [Boxicons 2.1.4](https://boxicons.com/) |
| Fonts | Poppins (Google Fonts) |
| Form backend | [Formspree](https://formspree.io) (free tier, 50 submissions/month) |
| Hosting | GitHub Pages |

## Project Structure

```
Portfolio_Website-main/
├── index.html          # Page markup: all sections in one file
├── style.css            # All styling, layout, animations and responsive rules
├── main.js               # Typed.js config, hamburger toggle, scroll-spy
├── favicon.svg          # Browser tab icon (SK monogram, theme colors)
├── README.md
├── files/
│   └── Sachin_Kandel.pdf   # Downloadable resume
└── images/
    ├── about6.png              # About section photo
    ├── homepage4.jpg           # Home hero background (compressed)
    └── 0e66ceb0da22e56fcc30cee4415b964b.jpg   # Project card image
```

## Page Sections

| Section | Anchor | What it contains |
| --- | --- | --- |
| Home | `#home` | Greeting, name, typing role text, short intro, social icons (Facebook, WhatsApp, GitHub, LinkedIn), "View Resume" button |
| About | `#about` | Photo and bio ("Python & Django Developer") with a "More About Me" button linking to LinkedIn |
| Services | `#services` | Three service cards: Backend Development, IoT Solutions, AI/ML Projects |
| Skills | `#skills` | Technical skill bars and professional skill radial charts |
| Portfolio | `#project` | Three project cards: Django Web Application, IoT Monitoring System, AI/ML Mini Project |
| Contact | `#contact` | Email, phone, social links and a working contact form |

### Current skill levels

| Technical skill | Level | Professional skill | Level |
| --- | --- | --- | --- |
| HTML | 80% | Creativity | 90% |
| CSS | 70% | Communication | 65% |
| JavaScript | 60% | Problem Solving | 75% |
| IoT (ESP32, Arduino) | 30% | Teamwork | 85% |
| AI/ML | 45% | | |
| Python-Django | 70% | | |

## Getting Started

No installation required.

### Option 1: Open directly

1. Clone or download the repository.
2. Open `index.html` in any modern browser.

### Option 2: Run a local server (recommended)

```bash
git clone https://github.com/Sachinkandel78/Portfolio_Website.git
cd Portfolio_Website

# Python 3
python -m http.server 8000

# or use the VS Code "Live Server" extension
```

Then visit `http://localhost:8000`.

> An internet connection is needed, since Typed.js, Boxicons and the Poppins font load from CDNs.

## Customization Guide

**Change name, intro or bio:** edit the `.logo`, `.home-content` and `.about-text` blocks in `index.html`.

**Change the typing roles:** edit the `strings` array in `main.js`.

**Change skill percentages:**
- Technical bars: edit the `width` values under `.progress-line.html span`, `.css`, `.Javascript`, `.iot`, `.AiMl` and `.Django` in `style.css`, and the matching `content` values in `.progress-line...span::after`.
- Radial bars: edit `stroke-dashoffset` in `@keyframes animate-path1` to `animate-path4` (circle length is 502, so offset = `502 × (1 - percentage)`), and update the visible `%` text in `index.html`.

**Add a project:** copy one `.row` block inside `.portfolio-content` in `index.html`, then change the image, title, description and link.

**Change the color theme:** replace `#0ef` (accent) and `#081b29` (background) throughout `style.css`.

**Replace the resume:** swap `files/Sachin_Kandel.pdf` and keep the filename, or update the `href` on the "View Resume" button.

**Contact form:** submissions go to the Formspree endpoint set in the form's `action` attribute. Update it in the Formspree dashboard if the receiving email changes.

## Deployment

The site is hosted on **GitHub Pages**, deployed automatically from the `main` branch on every push:

1. Push changes to `main`.
2. GitHub Pages rebuilds automatically (usually within 1–2 minutes — check the **Actions** tab for build status).
3. Live at: `https://sachinkandel78.github.io/Portfolio_Website/`

To deploy your own fork:
- Go to **Settings → Pages**
- Source: **Deploy from a branch**
- Branch: **main**, folder: **/ (root)**
- Save

## Contact

**Sachin Kandel**
Email: sachinkandel78@gmail.com
[LinkedIn](https://www.linkedin.com/in/sachin-kandel78/) · [GitHub](https://github.com/Sachinkandel78)

---

© Sachin Kandel. All rights reserved.
