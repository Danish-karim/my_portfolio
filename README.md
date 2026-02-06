# Portfolio Website - Danish Karim

A modern, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS. Showcasing skills, projects, and services with a beautiful, responsive design.

## Features

- 🎨 Modern and professional design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast and optimized with Next.js 14
- 🎭 Smooth animations with Framer Motion
- 🔗 Social media integration (LinkedIn, Fiverr, Upwork)
- 🖼️ Project showcase with image gallery
- 📊 Skills visualization with progress bars
- 🎯 SEO optimized

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update name, title, and description

2. **About Section** (`components/About.tsx`):
   - Modify the "Who I Am" content
   - Update statistics (projects, clients, experience)

3. **Skills Section** (`components/Skills.tsx`):
   - Update skill categories and proficiency levels
   - Add or remove skills as needed

4. **Projects Section** (`components/Projects.tsx`):
   - Replace placeholder project data with your actual projects
   - Add your project images (update image URLs or use local images)
   - Update project links (live demo and GitHub)

5. **Contact Section** (`components/Contact.tsx`):
   - Update email address
   - Social media links are already configured:
     - LinkedIn: https://www.linkedin.com/in/danish-karim-fullstack
     - Fiverr: https://www.fiverr.com/s/XLAwzQD
     - Upwork: https://www.upwork.com/freelancers/~01d311f220d3e561f1?mp_source=share

### Adding Project Images

You have two options:

1. **Use external URLs**: Update the `image` field in `components/Projects.tsx` with your image URLs
2. **Use local images**:
   - Place images in `public/images/projects/`
   - Update the image path: `/images/projects/your-image.jpg`
   - Update `next.config.js` if needed for image domains

### Styling

- Colors can be customized in `tailwind.config.ts` (primary color scheme)
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind classes

## Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Services.tsx        # Services section
│   ├── Projects.tsx        # Projects section
│   └── Contact.tsx         # Contact section
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Next Steps

1. Replace placeholder content with your actual information
2. Add your project images
3. Update project links (GitHub, live demos)
4. Customize colors and styling to match your brand
5. Add your resume/CV download link
6. Deploy to Vercel, Netlify, or your preferred hosting platform

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Or any Node.js hosting service

## License

This project is open source and available for personal use.

## Support

For questions or issues, please reach out through:

- LinkedIn: [Danish Karim](https://www.linkedin.com/in/danish-karim-fullstack)
- Fiverr: [Profile](https://www.fiverr.com/s/XLAwzQD)
- Upwork: [Profile](https://www.upwork.com/freelancers/~01d311f220d3e561f1?mp_source=share)
