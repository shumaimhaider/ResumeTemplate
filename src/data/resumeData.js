// ============================================================================
//  RESUME DATA
//  ----------------------------------------------------------------------
//  This is the ONLY file you need to edit to update your resume.
//  Change the values below and the resume (and generated PDF) will update
//  automatically.
//
//  TIP: Wrap any word or phrase in **double asterisks** to make it bold,
//       e.g. "Reduced load time by **40%**".
//
//  TIP: Set pageBreakBefore: true on an experience or project entry to
//       start a new PDF page and re-print that section's heading.
// ============================================================================

import profilePhoto from '../assets/profile.jpg'

export const resumeData = {
  // ---- Header -----------------------------------------------------------
  name: 'Shumaim Haider',
  title: 'Senior Software Engineer',
  photo: profilePhoto, // set to null to hide the photo

  summary:
    '**AI-Enabled Full-Stack Software Engineer** with **5 years of experience** specializing in building scalable systems ' +
    'that power real-world business operations and revenue workflows. ' +
    'Experienced in translating **business requirements** into reliable ' +
    '**technical** solutions, designing distributed architectures, and ' +
    'optimizing system performance. Develops systems and features with a ' +
    'strong product mindset balancing **system design**, user experience, ' +
    'and measurable business impact while leveraging **AI-assisted** ' +
    'development tools to accelerate engineering velocity and improve code ' +
    'quality.',

  // ---- Contact ------------------------------------------------------------
  // Supported icon types: email, phone, location, website, linkedin, github, medium
  contact: [
    { icon: 'email', text: 'shumaimhaider@gmail.com', href: 'mailto:shumaimhaider@gmail.com' },
    { icon: 'phone', text: '0307 1637899', href: 'tel:+923071637899' },
    { icon: 'location', text: 'Lahore, Pakistan' },
    { icon: 'website', text: 'shumaimhaider.com', href: 'https://shumaimhaider.com' },
    { icon: 'linkedin', text: 'shumaimhaider', href: 'https://linkedin.com/in/shumaimhaider' },
    { icon: 'medium', text: 'shumaimhaider', href: 'https://medium.com/@shumaimhaider' },
  ],

  // ---- Work Experience (left column) --------------------------------------
  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'Focusteck',
      location: '',
      date: '07 / 2025 - Present',
      bulletsHeading: 'Tasks / Achievements',
      bullets: [
        'Re-architected a synchronous billing workflow into a fault-tolerant, **event-driven** system to handle high-concurrency invoice processing achieving **99.9%** reliability through asynchronous workers, retry mechanisms and reconciliation logic.',
        'Integrated multiple payment gateways **(Stripe, NetBilling, Braintree)** into backend billing workflows, implementing idempotent processing, webhook verification and failure handling to improve transaction reliability and system security.',
        'Analyzed and optimized long-running SQL queries by refactoring query logic and improving indexing strategy, reducing execution time by **70%** and database CPU utilization by **35%** under high-concurrency workloads.',
        'Implemented real-time notifications using **WebSockets**, Redis adapters, and **Pusher channels**, enhancing system scalability, supporting high concurrent users, improving overall user experience.',
        '**Migrated** customer analytics data from MongoDB to PostgreSQL to support customer trend reporting.',
        'Optimized cloud infrastructure through containerization, autoscaling, and caching strategies, reducing operational costs by **25–30%** while maintaining high performance for production-grade workloads.',
        'Developed and delivered the core **feature** stepper form on the front-end, enabling seamless multi-step user interactions and enhancing overall user experience.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'CodingCops',
      location: 'Lahore',
      date: '01 / 2022 - 06 / 2025',
      pageBreakBefore: true,
      bulletsHeading: 'Tasks / Achievements',
      bullets: [
        'Implemented **Twilio Expressions** based routing logic for the calling feature, integrating **multi-level routing** (call type, department, user availability) with **backend APIs** to dynamically manage inbound and outbound call flows.',
        'Implemented a **debounced** search feature in a React data table using React Query and custom hooks reducing redundant API calls improving search responsiveness.',
        'Designed and **delivered** an end-to-end **csv export** feature, leveraging Golang background jobs to process large datasets, Pusher channels to provide real-time file **download status**, React UI for progress tracking enabling seamless and efficient large-scale data exports.',
        'Integrated Intento for **AI powered** translation, enabling automated multilingual processing of high-volume files with optimized performance and reliability.',
        'Optimized **front-end** app **slowness** issues by profiling render bottlenecks, reducing unnecessary re-renders, and improving data-fetching patterns to deliver a faster, more responsive user experience.',
      ],
    },
  ],

  // ---- Education (left column, after experience) --------------------------
  education: [
    {
      degree: 'Bachelor of Science in Computer Science (BSCS)',
      school: 'University of Management and Technology',
      location: 'Lahore',
      date: '',
    },
  ],

  // ---- Skills (right column) ----------------------------------------------
  skills: [
    'Golang',
    'React',
    'GraphQL',
    'PostgreSQL',
    'Node.js',
    'Express.js',
    '.Net',
    'JavaScript',
    'gRPC',
    'Git',
    'RESTful APIs',
    'Microservices',
    'TypeScript',
    'WebSockets',
    'Kafka',
    'Docker',
    'Kubernetes',
    'Terraform',
    'AI Agents',
    'Agentic Workflows',
    'RAG, Tool Calling & MCP'
  ],

  // ---- Projects (right column) ---------------------------------------------
  projects: [
    {
      name: 'Terraboost Media',
      role: 'Full Stack Developer',
      bulletsHeading: 'Tasks / Achievements',
      bullets: [
        'Improved code quality and maintainability in the Terraboost Media project by integrating linters, enforcing coding standards, and introducing recommended **design patterns** resulting in more consistent, readable, and robust code.',
        'Successfully implemented high-priority features end-to-end, including design, development, testing, and deployment, ensuring reliability and alignment with **business goals.**',
      ],
    },
    {
      name: 'FixaFib',
      role: 'Full Stack Developer',
      bulletsHeading: 'Tasks / Achievements',
      bullets: [
        'Led the optimization of core features to enhance system stability and prepare the product for **MVP launch**.',
        'Increased development velocity by resolving blockers and restructuring delayed modules, bringing the project back on schedule.',
      ],
    },
    {
      name: 'Lango',
      role: 'Full Stack Developer',
      pageBreakBefore: true,
      bulletsHeading: 'Tasks / Achievements',
      bullets: [
        'Owned and delivered multiple core features using React, GraphQL, Golang, and Node.js following **Clean Architecture principles** for maintainability.',
        'Refactored multiple critical modules, reducing code complexity and improving API response times.',
      ],
    },
    {
      name: 'Judy',
      role: 'Front End Developer',
      bulletsHeading: 'Tasks / Achievements',
      bullets: [
        'Designed and implemented front-end UI screens for a security platform using React, supporting device enrollment and management for enterprise organizations, enhancing user experience and administrative control.',
      ],
    },
  ],

  // ---- Languages (right column) --------------------------------------------
  languages: [
    { name: 'English', level: 'Full Professional Proficiency' },
    { name: 'Urdu', level: 'Full Professional Proficiency' },
  ],

  // ---- Interests (right column) ---------------------------------------------
  interests: ['System architecture case studies', 'AI-assisted development tools'],
}

export default resumeData
