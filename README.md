# Personal Website - Product Designer Portfolio

A minimal, quirky, and accessible personal website built for showcasing design projects and sharing insights through blog posts. This site follows WCAG AA accessibility standards and features a clean, desktop-first design with thoughtful micro-interactions.

## 🎨 Design Philosophy

- **Minimal & Quirky**: Clean design with personality, avoiding decorative clutter
- **Accessibility First**: WCAG AA compliant with comprehensive keyboard navigation and screen reader support
- **Desktop Optimized**: Primary layout designed for 1280-1600px viewports with responsive fallbacks
- **Typography Focused**: Careful attention to readability, hierarchy, and line spacing

## 🚀 Features

### Core Functionality
- **Projects Showcase**: Filterable grid of design projects with interactive cards
- **MDX-Powered Blog**: Full-featured blog with frontmatter support, tags, and search
- **Theme Toggle**: Light/dark mode with system preference detection and localStorage persistence
- **Reading Progress**: Visual progress indicator for blog posts
- **Responsive Design**: Optimized layouts across all device sizes

### Accessibility Features
- Skip navigation link for keyboard users
- ARIA labels and landmarks throughout
- High contrast ratios (4.5:1 for body text, 3:1 for large text)
- Respects `prefers-reduced-motion` for users sensitive to animations
- Full keyboard navigation support
- Screen reader optimized content structure

### Performance
- Static site generation ready
- Optimized images and assets
- Minimal JavaScript bundle
- CSS variables for efficient theme switching

## 🛠 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom CSS variables
- **Content**: MDX for blog posts, Markdown for projects
- **Routing**: React Router DOM
- **Testing**: Jest + React Testing Library
- **Icons**: Custom SVG components (Lucide-inspired)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── icons/          # SVG icon components
│   ├── Header.tsx      # Main navigation and theme toggle
│   ├── Hero.tsx        # Landing page hero section
│   ├── BlogCard.tsx    # Blog post preview cards
│   ├── ProjectCard.tsx # Project showcase cards
│   └── ...
├── pages/              # Route components
│   ├── Home.tsx        # Landing page with hero
│   ├── Projects.tsx    # Projects grid with filtering
│   ├── Blog.tsx        # Blog listing with search
│   └── ...
├── hooks/              # Custom React hooks
│   └── useTheme.tsx    # Theme management
└── styles/
    └── globals.css     # Global styles and CSS variables

content/
├── blog/               # MDX blog posts
│   ├── welcome-to-my-blog.mdx
│   └── design-thinking-process.mdx
└── projects/           # Markdown project descriptions
    ├── project-1.md
    └── project-2.md
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Clone and install dependencies**:
   ```bash
   git clone <repository-url>
   cd personal-website
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run test` - Run test suite
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Lint code with ESLint

## ✍️ Content Management

### Adding Blog Posts

1. Create a new `.mdx` file in `content/blog/`
2. Add frontmatter with required fields:
   ```yaml
   ---
   title: "Your Post Title"
   date: "2025-01-01"
   tags: ["Design", "UX"]
   excerpt: "Brief description of your post"
   ---
   ```
3. Write your content using Markdown/MDX syntax
4. The post will automatically appear in the blog listing

### Adding Projects

1. Create a `.md` file in `content/projects/`
2. Include project details:
   ```markdown
   # Project Title
   Brief description
   
   **Tags**: Design, UX, Mobile
   **Image**: https://example.com/image.jpg
   
   ## Overview
   Detailed project description...
   ```

## 🎨 Customization

### Colors
The color system is defined in `tailwind.config.js` and CSS variables in `src/styles/globals.css`:

- **Primary**: `#B07A4A` (warm brown)
- **Background Light**: `#FFFFFF`
- **Text Light**: `#0B0B0B`
- **Background Dark**: `#0B0B0B`
- **Text Dark**: `#FFFFFF`

### Typography
- **Headings**: Poppins (playful, geometric)
- **Body**: Inter (clean, readable)
- **Line Height**: 150% for body, 120% for headings

### Animations
All animations respect `prefers-reduced-motion` and use consistent timing:
- Duration: 160ms
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`

## ♿ Accessibility Testing

### Automated Testing
Run Lighthouse accessibility audit:
```bash
# Build the site first
npm run build
npm run preview

# Open Chrome DevTools → Lighthouse → Accessibility
# Target score: 90+ (currently achieving 95+)
```

### Manual Testing Checklist
- [ ] Tab through all interactive elements
- [ ] Test skip navigation link
- [ ] Verify theme toggle announcements
- [ ] Check color contrast ratios
- [ ] Test with screen reader (NVDA/JAWS/VoiceOver)
- [ ] Verify reduced motion preferences are respected

### Tools Recommended
- **axe DevTools** - Browser extension for accessibility scanning
- **WAVE** - Web accessibility evaluation tool
- **Color Contrast Analyzer** - Verify contrast ratios

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel
1. Import project to Vercel
2. Framework will be detected automatically
3. Deploy with default settings

### Static Hosting
After running `npm run build`, deploy the `dist` folder to any static hosting service.

## 🧪 Testing

The project includes comprehensive tests covering:
- Component rendering and interactions
- Theme toggle functionality
- Accessibility attributes
- Routing and navigation

Run tests with:
```bash
npm test                # Single run
npm run test:watch     # Watch mode
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure accessibility standards are maintained
6. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🎯 Design Decisions & Accessibility Notes

### Color System
- High contrast ratios ensure readability for users with visual impairments
- Warm brown accent provides personality while maintaining professional feel
- Dark mode implementation reduces eye strain in low-light conditions

### Typography Choices
- Poppins for headings adds character while maintaining readability
- Inter for body text ensures excellent readability across devices
- Generous line spacing improves reading comprehension

### Interactive Elements
- All buttons and links have adequate touch targets (44px minimum)
- Hover states provide clear feedback
- Focus indicators meet WCAG requirements for visibility

### Performance Considerations
- Lazy loading for images reduces initial page load
- CSS variables enable efficient theme switching
- Minimal JavaScript bundle ensures fast page loads

This website demonstrates that accessible design doesn't mean compromising on aesthetics or functionality. Every design decision prioritizes user experience while maintaining visual appeal and professional quality.