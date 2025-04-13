# Job Portal Next.js

## Project Overview

This project is a job portal system built with Next.js 15, TypeScript, Tailwind CSS, and NestJS. It includes features such as user authentication, job management, company profiles, and more. The backend uses Prisma ORM with PostgreSQL for database management.

The frontend is designed to be responsive and user-friendly, providing a seamless experience for job seekers and employers.
The project is structured to be modular, scalable, and maintainable, making it easy to add new features and functionalities in the future.

## Technologies Used
- **Frontend**:
  - Next.js 15
  - TypeScript
  - Tailwind CSS
  - React Query (for data fetching)
  - Redux Toolkit (for state management)
  - i18next (for internationalization)
  - Axios (for API requests)
  - React Hook Form (for form handling)
  - Yup (for form validation)
  - React Icons (for icons)
  - React Router (for routing)
  - React Toastify (for notifications)
  - React Dropzone (for file uploads)
  - React Select (for select inputs)
  - React Datepicker (for date inputs)
  - React Query Devtools (for debugging)
   - React Helmet (for SEO)

## Full Project Structure

### Backend Structure for Job Portal System with NestJS, Prisma, and PostgreSQL

This structure is designed to be modular, scalable, and maintainable. It includes all the necessary features for a job portal system, including authentication, job management, user profiles, and more.

### Backend Structure

```
job-portal-nextjs/
backend/
├── src/
│   ├── main.ts                     # Entry point
│   ├── app.module.ts               # Root module
│   ├── app.controller.ts           # Root controller
│   ├── app.service.ts              # Root service
│   │
│   ├── prisma/                     # Prisma ORM
│   │   ├── schema.prisma           # Database schema
│   │   ├── migrations/             # Prisma migrations
│   │   └── prisma.service.ts       # Prisma service
│   │
│   ├── config/                     # Configuration files
│   │   ├── app.config.ts           # App config
│   │   ├── auth.config.ts          # Auth config
│   │   ├── database.config.ts      # DB config
│   │   ├── redis.config.ts         # Redis config
│   │   └── cors.config.ts          # CORS config
│   │
│   ├── modules/                    # Feature modules
│   │   ├── auth/                   # Authentication
│   │   │   ├── auth.module.ts
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── guards/
│   │   │   │   ├── jwt.guard.ts
│   │   │   │   └── roles.guard.ts
│   │   │   ├── strategies/
│   │   │   │   ├── jwt.strategy.ts
│   │   │   │   └── refresh.strategy.ts
│   │   │   └── dto/
│   │   │       ├── login.dto.ts
│   │   │       ├── register.dto.ts
│   │   │       └── reset-password.dto.ts
│   │   │
│   │   ├── users/                  # User management
│   │   │   ├── users.module.ts
│   │   │   ├── users.controller.ts
│   │   │   ├── users.service.ts
│   │   │   ├── entities/
│   │   │   │   └── user.entity.ts
│   │   │   └── dto/
│   │   │       ├── create-user.dto.ts
│   │   │       ├── update-user.dto.ts
│   │   │       └── update-profile.dto.ts
│   │   │
│   │   ├── jobs/                   # Jobs management
│   │   │   ├── jobs.module.ts
│   │   │   ├── jobs.controller.ts
│   │   │   ├── jobs.service.ts
│   │   │   ├── entities/
│   │   │   │   └── job.entity.ts
│   │   │   └── dto/
│   │   │       ├── create-job.dto.ts
│   │   │       ├── update-job.dto.ts
│   │   │       └── search-jobs.dto.ts
│   │   │
│   │   ├── applications/           # Job applications
│   │   │   ├── applications.module.ts
│   │   │   ├── applications.controller.ts
│   │   │   ├── applications.service.ts
│   │   │   ├── entities/
│   │   │   │   └── application.entity.ts
│   │   │   └── dto/
│   │   │       ├── create-application.dto.ts
│   │   │       └── update-application-status.dto.ts
│   │   │
│   │   ├── companies/              # Company profiles
│   │   │   ├── companies.module.ts
│   │   │   ├── companies.controller.ts
│   │   │   ├── companies.service.ts
│   │   │   ├── entities/
│   │   │   │   └── company.entity.ts
│   │   │   └── dto/
│   │   │       ├── create-company.dto.ts
│   │   │       └── update-company.dto.ts
│   │   │
│   │   ├── profiles/               # User profiles
│   │   │   ├── profiles.module.ts
│   │   │   ├── profiles.controller.ts
│   │   │   ├── profiles.service.ts
│   │   │   ├── entities/
│   │   │   │   └── profile.entity.ts
│   │   │   └── dto/
│   │   │       └── update-profile.dto.ts
│   │   │
│   │   ├── skills/                 # Skills management
│   │   │   ├── skills.module.ts
│   │   │   ├── skills.controller.ts
│   │   │   └── skills.service.ts
│   │   │
│   │   └── uploads/                # File uploads
│   │       ├── uploads.module.ts
│   │       ├── uploads.controller.ts
│   │       └── uploads.service.ts
│   │
│   ├── common/                     # Shared code
│   │   ├── decorators/
│   │   │   ├── roles.decorator.ts
│   │   │   └── current-user.decorator.ts
│   │   ├── guards/
│   │   │   └── throttle.guard.ts   # Rate limiting
│   │   ├── filters/
│   │   │   └── http-exception.filter.ts
│   │   ├── interceptors/
│   │   │   ├── cache.interceptor.ts  # Redis cache
│   │   │   └── logging.interceptor.ts
│   │   ├── middleware/
│   │   │   └── jwt-refresh.middleware.ts
│   │   └── pipes/
│   │       └── validation.pipe.ts
│   │
│   ├── shared/                     # Shared resources
│   │   ├── interfaces/
│   │   │   ├── jwt-payload.interface.ts
│   │   │   └── paging.interface.ts
│   │   ├── constants/
│   │   │   ├── roles.enum.ts
│   │   │   └── job-status.enum.ts
│   │   ├── dto/
│   │   │   ├── page.dto.ts
│   │   │   └── id-param.dto.ts
│   │   └── utils/
│   │       ├── password.util.ts    # Argon2 implementation
│   │       └── date-formatter.util.ts
│   │
│   └── providers/                  # External services
│       ├── cache/
│       │   └── redis.service.ts    # Redis caching
│       ├── email/
│       │   └── email.service.ts    # Email notifications
│       └── storage/
│           └── file-storage.service.ts  # For resumes/CVs
│
├── test/                           # Tests
│   ├── e2e/                        # End-to-end tests
│   │   ├── auth.e2e-spec.ts
│   │   ├── jobs.e2e-spec.ts
│   │   └── users.e2e-spec.ts
│   └── jest-e2e.json
│
├── nest-cli.json                   # NestJS CLI config
├── package.json
├── tsconfig.json
├── tsconfig.build.json
└── .env                            # Environment variables
```

