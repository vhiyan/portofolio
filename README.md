# Portfolio Website - Kristiawan Devianto

A modern, interactive portfolio website showcasing my work as an Embedded Systems Developer. Built with Nuxt 3, featuring a stunning 3D aerospace-themed design with smooth animations.

## 🚀 Features

- **3D Interactive Hero Section** - Rotating drone model with atmospheric particles using TresJS (Three.js for Vue)
- **Smooth Animations** - Elegant page transitions and element animations powered by anime.js
- **Responsive Design** - Optimized for all devices with Tailwind CSS
- **PDF Resume Generation** - Download resume directly from the website using jsPDF
- **Project Showcase** - Highlighting real projects from GitHub repositories
- **Modern UI/UX** - Bright aerospace theme with glassmorphism effects

## 🛠️ Tech Stack

- **Framework:** [Nuxt 3](https://nuxt.com/) - Vue 3 meta-framework
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **3D Graphics:** [TresJS](https://tresjs.org/) - Three.js integration for Vue
- **Animations:** [anime.js](https://animejs.com/) - JavaScript animation library
- **PDF Generation:** [jsPDF](https://github.com/parallax/jsPDF) - Client-side PDF generation
- **3D Models:** Three.js GLB format

## 📁 Project Structure

```
portofolio/
├── assets/          # Global styles and assets
├── components/      # Vue components
│   ├── AtmosphereParticles.vue
│   ├── HeroCanvas.vue
│   ├── Navbar.vue
│   ├── ProjectCard.vue
│   ├── RotatingModel.vue
│   └── Section.vue
├── composables/     # Vue composables
│   └── useResume.js # Resume PDF generation
├── data/            # Site configuration
│   └── site.js      # Portfolio content data
├── layouts/         # Nuxt layouts
├── pages/           # Nuxt pages
│   └── index.vue    # Main portfolio page
├── public/          # Static assets
│   ├── drone.glb    # 3D model
│   └── ...
└── nuxt.config.ts   # Nuxt configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ or compatible package manager (npm, pnpm, yarn, bun)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vhiyan/portofolio.git
cd portofolio
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

### Production Build

Build the application for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 🎨 Customization

### Update Portfolio Content

Edit `data/site.js` to customize:
- Personal information (name, role, email)
- Social media links
- Skills list
- Projects showcase

### Modify Theme Colors

Update Tailwind configuration in `tailwind.config.js` to change the aerospace color palette.

### Replace 3D Model

Replace `public/drone.glb` with your own GLB/GLTF model and update the reference in `RotatingModel.vue`.

## 📄 Resume Generation

The website includes automatic PDF resume generation. Click the "Download Resume" button to generate a professionally formatted PDF with:
- Contact information
- Professional summary
- Technical skills
- Featured projects

Customize the resume content in `composables/useResume.js`.

## 🚀 Deployment

This Nuxt application can be deployed to various platforms:

- **Vercel:** `vercel deploy`
- **Netlify:** Connect your GitHub repository
- **Static Hosting:** Run `npm run generate` for static site generation

See the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more options.

## 📝 License

This project is open source and available for personal and educational use.

## 👤 Author

**Kristiawan Devianto**
- GitHub: [@vhiyan](https://github.com/vhiyan)
- LinkedIn: [kristiawan-devianto](https://www.linkedin.com/in/kristiawan-devianto/)
- Email: kristiawan.devianto@gmail.com

---

Built with ❤️ using Nuxt 3, Tailwind CSS, and TresJS

