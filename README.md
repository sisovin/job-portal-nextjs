# Job Portal Next.js

If you are looking for a free Next.js template for a job portal website, then the Job Portal Next.js repository – my designing free job portal website template is perfect for you.

## Project Structure

```
job-portal-nextjs/
frontend-web
├── public/
│   ├── assets/               # Static assets (moved from `assets/img`)
│   │   ├── icons/            # SVG/PNG icons
│   │   └── images/           # Banners, logos, etc.
│   └── favicon.ico
├── src/
│   ├── app/                  # App Router (Next.js 14+)
│   │   ├── (main)/           # Main layout group
│   │   │   ├── layout.tsx    # Root layout (Bootstrap/SCSS imports)
│   │   │   ├── page.tsx      # Homepage (replaces index.html)
│   │   │   ├── about/
│   │   │   │   └── page.tsx  # About page
│   │   │   ├── jobs/
│   │   │   │   ├── page.tsx  # Job listing (Bootstrap tab integration)
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx  # Dynamic job detail page
│   │   │   └── contact/
│   │   │       └── page.tsx  # Contact form (with Formik/Yup validation)
│   │   └── api/              # Mock API routes (e.g., jobs.json)
│   ├── components/           # Reusable TSX components
│   │   ├── Header.tsx        # Sticky navbar (Bootstrap)
│   │   ├── Footer.tsx
│   │   ├── JobCard.tsx       # Job listing card
│   │   └── TestimonialCarousel.tsx  # Migrated from jQuery to React Slick
│   ├── styles/               # SCSS modules (replaces `assets/css`)
│   │   ├── globals.scss      # Bootstrap + custom variables
│   │   ├── Home.module.scss  # CSS Modules for pages
│   │   └── animations.scss   # Scroll animations (GSAP/React)
│   ├── types/                # TypeScript interfaces
│   │   └── jobs.d.ts         # e.g., `interface Job { id: string; title: string; }`
│   └── utils/                # Helpers (e.g., form validation)
├── next.config.js            # Sass/optimization config
├── package.json              # Dependencies: bootstrap, sass, react-icons, etc.
└── tsconfig.json             # TypeScript strict mode
```

## Key Conversion Notes

1. **Static Assets**:  
   - Images moved to `public/assets/` for Next.js optimization (using `next/image`).
2. **Styling**:  
   - Original Bootstrap CSS replaced with SCSS Modules + Bootstrap npm package (`bootstrap@5.x`).
3. **Dynamic Routes**:  
   - Job detail pages use Next.js dynamic routing (`/jobs/[id]`).
4. **Plugins**:  
   - jQuery carousels replaced with React alternatives (e.g., `react-slick`).
5. **TypeScript**:  
   - Added type definitions for props (e.g., `JobCardProps`) and API responses.

## Running the Project Locally

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/sisovin/job-portal-nextjs.git
   cd job-portal-nextjs/frontend-web
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Run the development server**:
   ```sh
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to see the application running.
