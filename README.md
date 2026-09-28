<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=header" width="100%"/>

<p align="center" style="margin:0; padding:0;">
  <img
    alt="Stardex Logo"
    src="public/logo.png"
    width="300"
    style="margin-top:-80px; margin-bottom:0; padding:0;"
  />
</p>

<h1 align="center">🌍 Stardex — A Personal Portfolio</h1>

<p align="center">
  <strong>A modern, responsive personal portfolio built with React, Tailwind CSS, and Framer Motion</strong>
</p>

<p align="center">
  A sleek developer portfolio showcasing projects, technical skills, professional experience,
  education, and an interactive contact experience with modern animations.
</p>

<p align="center">
  <a href="https://stardex-sifat.netlify.app/">
    <img src="https://img.shields.io/badge/🌐_Live_Demo-Stardex-blue?style=for-the-badge" />
  </a>
  <a href="https://github.com/sifatahammed/Stardex-A-Personal-Portfolio">
    <img src="https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github" />
  </a>
</p>

<p align="center">
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/Frontend-React-61DAFB?logo=react&logoColor=black" />
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Styling-Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white" />
  </a>
  <a href="https://www.framer.com/motion/">
    <img src="https://img.shields.io/badge/Animation-Framer_Motion-0055FF?logo=framer&logoColor=white" />
  </a>
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Build-Vite-646CFF?logo=vite&logoColor=white" />
  </a>
  <a href="https://www.emailjs.com/">
    <img src="https://img.shields.io/badge/Email-EmailJS-orange" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

---

## ✨ About Stardex

**Stardex** is a modern personal portfolio website designed to present my work,
skills, experience, education, and professional journey in an engaging and interactive way.

The portfolio combines a clean developer-focused interface with animated UI elements,
interactive project cards, visual skill representations, responsive layouts, and a functional
contact form powered by EmailJS.

The goal of Stardex is to provide visitors with a quick and visually appealing overview of
my capabilities as a **Full Stack Developer**, with a particular interest in modern frontend
technologies and AI-powered applications.

---

## 🚀 Live Demo

🌐 **Portfolio:**  
https://stardex-sifat.netlify.app/

---

## 🎯 Portfolio Highlights

- 👨‍💻 Full Stack Developer portfolio
- ⚛️ Component-based React architecture
- 🎨 Modern Tailwind CSS interface
- ✨ Smooth Framer Motion animations
- 📱 Fully responsive design
- 🧩 Reusable section wrapper components
- 💼 Interactive project showcase
- 🛠️ Animated technology/skill showcase
- 🎓 Education and professional experience timeline
- 📬 Functional EmailJS contact form
- ⭐ Animated background/star-field visual
- 🎭 Interactive 3D-style skill visualization
- ⚡ Fast Vite development environment
- 📂 Organized and scalable project structure

---

# 🏗️ Application Architecture

The portfolio follows a component-based React architecture where the main application
renders individual portfolio sections through reusable components.

### Architecture Overview

```text
Portfolio Visitor
       │
       ├── Navigates
       │      │
       │      ▼
       │   Navigation
       │   [Navbar.jsx]
       │
       └── Opens Portfolio
              │
              ▼
        React Mount
        [main.jsx]
              │
              ▼
        Portfolio App
          [App.jsx]
              │
       ┌──────┼───────────────────────┐
       │      │          │            │
       ▼      ▼          ▼            ▼
    Skills  Contact   Profile      Experience
    & Work  & Visuals & Education    Timeline