### Frontend Structure for Job Portal System with Next.js 14, TypeScript, and Tailwind CSS

This structure is designed to be modular, scalable, and maintainable. It includes all the necessary features for a job portal system, including authentication, job management, user profiles, and more.

### Frontend Structure

```
job-portal-nextjs/
frontend-web/
├── public/
│   ├── assets/               # Static assets
│   │   ├── icons/            # SVG/PNG icons
│   │   └── images/           # Banners, logos, etc.
│   ├── locales/              # i18n translation files
│   │   ├── en/               # English translations
│   │   ├── es/               # Spanish translations
│   │   └── ...               # Other languages
│   └── favicon.ico
├── src/
│   ├── app/                  # App Router (Next.js 14+)
│   │   ├── (main)/           # Main layout group
│   │   │   ├── layout.tsx    # Root layout
│   │   │   ├── page.tsx      # Homepage
│   │   │   ├── about/
│   │   │   │   └── page.tsx  # About page
│   │   │   ├── jobs/
│   │   │   │   ├── page.tsx  # Job listing page
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx  # Dynamic job detail page
│   │   │   ├── contact/
│   │   │   │   └── page.tsx  # Contact form
│   │   │   ├── profile/      # User profiles section
│   │   │   │   ├── page.tsx  # Profile main page
│   │   │   │   ├── [id]/     # Dynamic user profile
│   │   │   │   └── edit/     # Edit profile page
│   │   │   └── companies/    # Company profiles
│   │   │       ├── page.tsx  # Companies listing
│   │   │       └── [id]/     # Company detail page
│   │   ├── (auth)/           # Auth layout group
│   │   │   ├── layout.tsx    # Auth layout
│   │   │   ├── login/        # Login pages
│   │   │   └── signup/       # Signup pages
│   │   └── api/              # API routes
│   │       ├── auth/         # Auth API endpoints
│   │       ├── jobs/         # Jobs API endpoints
│   │       ├── users/        # Users API endpoints
│   │       └── companies/    # Companies API endpoints
│   ├── components/           # Reusable components
│   │   ├── layout/           # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── ui/               # UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Modal.tsx
│   │   ├── jobs/             # Job-related components
│   │   │   ├── JobCard.tsx
│   │   │   ├── JobFilter.tsx
│   │   │   └── ApplyForm.tsx
│   │   ├── auth/             # Auth components
│   │   │   ├── LoginForm.tsx
│   │   │   └── SignupForm.tsx
│   │   └── forms/            # Form components
│   │       ├── TextField.tsx
│   │       └── SelectField.tsx
│   ├── hooks/                # Custom hooks
│   │   ├── useAuth.ts
│   │   ├── useJobs.ts
│   │   └── useForm.ts
│   ├── store/                # State management
│   │   ├── index.ts          # Store setup
│   │   ├── authSlice.ts      # Auth state management
│   │   ├── jobsSlice.ts      # Jobs state management
│   │   └── uiSlice.ts        # UI state management
│   ├── styles/               # Global styles and theme
│   │   ├── theme.ts          # Theme configuration
│   │   └── GlobalStyles.ts   # Global styles
│   ├── lib/                  # Utility libraries
│   │   ├── api.ts            # API client
│   │   └── validation.ts     # Form validation
│   ├── types/                # TypeScript types
│   │   ├── job.ts
│   │   ├── user.ts
│   │   └── company.ts
│   └── utils/                # Helper functions
│       ├── formatters.ts
│       ├── i18n.ts           # i18n configuration
│       └── analytics.ts      # Analytics
├── next.config.js            # Next.js config
├── middleware.ts             # Next.js middleware (for auth)
├── .env.local                # Environment variables
├── .env.example              # Example env vars
├── package.json
└── tsconfig.json
```

