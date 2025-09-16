# Sri's Personal Website - Hugo Version

This is the Hugo version of Sri's personal website, built for better content management and static site generation.

## Features

- **Static Site Generation**: Fast, SEO-friendly static site
- **Content Management**: Easy to add blog posts, projects, and resources
- **Responsive Design**: Mobile-first, works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **GitHub Pages Ready**: Deploys directly to GitHub Pages

## Getting Started

### Prerequisites

- Hugo (installed via Homebrew: `brew install hugo`)
- Node.js (for theme CSS compilation)

### Development

1. **Start the development server:**
   ```bash
   hugo server --buildDrafts
   ```

2. **Build the theme CSS:**
   ```bash
   cd themes/sri-theme
   npm run build-css
   ```

3. **Watch for CSS changes:**
   ```bash
   cd themes/sri-theme
   npm run watch-css
   ```

### Adding Content

#### Blog Posts
```bash
hugo new blog/my-new-post.md
```

#### Projects
```bash
hugo new projects/my-project.md
```

#### Resources
```bash
hugo new resources/my-resource.md
```

### Deployment

```bash
./deploy.sh
```

This will:
1. Build the Hugo site
2. Deploy to GitHub Pages

## Content Structure

```
content/
├── about.md          # About page
├── contact.md        # Contact page
├── blog/            # Blog posts
│   └── _index.md    # Blog listing page
├── projects/        # Project showcases
│   └── _index.md    # Projects listing page
└── resources/       # Curated resources
    └── _index.md    # Resources listing page
```

## Theme Customization

The theme is located in `themes/sri-theme/` and includes:
- Responsive layouts
- Dark mode support
- Tailwind CSS styling
- Custom components

## Benefits over React Version

1. **Better Content Management**: Easy to add/edit content without code changes
2. **SEO Optimized**: Static HTML generation for better search engine indexing
3. **Faster Loading**: Pre-built static files load faster
4. **GitHub Pages Native**: No complex build processes needed
5. **Content Versioning**: All content is versioned with Git
6. **Easy Blogging**: Markdown-based blog posts with front matter
7. **No JavaScript Required**: Works without JavaScript (progressive enhancement)

## Migration from React

The Hugo version maintains the same design and functionality as the React version but with:
- Static site generation instead of client-side rendering
- Markdown content instead of hardcoded components
- Hugo templating instead of React components
- Better performance and SEO
