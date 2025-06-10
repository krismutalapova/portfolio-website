# Kristina Mutalapova's Portfolio Website

Welcome to my personal portfolio! This site showcases my work, skills, and projects as a full-stack developer. Built with React and styled using Tailwind CSS, it is designed to be clean, modern, and responsive.

## 🚀 Features
- **About Me**: Learn more about my background and interests.
- **Projects**: Explore a curated list of my projects, each with descriptions, tech stacks, and links.
- **Filtering**: Filter projects by technology tags.
- **Interactive Project Cards**: Expand/collapse project details for more information.
- **Contact**: Find my GitHub, LinkedIn, and email for networking or collaboration.
- **Dark/Light Mode**: Toggle between light and dark themes.
- **Scroll to Top**: Easily navigate back to the top of the page.
- **Responsive Navbar**: Hamburger menu for easy navigation on mobile.
- **404 Page**: Friendly error page for unknown routes.
- **Loading Spinner**: Animated spinner while loading projects.
- **Smooth Scrolling**: Seamless navigation between sections.
- **Skip to Main Content**: Accessibility feature for keyboard users.

## 🛠️ Tech Stack
- **Frontend**: React, Tailwind CSS
- **State Management**: React Hooks (useState, useEffect)
- **Routing**: React Router DOM
- **Icons**: react-icons
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
- **App.js**: Main layout, imports all sections and utilities, sets up routing and 404 page.
- **components/Navbar.js**: Responsive navigation bar with hamburger menu and anchor links.
- **components/Header.js**: Profile image, name, and tagline.
- **components/AboutMe.js**: Short bio and background.
- **components/Projects.js**: Interactive project cards with filtering, details, and loading spinner.
- **components/Footer.js**: Contact info and social links.
- **components/ThemeToggle.js**: Light/dark mode toggle.
- **components/ScrollToTop.js**: Floating button to scroll up.
- **components/NotFound.js**: Custom 404 error page.
- **components/Spinner.js**: Animated loading spinner.
- **assets/**: Images for profile and projects.

## 📦 Dependencies
- react
- react-dom
- react-router-dom
- tailwindcss
- autoprefixer
- postcss
- react-icons

## 🧪 Testing
- Uses **Jest** and **React Testing Library** for unit and component tests.
- Test files are located alongside components and in `src/components/components.test.js` and `src/App.test.js`.

## ♿ Accessibility & UX
- Keyboard navigation and skip link support
- Accessible color contrast and focus styles
- Smooth scrolling and responsive design