## Key Feature Implementation Notes

1. **Authentication**:
   - Dedicated auth layout with login/signup flows
   - Auth middleware to protect routes
   - Auth store slice for global state

2. **Job Filtering/Searching**:
   - Enhanced JobFilter component with advanced search
   - API routes with query parameters for filtering

3. **State Management**:
   - Store directory with slices for different features
   - Custom hooks to access store data

4. **Form Handling**:
   - Reusable form components
   - Validation utilities for forms
   - Apply for jobs functionality

5. **i18n Support**:
   - Translation files in public/locales
   - i18n configuration in utils

6. **Profiles**:
   - User profile and company profile pages
   - Edit functionality for profiles

7. **CSS-in-JS**:
   - Theme configuration
   - Global styles
   - Styled components

8. **API Routes**:
   - Structured API endpoints for different resources
   - Authentication middleware for protected routes

This structure supports all your requirements while maintaining good organization and scalability. It separates concerns appropriately and provides a foundation for adding more features in the future.

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- PostgreSQL (v12 or later)
- Redis (for caching)
- NestJS CLI (for backend)
- Next.js CLI (for frontend)
- pnpm or yarn (for package management)

### Installation

# Clone the repository
```bash
git clone <repository-url>
cd job-portal-nextjs
```
# Install backend dependencies
```bash
cd backend
pnpm install
```
# Install frontend dependencies
```bash
cd ../frontend-web
pnpm install
```
### Environment Variables
- Create a `.env` file in the `backend` directory and add your environment variables. You can use the `.env.example` file as a reference.
- Create a `.env.local` file in the `frontend-web` directory and add your environment variables. You can use the `.env.example` file as a reference.
### Running the Application
# Start the backend server
```bash
cd backend
pnpm start:dev
```
# Start the frontend server
```bash
cd ../frontend-web
pnpm dev
```
### Running Tests
# Run backend tests
```bash
cd backend
pnpm test
```
# Run frontend tests
```bash
cd ../frontend-web
pnpm test
```
### Building the Application
# Build the backend
```bash
cd backend
pnpm build
```
# Build the frontend
```bash
cd ../frontend-web
pnpm build
```
# Deploying the Application
- For deployment, you can use platforms like Vercel for the frontend and Heroku or AWS for the backend.
- Ensure to set the environment variables in your deployment platform.
- Follow the respective platform's documentation for deployment steps.
### Contributing
- Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
- Ensure to follow the code style and conventions used in the project.
### License
- This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
### Acknowledgments
- Thanks to the open-source community for their contributions and support.
- Special thanks to the creators of Next.js, NestJS, Prisma, and Tailwind CSS for their amazing frameworks and libraries.
