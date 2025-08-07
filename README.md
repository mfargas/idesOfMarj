# ides of Marge

Artistic portfolio and creative blog by Marjoree E. F. - Exploring the intersection of art, technology, and creative expression.

## 🎨 About

This is a Gatsby.js-powered website showcasing generative art, creative coding projects, and thoughts on the intersection of art and technology. Built with modern web technologies and designed for optimal performance and user experience.

## ✨ Features

- **Modern Design**: Clean, responsive layout with smooth animations
- **Art Gallery**: Showcase of generative art and creative projects
- **Blog Section**: Articles about art, technology, and creative process
- **About Page**: Personal background and creative journey
- **PWA Ready**: Progressive Web App capabilities with offline support
- **SEO Optimized**: Built-in SEO with meta tags and structured data

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
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
   npm run develop
   ```

4. **Open your browser**
   Navigate to `http://localhost:8000`

## 📁 Project Structure

```
idesOfMarj/
├── src/
│   ├── components/          # React components
│   │   ├── layout.js       # Main layout wrapper
│   │   ├── header.js       # Site header with navigation
│   │   ├── homeHero.js     # Homepage hero section
│   │   ├── artProjects.js  # Art gallery component
│   │   └── menu.js         # Navigation menu
│   ├── pages/              # Gatsby pages
│   │   ├── index.js        # Homepage
│   │   ├── art.js          # Art gallery page
│   │   ├── blog.js         # Blog listing page
│   │   └── about.js        # About page
│   ├── styles/             # CSS modules
│   │   ├── layout.css      # Global styles
│   │   ├── header.module.css
│   │   ├── homeHero.module.css
│   │   ├── artgallery.module.css
│   │   ├── blog.module.css
│   │   └── about.module.css
│   ├── images/             # Static images
│   └── content/            # Content files
│       ├── blog/           # Blog posts (markdown)
│       └── art/            # Art project data
├── gatsby-config.js        # Gatsby configuration
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🛠️ Available Scripts

- `npm run develop` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Serve production build
- `npm run clean` - Clear cache and public folders
- `npm run format` - Format code with Prettier

## 🎯 Key Technologies

- **Gatsby.js** - React-based static site generator
- **React** - UI library
- **CSS Modules** - Scoped styling
- **Gatsby Image** - Optimized image handling
- **GraphQL** - Data querying

## 🌐 Deployment

### AWS Amplify

This site is configured for deployment on AWS Amplify:

1. Connect your GitHub repository to AWS Amplify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `public`
3. Deploy automatically on push to main branch

### Other Platforms

The site can be deployed to any static hosting platform:

- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

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

1. Add project data to `src/components/artProjects.js`
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

- Website: [idesofmarge.com](https://idesofmarge.com)
- GitHub: [@marjoreefargas](https://github.com/marjoreefargas)

---

Built with ❤️ using Gatsby.js
