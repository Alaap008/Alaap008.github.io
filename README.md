# 🚀 Alaap Banerjee - Portfolio Website

A modern, responsive portfolio website showcasing my professional journey as a Full Stack Developer. Built with React and featuring smooth animations, interactive components, and a clean design.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC)

## ✨ Features

### 🎨 **Modern Design**
- Clean, professional layout with dark theme
- Responsive design that works on all devices
- Smooth scrolling navigation with fixed header
- Custom green accent color scheme

### 🎬 **Interactive Animations**
- **Scroll-triggered animations** using Intersection Observer API
- **Timeline experience section** with staggered reveals
- **Animated skill bars** with shimmer effects and progress indicators
- **Floating particles** and hover effects
- **Smooth transitions** throughout the site

### 📱 **Responsive Navigation**
- Fixed header with smooth scrolling to sections
- Mobile-friendly hamburger menu with auto-close
- Navigation links with hover effects and underline animations

### 💼 **Professional Sections**
- **Hero Section**: Dynamic typing animation with TypeAnimation
- **Experience**: Vertical timeline with detailed achievements
- **Skills**: Animated progress bars with technology icons
- **Portfolio**: Project showcase grid
- **Contact**: Contact form and information

## 🛠️ Technologies Used

### **Frontend**
- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Headless UI** - Unstyled, accessible UI components
- **Heroicons** - Beautiful hand-crafted SVG icons

### **Animations & Effects**
- **React Type Animation** - Typing animation effects
- **CSS Animations** - Custom keyframe animations
- **Intersection Observer API** - Scroll-triggered animations
- **CSS Transforms** - Hardware-accelerated animations

### **Build Tools**
- **Parcel** - Zero-configuration build tool
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/alaapbanerjee/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:1234
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Hero section with typing animation
│   ├── Experience.jsx   # Timeline experience section
│   ├── Skills.jsx       # Animated skills section
│   ├── Portfolio.jsx    # Projects showcase
│   ├── Contact.jsx      # Contact form
│   └── Footer.jsx       # Footer component
├── styles/              # CSS files
│   ├── global.css       # Global styles and utilities
│   └── components.css   # Component-specific animations
├── App.jsx              # Main app component
├── index.jsx            # Entry point
└── index.html           # HTML template
```

## 🎯 Key Features Breakdown

### **Smooth Scrolling Navigation**
- CSS `scroll-behavior: smooth` for native smooth scrolling
- Fixed header with backdrop blur effect
- Mobile menu with slide-down animation
- Auto-close mobile menu on link click

### **Timeline Experience Section**
- Vertical timeline with alternating card layout
- Scroll-triggered animations with staggered timing
- Detailed achievement lists with quantified results
- Responsive design for mobile devices

### **Animated Skills Section**
- Technology icons with bounce animations
- Progress bars with gradient fills and shimmer effects
- Percentage counters with scale animations
- Skill descriptions and floating particles

### **Performance Optimizations**
- Intersection Observer for efficient scroll detection
- CSS transforms for 60fps animations
- Lazy loading of animations
- Responsive image handling

## 🎨 Animation System

### **Scroll-Triggered Animations**
```javascript
// Intersection Observer setup
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Trigger animations with staggered delays
        setTimeout(() => {
          setVisibleItems(prev => new Set([...prev, index]));
        }, index * 150);
      }
    });
  },
  { threshold: 0.3 }
);
```

### **CSS Animation Classes**
- `animate-fade-in` - Fade in with upward slide
- `animate-skill-reveal` - Skill item reveal animation
- `animate-timeline-grow` - Timeline line growth
- `animate-shimmer` - Shimmer effect for skill bars

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Touch Friendly**: Optimized for touch interactions
- **Performance**: Reduced animations on mobile for better performance

## 🌟 Professional Experience Highlighted

### **Senior Software Developer (2024 - Present)**
- Angular v9 → v14 upgrade (95% build time reduction)
- Role-based access control for 500+ users
- Jest testing & CI/CD with AWS Amplify
- Lighthouse scores improved to 95+

### **Software Developer (2021 - 2024)**
- Mobile app features (30% processing speed increase)
- Approval Module (60% review time reduction)
- Catalogue Listing rewrite (73% ticket reduction)
- Bulk image tool (4+ hours saved/week)

## 🎯 Skills Showcase

- **ReactJS**: 90% - Building dynamic user interfaces
- **HTML & CSS**: 95% - Frontend markup and styling
- **JavaScript**: 90% - Core programming language
- **Angular**: 85% - Enterprise-scale applications
- **TypeScript**: 85% - Type-safe development
- **Node.js**: 80% - Server-side development
- **Redux**: 80% - State management
- **Jest**: 75% - Unit testing

## 🚀 Deployment

This portfolio is optimized for deployment on:
- **Netlify** - Automatic deployments from Git
- **Vercel** - Zero-config deployments
- **GitHub Pages** - Free hosting for static sites
- **AWS S3** - Scalable cloud hosting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: alaapbanerjee08@gmail.com
- **Phone**: +91 8617471399
- **LinkedIn**: [Connect with me](https://linkedin.com/in/alaapbanerjee)
- **GitHub**: [View my projects](https://github.com/alaapbanerjee)

---

**Built with ❤️ by Alaap Banerjee**

*Frontend-focused Full Stack Developer passionate about creating exceptional user experiences* 
