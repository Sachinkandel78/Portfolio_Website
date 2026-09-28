# Portfolio Website

A responsive-style, single-page personal portfolio for **Sachin Kandel**, a Computer Engineering student focused on Python/Django, web development, IoT and AI/ML. It is built with plain HTML, CSS and a little JavaScript, so there is no build step and no dependencies to install.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Page Sections](#page-sections)
- [Getting Started](#getting-started)
- [Customization Guide](#customization-guide)
- [Known Issues & TODO](#known-issues--todo)
- [Deployment](#deployment)
- [Contact](#contact)

---

## Overview

The site is a one-page layout with a fixed navigation bar that smooth-scrolls between sections: Home, About, Skills, Portfolio and Contact. It uses a dark navy theme (`#081b29`) with a cyan neon accent (`#0ef`), glowing buttons and animated skill indicators.

## Features

- **Typing animation** in the hero section, cycling through roles such as *Backend Developer*, *Problem Solver*, *AI/ML Enthusiast*, *Full Stack Developer* and *Computer Engineer* (powered by Typed.js).
- **Fixed header** with smooth-scrolling anchor navigation.
- **Animated technical skill bars** for HTML, CSS, JavaScript, IoT (ESP32/Arduino), AI/ML and Python-Django.
- **Animated radial (circular) progress bars** for professional skills: Creativity, Communication, Problem Solving and Teamwork, built with SVG `stroke-dasharray` animation.
- **Hover-reveal project cards** that show a description overlay and an external link icon.
- **Contact section** with contact details, social icons and a message form.
- **Back-to-top button** and a footer copyright line.
- **CSS keyframe entrance animations** (slide from right, top, bottom and left).
- **Boxicons** for social, skill and UI icons.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3 (custom properties for animation delay, flexbox/grid, keyframes, SVG animation) |
| Scripting | Vanilla JavaScript |
| Libraries (CDN) | [Typed.js 2.0.15](https://github.com/mattboldt/typed.js) and [Boxicons 2.1.4](https://boxicons.com/) |
| Font | Poppins (declared in CSS) |

## Project Structure

```
Portfolio_Website-main/
├── index.html      # Page markup: all sections in one file
├── style.css       # All styling, layout and animations
├── main.js         # Typed.js configuration for the hero text
├── README.md       # Project documentation
└── images/         # Profile, about and project images
    ├── about.jpg
    ├── about1.png ... about6.png   # about6.png is the one used in the About section
    ├── homepage.png, homepage1.png, homepage3.png, homepage4.png
    └── 0e66ceb0da22e56fcc30cee4415b964b.jpg   # Placeholder project image
```

## Page Sections

| Section | Anchor | What it contains |
| --- | --- | --- |
| Home | `#home` | Greeting, name, typing role text, short intro, social icons, "View Resume" button |
| About | `#about` | Photo and bio ("Python & Django Developer") with a "More About Me" button |
| Services | `#services` | Three service cards (currently placeholder text) |
| Skills | `#services` (nav link) | Technical skill bars and professional skill radial charts |
| Portfolio | `#project` | "Latest Projects" cards with hover overlays |
| Contact | `#contact` | Email, phone, social links and contact form |

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

No installation is required.

### Option 1: Open directly

1. Download or clone the repository.
2. Open `index.html` in any modern browser.

### Option 2: Run a local server (recommended)

```bash
# Clone the repository
git clone https://github.com/<your-username>/Portfolio_Website.git
cd Portfolio_Website

# Python 3
python -m http.server 8000

# or, with the VS Code "Live Server" extension: right-click index.html -> Open with Live Server
```

Then visit `http://localhost:8000`.

> An internet connection is needed the first time, because Typed.js and Boxicons load from the unpkg CDN.

## Customization Guide

**Change your name, intro or bio:** edit the `.logo`, `.home-content` and `.about-text` blocks in `index.html`.

**Change the typing roles:** edit the `strings` array in `main.js`.

```js
strings: ["Backend Developer", "Problem Solver", "AI/ML Enthusiast"]
```

**Change skill percentages:**
- Technical bars: edit the `width` values under `.progress-line.html span`, `.css`, `.Javascript`, `.iot`, `.AiMl` and `.Django` in `style.css`.
- Radial bars: edit `stroke-dashoffset` in the `@keyframes animate-path1` to `animate-path4` rules. The circle length is 502, so the offset is `502 x (1 - percentage)`. Also update the visible `%` text in `index.html`.

**Add a project:** copy one `.row` block inside `.portfolio-content` in `index.html`, then change the image, title, description and link.

**Change the color theme:** replace `#0ef` (accent) and `#081b29` (background) in `style.css`.

**Add your images:** place them in `images/` and update the `src` attributes in `index.html`.

## Known Issues & TODO

These came up while reviewing the code and are worth fixing before publishing:

- [ ] **Placeholder content:** the three Services cards all say "UI/UX Design" with Lorem ipsum text, and the three project cards use the same image and Lorem ipsum. Replace them with real content.
- [ ] **Dead links:** social icons, "View Resume", "More About Me" and "Learn More" all point to `#`. Add real URLs (and a resume PDF).
- [ ] **Navigation anchors:** the "Skills" link points to `#services`, and the Portfolio section has a duplicated `id` attribute (`id="portfolio" id="project"`, plus another `id="project"` on an inner div). Give each section one unique id.
- [ ] **Contact form does nothing:** `<form action="">` has no backend. Connect a service such as Formspree, EmailJS or Netlify Forms. The name and subject inputs also have an empty `type` attribute; set `type="text"`.
- [ ] **No responsive styles:** `style.css` has no `@media` queries, so the layout will not adapt well to phones and tablets. Adding breakpoints and a mobile menu is recommended.
- [ ] **Font not loaded:** `Poppins` is set in CSS but no Google Fonts link exists in `index.html`, so it falls back to `sans-serif` unless installed locally.
- [ ] **Typed.js option typo:** `backdelay` should be `backDelay` in `main.js`.
- [ ] **Accessibility and SEO:** add `alt` text to project images, a meta description, and a favicon; change the page `<title>` from "My Portfolio" to something more specific.
- [ ] **Image size:** the images folder is about 5 MB. Compress or convert to WebP, and remove unused images.
- [ ] **Privacy:** the phone number is partly masked but the email is public in the source. Consider a contact form instead.
- [ ] **Existing README:** the previous README was an ASCII wireframe of the planned layout (it mentioned Java and C++ skills, which differ from the built site). This file replaces it.

## Deployment

Because the site is fully static, it can be hosted for free on:

- **GitHub Pages:** Settings -> Pages -> deploy from the `main` branch, root folder.
- **Netlify** or **Vercel:** drag and drop the project folder, or connect the repository.

## Contact

**Sachin Kandel**
Email: sachinkandel78@gmail.com

---

© Sachin Kandel. All rights reserved.
