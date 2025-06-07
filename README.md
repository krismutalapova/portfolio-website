# Kristina Mutalapova's Portfolio Website

Welcome to my personal portfolio! This site showcases my work, skills, and projects as a full-stack developer. Built with React and styled using Tailwind CSS, it is designed to be clean, modern, and responsive.

## 🚀 Features
- **About Me**: Learn more about my background and interests.
- **Projects**: Explore a curated list of my projects, each with descriptions, tech stacks, and links.
- **Contact**: Find my GitHub, LinkedIn, and email for networking or collaboration.
- **Dark/Light Mode**: Toggle between light and dark themes.
- **Scroll to Top**: Easily navigate back to the top of the page.

## 🛠️ Tech Stack
- **Frontend**: React, Tailwind CSS
- **State Management**: React Hooks (useState, useEffect)
- **Tooling**: Create React App, PostCSS, Autoprefixer

## 📁 Project Structure
```
my-portfolio/
├── public/              # Static files (index.html, icons, etc.)
├── src/
│   ├── assets/          # Images for projects and profile
│   ├── components/      # React components (Navbar, Header, AboutMe, Projects, Footer, etc.)
│   ├── App.js           # Main app layout
│   ├── index.js         # Entry point
│   └── ...
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── package.json         # Project metadata and scripts
└── README.md            # This file
```

## 🧑‍💻 How to Run & Build
1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Start the development server**:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.
3. **Build for production**:
   ```bash
   npm run build
   ```
   The optimized build will be in the `build/` folder.

## 📝 Code Overview
- **App.js**: Main layout, imports all sections and utilities.
- **components/Navbar.js**: Top navigation bar with anchor links.
- **components/Header.js**: Profile image, name, and tagline.
- **components/AboutMe.js**: Short bio and background.
- **components/Projects.js**: Interactive project cards with filtering and details.
- **components/Footer.js**: Contact info and social links.
- **components/ThemeToggle.js**: Light/dark mode toggle.
- **components/ScrollToTop.js**: Floating button to scroll up.
- **assets/**: Images for profile and projects.
