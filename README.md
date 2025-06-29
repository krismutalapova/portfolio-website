# Kristina Mutalapova's Portfolio Website

Welcome to my personal portfolio! This site showcases my work, skills, and projects as a full-stack developer. Built with React and styled using Tailwind CSS, it is designed to be clean, modern, and responsive.

## 🚀 Features

- **About Me**: Learn more about my background and interests.
- **Projects**: Explore a curated list of my projects, each with descriptions, tech stacks, and links.
- **Filtering**: Filter projects by technology tags.
- **Interactive Project Cards**: Expand/collapse project details for more information.
- **Contact Form**: Collapsible panel styled to match other sections. Send me a message directly from the site with real email delivery (EmailJS integration), inline validation, accessibility, and success/error feedback.
- **Contact**: Find my GitHub, LinkedIn, and email for networking or collaboration.
- **Dark/Light Mode**: Toggle between light and dark themes.
- **Scroll to Top**: Easily navigate back to the top of the page.
- **Responsive Navbar**: Hamburger menu for easy navigation on mobile.
- **404 Page**: Friendly error page for unknown routes.
- **Loading Spinner**: Animated spinner while loading projects.
- **Smooth Scrolling**: Seamless navigation between sections.
- **Skip to Main Content**: Accessibility feature for keyboard users.
- **Skills Section**: Visual display of key skills (JavaScript, Python, Java, React, Django, Docker, AI & Machine Learning, and more) with icons and proficiency bars, grouped by category.
- **Experience Section**: Timeline/cards for professional roles, companies, dates, and key achievements.
- **Education Section**: Timeline/cards for degrees, institutions, years, and relevant coursework or achievements.
- **Persistent Collapsible Panels**: The open/closed state of the Skills, Experience, and Education panels in the About Me section is remembered across page reloads.
- **Downloadable CV**: Download my CV as a PDF directly from the header or footer.

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS
- **State Management**: React Hooks (useState, useEffect)
- **Routing**: React Router DOM
- **Icons**: react-icons
- **Tooling**: Create React App, PostCSS, Autoprefixer

## 📁 Project Structure

```
my-portfolio/
├─ public/              # Static assets: index.html, icons, CV PDF
├─ src/
│  ├─ assets/           # Images for profile & projects
│  ├─ features/
│  │  ├─ about/         # AboutMe panels + data module
│  │  ├─ projects/      # Projects grid, cards & tag filter
│  │  └─ contact/       # Collapsible ContactForm + validation
│  ├─ components/       # Shared UI (Navbar, ThemeToggle, Spinner…)
│  ├─ App.js            # Routes & layout
│  └─ index.js          # App bootstrap
├─ tailwind.config.js   # Custom theming & animations
├─ postcss.config.js    # Autoprefixer
├─ .eslintrc.json       # Linting rules
├─ .prettierrc          # Formatting rules
└─ package.json         # Dependencies & scripts
└── README.md           # This file
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

## ✉️ EmailJS Integration (Contact Form)

To enable real email delivery from the contact form, you must set up [EmailJS](https://www.emailjs.com/):

1. Create a free EmailJS account and set up an email service and template.
2. Add the following variables to a `.env` file in your project root:
    ```env
    REACT_APP_EMAILJS_SERVICE_ID=your_service_id
    REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
    REACT_APP_EMAILJS_USER_ID=your_public_key
    ```
3. Make sure your template uses the variables `from_name`, `from_email`, and `message` in the email body.
4. The contact form will send emails to the address you configure in your EmailJS template.

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
- **components/ContactForm.js**: Contact form component with EmailJS integration.

## 📦 Dependencies

- react
- react-dom
- react-router-dom
- tailwindcss
- autoprefixer
- postcss
- react-icons
- emailjs-com

## 🧪 Testing

- Uses **Jest** and **React Testing Library** for unit and component tests.
- Test files are located alongside components and in `src/components/components.test.js`, `src/App.test.js`.

## ♿ Accessibility & UX

- Keyboard navigation and skip link support
- Accessible color contrast and focus styles
- Smooth scrolling and responsive design

## 🗂️ Project Filter Persistence

- The selected project filter/tag is now saved in your browser's localStorage and automatically restored after a page reload. This ensures your preferred filter remains active for a seamless browsing experience.
