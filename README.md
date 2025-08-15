# BUILDING MARJIELA

Artistic and creative blog by Marjoree - exploring the intersection of art, technology, and creative expression.

Website: [marjiela.com](https://marjiela.com)

## 🎨 About

This is a Next.js-powered website showcasing generative art, creative coding projects, and thoughts on the intersection of art and technology. Built with modern web technologies and designed for optimal performance and user experience.

## ✨ Features

- **Modern Design**: Clean, responsive layout with smooth animations
- **Art Gallery**: Showcase of generative art and creative projects
- **Blog Section**: Articles about art, technology, and creative process
- **About Page**: Personal background and creative journey
- **PWA Ready**: Progressive Web App capabilities with offline support
- **SEO Optimized**: Built-in SEO with meta tags and structured data

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/marjoreefargas/idesOfMarj.git
   cd idesOfMarj
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
idesOfMarj/
├── src/
│   ├── components/         # React components
│   │   ├── layout.js       # Main layout wrapper
│   │   ├── header.js       # Site header with navigation
│   │   ├── homeHero.js     # Homepage hero section
│   │   ├── artProjects.js  # Art gallery component
│   │   ├── menu.js         # Navigation menu
│   │   ├── sidebar.js      # Sidebar navigation
│   │   └── seo.js          # SEO component
│   ├── pages/              # Next.js pages
│   │   ├── _app.js         # App wrapper
│   │   ├── index.js        # Homepage
│   │   ├── art.js          # Art gallery page
│   │   ├── art/[id].js     # Individual art project page
│   │   ├── blog.js         # Blog listing page
│   │   ├── about.js        # About page
│   │   └── 404.js          # 404 error page
│   ├── styles/             # CSS modules
│   │   ├── layout.css      # Global styles
│   │   ├── header.module.css
│   │   ├── homeHero.module.css
│   │   ├── artgallery.module.css
│   │   ├── blog.module.css
│   │   ├── about.module.css
│   │   ├── menu.module.css
│   │   └── sidebar.module.css
│   ├── images/             # Static images
│   ├── content/            # Content files
│   │   ├── blog/           # Blog posts (markdown)
│   │   └── art/            # Art project data
│   └── data/               # Data files
│       └── artProjects.js  # Art projects data
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md              # This file
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎯 Key Technologies

- **Next.js** - React-based full-stack framework
- **React** - UI library
- **CSS Modules** - Scoped styling
- **TypeScript** - Type-safe JavaScript
- **Markdown** - Content management

## 🌐 Deployment

### AWS Amplify

This site is configured for deployment on AWS Amplify:

1. Connect your GitHub repository to AWS Amplify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Deploy automatically on push to main branch

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- Vercel (recommended for Next.js)
- Netlify
- Railway
- DigitalOcean App Platform

## 📝 Content Management

### Adding Blog Posts

1. Create markdown files in `src/content/blog/`
2. Use frontmatter for metadata:
   ```markdown
   ---
   title: "Your Post Title"
   date: "2024-01-15"
   excerpt: "Brief description"
   ---
   ```

### Adding Art Projects

1. Add project data to `src/data/artProjects.js`
2. Include images in `src/images/`
3. Update gallery component as needed

## 🎨 Customization

### Colors

The site uses a primary color scheme:

- Primary: `#060864` (Deep Blue)
- Secondary: `#666` (Gray)
- Background: `#ffffff` (White)

### Styling

All styles use CSS Modules for scoped styling. Global styles are in `src/styles/layout.css`.

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Marjoree E. F.**

- Website: [marjiela.com](https://marjiela.com)
- GitHub: [@marjoreefargas](https://github.com/marjoreefargas)

---

Built with ❤️ using Next.js