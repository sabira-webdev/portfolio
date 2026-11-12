import devtoolsHome from "../assets/projects/devtools-hub-home.webp";
import devtoolsTools from "../assets/projects/devtools-hub-tools.webp";
import devtoolsJson from "../assets/projects/devtools-hub-json.webp";
import kanbanBoard from "../assets/projects/order-kanban-board.webp";
import kanbanSettings from "../assets/projects/order-kanban-settings.webp";
import fsmsConcept from "../assets/projects/fsms-dashboard-concept.webp";
import lumoraShowcase from "../assets/projects/lumora-showcase.webp";
import lumoraPages from "../assets/projects/lumora-pages.webp";
import lumoraResponsive from "../assets/projects/lumora-responsive.webp";

export const personalInfo = {
  name: "Sabira K",
  role: "Web Developer | WordPress, WooCommerce & React.js",
  shortRole: "Web Developer",
  bio: "Web Developer with nearly 4 years of experience building, maintaining, and supporting commercial WordPress and WooCommerce plugins. Proficient in PHP, JavaScript (ES6+), React.js, and MySQL, with hands-on expertise in custom plugin development, WordPress Hooks and Filters, REST API integration, performance optimization, and secure coding practices.",
  experienceLabel: "Nearly 4 years",
  location: "Dubai, UAE",
  phone: "+971 56 937 1669",
  email: "sabira.k.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/sabira-k",
  github: "https://github.com/24sab",
  status: "Open to new opportunities"
};

export const skillsData = [
  {
    category: "Languages",
    icon: "Code2",
    skills: [
      { name: "PHP", level: "Expert", desc: "OOP PHP, custom plugins, REST endpoints" },
      { name: "JavaScript (ES6+)", level: "Advanced", desc: "Modern JS, async/await, DOM manipulation" },
      { name: "HTML5 & CSS3", level: "Expert", desc: "Semantic markup, Flexbox, Grid, responsive layouts" },
      { name: "SQL", level: "Advanced", desc: "Queries, schema design, indexing" }
    ]
  },
  {
    category: "CMS & E-commerce",
    icon: "Layers",
    skills: [
      { name: "WordPress", level: "Expert", desc: "Custom plugin development, Custom Post Types, admin UI" },
      { name: "WooCommerce", level: "Expert", desc: "Checkout fields, emails, PDF invoices, HPOS compatibility" },
      { name: "Hooks & Filters", level: "Expert", desc: "Action & filter architecture for extensible code" },
      { name: "WordPress REST API", level: "Advanced", desc: "Custom endpoints consumed by React interfaces" }
    ]
  },
  {
    category: "Frontend",
    icon: "Monitor",
    skills: [
      { name: "React.js", level: "Advanced", desc: "Hooks, component architecture, drag-and-drop UIs" },
      { name: "Vite", level: "Advanced", desc: "Fast dev tooling and production builds" },
      { name: "Tailwind CSS", level: "Proficient", desc: "Utility-first styling (v4)" },
      { name: "jQuery", level: "Advanced", desc: "WP admin scripts, AJAX handlers" },
      { name: "Responsive Web Design", level: "Expert", desc: "Mobile-first layouts across breakpoints" }
    ]
  },
  {
    category: "Backend & Databases",
    icon: "Database",
    skills: [
      { name: "MySQL", level: "Advanced", desc: "Query optimization, schema design" },
      { name: "Supabase", level: "Proficient", desc: "Postgres backend and authentication" },
      { name: "REST API Integration", level: "Advanced", desc: "Custom WP endpoints & third-party APIs" },
      { name: "Authentication & RBAC", level: "Proficient", desc: "Login flows and role-based access control" }
    ]
  },
  {
    category: "Practices",
    icon: "ShieldCheck",
    skills: [
      { name: "Performance Optimization", level: "Advanced", desc: "Query caching, lean asset loading" },
      { name: "Security Best Practices", level: "Advanced", desc: "Nonces, sanitization, escaping, capability checks" },
      { name: "Debugging", level: "Expert", desc: "Theme & third-party plugin conflict resolution" },
      { name: "Plugin Compatibility", level: "Expert", desc: "Keeping pace with WordPress & WooCommerce releases" }
    ]
  },
  {
    category: "Tools & AI",
    icon: "Cpu",
    skills: [
      { name: "Git, GitHub & GitLab", level: "Advanced", desc: "Version control, branching, code review" },
      { name: "VS Code & phpMyAdmin", level: "Expert", desc: "Daily development and database work" },
      { name: "Netlify", level: "Proficient", desc: "Static site deployment" },
      { name: "Claude, ChatGPT & Gemini", level: "Advanced", desc: "AI-assisted coding, debugging, documentation" },
      { name: "Cursor & Antigravity", level: "Advanced", desc: "AI-native editors for faster delivery" }
    ]
  }
];

export const experienceData = [
  {
    company: "Acodez IT Solutions",
    role: "WordPress Plugin Developer",
    period: "January 2023 – Present",
    location: "Kozhikode, Kerala, India",
    type: "Full-Time",
    badge: "Current Role",
    summary: "Developing, maintaining, and supporting 3 commercial WooCommerce plugins used by a live customer base.",
    achievements: [
      "Develop and maintain 3 commercial WooCommerce plugins covering checkout field customization, email customization, and PDF invoices and packing slips.",
      "Build scalable plugin features using WordPress Hooks, Filters, Custom Post Types, and the REST API, with a focus on performance, security, and compatibility with WordPress and WooCommerce updates.",
      "Standardize plugin code against WooCommerce Marketplace guidelines and ship regular releases with new features, enhancements, and bug fixes.",
      "Resolve user issues through the WordPress support forum, debugging conflicts with themes and third-party plugins.",
      "Customize plugins for client-specific needs and collaborate with cross-functional teams to turn requirements into production-ready WordPress and WooCommerce solutions."
    ],
    techStack: ["WordPress", "WooCommerce", "PHP", "JavaScript", "React.js", "MySQL", "REST API", "Git"]
  }
];

// To add a screenshot: put the image in src/assets/projects/, import it at the
// top of this file, and set `image` on the project. Cards show the icon when image is null.
export const projectsData = [
  {
    id: "fsms",
    title: "Food Safety Management System (FSMS)",
    subtitle: "Enterprise food safety, quality assurance & compliance management platform",
    category: "Web App",
    period: "2026 – Present",
    status: "In Progress",
    summary: "A React and Supabase platform that centralizes food safety, quality assurance, and compliance workflows for food manufacturing facilities.",
    overview: [
      "FSMS is an enterprise-oriented platform that streamlines food safety operations and quality management workflows in food manufacturing and processing facilities.",
      "It brings employees, departments, checklist templates, and food safety inspection workflows into one place, and is designed around food safety management practices including HACCP and ISO 22000-related operational processes.",
      "The application uses a modern React front end, with Supabase and PostgreSQL handling authentication, database management, and data persistence."
    ],
    modules: [
      {
        title: "Employee Management",
        items: [
          "Create, update, and organize employee records",
          "Employee data stored in and integrated with the Supabase database"
        ]
      },
      {
        title: "Department Management",
        items: [
          "Create and manage organizational departments",
          "Department-based organization of operational activities"
        ]
      },
      {
        title: "Checklist Management",
        items: [
          "Reusable checklist templates with organized questions and items",
          "Checklist data persisted in PostgreSQL",
          "Foundation for standardized food safety assessments"
        ]
      },
      {
        title: "Inspections & Audits",
        status: "In development",
        items: [
          "Inspection scheduling and execution workflows",
          "Checklist-based inspection responses",
          "Recording inspection results and non-conformities",
          "Audit status tracking and review workflows"
        ]
      },
      {
        title: "Database & Security Architecture",
        items: [
          "Supabase Auth with PostgreSQL integration",
          "Role-based access control (RBAC) architecture",
          "Row Level Security (RLS) policies",
          "Database-side validation and integrity constraints",
          "Structured relational data management"
        ]
      }
    ],
    highlights: [
      "Built modular React components and application workflows",
      "Integrated front-end modules with Supabase",
      "Designed relational PostgreSQL database structures",
      "Implemented database-backed checklist management",
      "Established role-based security and data-access policies",
      "Structured the application for future expansion into inspection and audit management"
    ],
    techStack: [
      { label: "Frontend", value: "React 19, JavaScript, Vite" },
      { label: "Styling", value: "Tailwind CSS v4" },
      { label: "Backend & Database", value: "Supabase, PostgreSQL" },
      { label: "Authentication", value: "Supabase Auth" },
      { label: "Routing", value: "React Router" },
      { label: "Charts", value: "Recharts" },
      { label: "Icons", value: "Lucide React" },
      { label: "Version Control", value: "Git & GitHub" }
    ],
    statusNote: "Employee, department, and checklist management are built. The inspections back end is going through database validation, and the inspection front end is in development.",
    tags: ["React 19", "Supabase", "PostgreSQL", "Tailwind CSS v4", "Vite", "React Router", "Recharts"],
    icon: "ClipboardCheck",
    // Design concept until real app screenshots are available; remove imageIsConcept then
    image: fsmsConcept,
    imageIsConcept: true,
    frameLabel: "FSMS · Dashboard",
    gallery: [
      { src: fsmsConcept, caption: "Dashboard design concept. Screenshots of the working app are coming soon." }
    ],
    github: "https://github.com/24sab",
    live: null
  },
  {
    id: "order-kanban",
    title: "Order Kanban Board",
    subtitle: "Drag-and-drop order management for WooCommerce",
    category: "WooCommerce Plugin",
    period: "2026",
    role: "Solo developer (design, back end, front end)",
    summary: "A WooCommerce plugin that turns the order list into a React drag-and-drop board, with instant moves, undo, and conflict detection for teams.",
    story: [
      {
        heading: "The problem",
        paragraphs: [
          "WooCommerce shows orders as a long list. To move an order to its next stage, staff have to open it, change the status in a dropdown, and click Update, one order at a time.",
          "Shops that pack and ship many orders a day have no quick way to see what's waiting, what's being packed, and what's ready to go. WooCommerce also has no statuses between \"Processing\" and \"Completed\", so the real stages of fulfilment aren't visible at all."
        ]
      },
      {
        heading: "The solution",
        paragraphs: [
          "Order Kanban Board adds a board view under WooCommerce → Order Board. Every order status is a column, and every order is a card. Moving an order to its next stage takes a single drag.",
          "Behind the scenes, the plugin uses WooCommerce's own functions, so customer emails, order notes, and other plugins' hooks all run exactly as if the status had been changed on the order screen."
        ]
      }
    ],
    features: [
      { title: "Drag-and-drop board", text: "Mouse, touch, and keyboard support." },
      { title: "Two new fulfilment statuses", text: "Packing and Ready to ship, also available in the standard orders list and its bulk actions." },
      { title: "Instant moves with Undo", text: "Cards move the moment they're dropped, save in the background, and return to their column if saving fails." },
      { title: "Safe for teams", text: "If two staff members move the same order at once, the second change is stopped and the board shows the order's real status." },
      { title: "Quick-view panel", text: "Items, totals, shipping address, customer note, and order history, with status changes and notes (optionally emailed to the customer) without leaving the board." },
      { title: "Search", text: "Find orders by order number, customer name, or email." },
      { title: "Auto-refresh", text: "New orders appear without reloading the page." },
      { title: "Configurable board", text: "Choose which statuses appear as columns, reorder them, and set how many orders each column loads." },
      { title: "Confirmation before risky moves", text: "Moving to Cancelled or Refunded asks first, and makes clear that changing the status doesn't refund any payment." }
    ],
    technical: [
      { title: "Custom REST API", text: "A small REST API (okb/v1) for loading the board, paginating columns, loading order details, changing status, adding notes, and saving settings. Every route checks user capabilities, and all input is validated and sanitized." },
      { title: "Optimistic updates", text: "When a card is dropped, the interface updates before the server answers. If the request fails, the change is reverted and the user sees an error; successful moves show an Undo option. The board feels instant, even on slower servers." },
      { title: "Conflict detection", text: "Each status change sends the status the browser expects the order to have. If another staff member changed it first, the server returns HTTP 409 Conflict with the order's current data, and the board corrects itself instead of overwriting their work." },
      { title: "Normalized state management", text: "Orders are stored once by ID in a useReducer store, and columns hold only lists of IDs. A move changes two small lists, and the same action with \"from\" and \"to\" swapped handles both reverting and undoing." },
      { title: "Custom React hooks", text: "useBoard for data and actions, usePolling to refresh only while the tab is visible, useDebouncedValue for search, and AbortController to cancel outdated requests so slow responses never overwrite newer data." },
      { title: "HPOS compatible", text: "All order access goes through WooCommerce's CRUD functions (wc_get_orders, WC_Order), never direct SQL, so the plugin works with both High-Performance Order Storage and legacy storage." },
      { title: "Accessibility", text: "Keyboard dragging, screen reader announcements during drag-and-drop, a focus-trapped quick-view dialog, visible focus states, and reduced motion support." },
      { title: "Performance", text: "Scripts and styles load only on the board page, WordPress's shared React and components are used instead of bundling them, and each card receives only the fields it needs." }
    ],
    learnings: {
      heading: "Challenges & what I learned",
      paragraphs: [
        "The hardest part was making the board feel instant while keeping data correct. Updating the screen before the server confirms is easy, but it raises questions: what if saving fails, what if the user undoes a move, and what if someone else changed the same order a second earlier? Solving this with optimistic updates, reverts, and server-side conflict detection taught me how real-time collaborative tools like Trello handle the same problems.",
        "I also learned to build React interfaces that feel native inside WordPress, using @wordpress/components, @wordpress/scripts, and apiFetch, and to design a REST API with security as a first step rather than an afterthought."
      ]
    },
    techStack: [
      { label: "Frontend", value: "React, dnd-kit, SCSS" },
      { label: "WordPress UI", value: "@wordpress/components, apiFetch" },
      { label: "Backend", value: "PHP, WordPress REST API" },
      { label: "WooCommerce", value: "WooCommerce CRUD, HPOS" },
      { label: "Build", value: "@wordpress/scripts" }
    ],
    tags: ["React", "PHP", "WordPress REST API", "WooCommerce", "dnd-kit", "SCSS"],
    icon: "KanbanSquare",
    image: kanbanBoard,
    frameLabel: "WooCommerce → Order Board",
    gallery: [
      { src: kanbanBoard, caption: "The order board: every status is a column, every order a card" },
      { src: kanbanSettings, caption: "Board settings: choose, reorder, and add status columns" }
    ],
    github: "https://github.com/24sab",
    live: null
  },
  {
    id: "devtools-hub",
    title: "DevTools Hub",
    subtitle: "Developer utilities platform",
    category: "Web App",
    period: "2026",
    status: "Live",
    summary: "A browser-based platform of developer utilities, from JSON formatting and color conversion to a WordPress WP_Query code generator.",
    overview: [
      "DevTools Hub is a responsive, browser-based developer utilities platform designed to simplify everyday development tasks.",
      "It brings together lightweight tools for formatting and validating JSON, converting colors, encoding and decoding Base64, browsing reusable code snippets, and generating custom WordPress queries.",
      "The focus is a clean interface, quick access to every tool, and a smooth experience, so developers don't have to switch between multiple websites for common tasks."
    ],
    modules: [
      {
        title: "JSON Formatter",
        items: [
          "Format JSON into a readable structure",
          "Validate input and flag invalid data",
          "Minify JSON and copy the output",
          "Processes data entirely in the browser"
        ]
      },
      {
        title: "Color Converter",
        items: [
          "Convert between HEX, RGB, and HSL",
          "Real-time color preview",
          "Copy converted values"
        ]
      },
      {
        title: "Base64 Encoder & Decoder",
        items: [
          "Encode plain text into Base64",
          "Decode Base64 back into readable text",
          "Copy the generated output"
        ]
      },
      {
        title: "Code Snippet Library",
        items: [
          "Reusable PHP, WordPress, JavaScript, and CSS snippets",
          "Quick snippet search",
          "Filter snippets by language"
        ]
      },
      {
        title: "WP_Query Generator",
        items: [
          "Generates custom WordPress WP_Query PHP code",
          "Configure post type, posts per page, category, post status, and ordering",
          "Optional pagination",
          "Copy the PHP code straight into a project"
        ]
      },
      {
        title: "Global Search",
        items: [
          "Find any tool from one search interface",
          "Open search instantly with Ctrl + K"
        ]
      }
    ],
    highlightsTitle: "UI & UX highlights",
    highlights: [
      "Modern dark interface with electric-blue accents",
      "Responsive layout across screen sizes",
      "Searchable, filterable tool collection",
      "Clear, consistent input and output panels in every tool",
      "Simple navigation between tools"
    ],
    myRole: "I designed and developed the platform end to end: implemented each utility, built the WP_Query Generator, and deployed the site. It is built with Vite and hosted on Netlify.",
    techStack: [
      { label: "Frontend", value: "HTML5, CSS3, JavaScript (ES6+)" },
      { label: "Build tool", value: "Vite" },
      { label: "Hosting", value: "Netlify" },
      { label: "Version control", value: "Git & GitHub" }
    ],
    tags: ["JavaScript", "HTML5", "CSS3", "Vite", "Netlify"],
    icon: "Wrench",
    image: devtoolsHome,
    gallery: [
      { src: devtoolsHome, caption: "Home page" },
      { src: devtoolsTools, caption: "Tool collection with search and category filters" },
      { src: devtoolsJson, caption: "JSON Formatter: format, minify, and validate in the browser" }
    ],
    github: "https://github.com/sabira-webdev/devtools-hub",
    live: "https://devtools-hubdev.netlify.app/"
  },
  {
    id: "lumora-digital",
    title: "Lumora Digital",
    subtitle: "Business website for a concept digital agency",
    category: "WordPress Website",
    period: "2026",
    status: "Concept project",
    role: "Brand design, web design, WordPress development, content",
    summary: "A responsive 6-page business website for a concept agency, with brand identity, illustrations, a contact form, blog, and SEO, built with Astra and Elementor.",
    story: [
      {
        heading: "Overview",
        paragraphs: [
          "Lumora Digital is a complete, responsive business website for a concept digital agency that helps small businesses shine online. I created the brand from scratch, designed every page, and built the site in WordPress using the Astra theme and Elementor's Flexbox containers, with a working contact form, a blog, and on-page SEO.",
          "Lumora Digital is a fictional brand created for this portfolio project; it is not a real company."
        ]
      },
      {
        heading: "The goal",
        paragraphs: [
          "Most small businesses need a website that looks professional, explains what they do in seconds, and makes it easy for customers to get in touch. The goal was to build that kind of site: a strong first impression with a clear call to action, simple pages that explain the services, story, and values, an easy way to get in touch from every page, a layout that works as well on a phone as on a desktop, and a blog to support SEO.",
          "I also used this project to strengthen my front-end and site-building skills, so I can deliver complete websites, not just custom functionality."
        ]
      },
      {
        heading: "Brand & design system",
        paragraphs: [
          "\"Lumora\" comes from lumen, meaning light, which led to the tagline \"Ideas that shine online\". The logo is a teal rounded square with a white \"L\" and a small glowing orange dot, a simple mark that works as both a logo and a browser icon.",
          "A calm teal builds trust, while warm orange is reserved for buttons so every call to action stands out. Poppins is used for headings and body text, and custom flat illustrations in the brand colors replace stock photos for a consistent visual style."
        ]
      }
    ],
    palette: [
      { name: "Primary", hex: "#0F766E", use: "Logo, numbers, CTA section" },
      { name: "Accent", hex: "#F59E0B", use: "All buttons" },
      { name: "Light background", hex: "#F0FDFA", use: "Hero, banners, cards" },
      { name: "Text", hex: "#1F2937", use: "Headings and body text" }
    ],
    modulesTitle: "Pages & features",
    modules: [
      {
        title: "Home",
        items: [
          "Two-column hero with headline, \"Get Started\" button, and illustration",
          "Stats strip, three service cards, and a call-to-action section"
        ]
      },
      {
        title: "About",
        items: [
          "Full-width banner and an \"Our Story\" section beside an illustration",
          "Three value cards: Simple, Honest, Reliable"
        ]
      },
      {
        title: "Services",
        items: [
          "A section for each service: Web Design, Branding, Digital Marketing",
          "Images alternate left and right to keep the page easy to scan"
        ]
      },
      {
        title: "Blog",
        items: [
          "Three-column post grid with featured images and categories",
          "Three original articles on websites, brand colors, and SEO"
        ]
      },
      {
        title: "Contact",
        items: [
          "Contact details beside a styled WPForms contact form",
          "Submit button matched to the brand with custom CSS"
        ]
      },
      {
        title: "Across the site",
        items: [
          "Header and three-column footer built with the Astra Header & Footer Builder",
          "Layouts tuned separately for desktop, tablet, and mobile",
          "Rank Math SEO: titles, meta descriptions, and image alt text",
          "Site icon, Privacy Policy page, and a consistent menu"
        ]
      }
    ],
    technicalTitle: "Process",
    technical: [
      { title: "1. Plan", text: "Listed the pages and the sections each one needed, starting with the homepage as the most important page." },
      { title: "2. Brand", text: "Chose the name, tagline, colors, and font, then set them globally in Astra so the whole site stayed consistent." },
      { title: "3. Build", text: "Created the header and footer in Astra, then built each page in Elementor with nested Flexbox containers (section → row → cards), using the Structure panel to keep the layout organized." },
      { title: "4. Reuse", text: "Copied proven sections (banner, story, cards, call to action) between pages instead of rebuilding them, which kept spacing and styling consistent." },
      { title: "5. Make it responsive", text: "Reviewed every page in mobile view and adjusted direction, width, padding, and alignment per device, so columns stack cleanly and text stays readable." },
      { title: "6. Content & SEO", text: "Wrote the page copy and three blog posts, set categories and featured images, and added SEO titles, meta descriptions, and alt text with Rank Math." },
      { title: "7. Polish & test", text: "Added the logo and site icon, a Privacy Policy, clickable contact links, and a final check of every link, button, and the contact form on all screen sizes." }
    ],
    challenges: [
      { problem: "Widgets dropped on the page landed in the wrong container, breaking layouts.", solution: "Used Elementor's Structure panel to name every container (Hero, Row, Card) and move elements precisely." },
      { problem: "Card rows that looked right on desktop shrank to a narrow column on phones.", solution: "Overrode alignment, width, and padding at the mobile breakpoint (stretch alignment, 100% width)." },
      { problem: "A two-column section overflowed when one side was set to grow.", solution: "Gave each side a fixed share of the width (55% text, 40% image) so it always fits." },
      { problem: "White gaps appeared around full-width banners.", solution: "Traced it to padding on the outer container and moved the spacing to the inner box." },
      { problem: "Changing the local site domain caused a redirect loop.", solution: "Found a capital letter and a missing .local suffix in the domain, and reset it to a lowercase .local address." },
      { problem: "The form button didn't match the brand.", solution: "Added a small custom CSS rule to style the WPForms submit button in brand orange." }
    ],
    highlightsTitle: "What this project shows",
    highlights: [
      "Building a complete WordPress site from an empty install to a finished, branded website",
      "Confident use of Astra and Elementor's Flexbox containers, including responsive overrides",
      "Design judgment: hierarchy, spacing, color use, and consistency across pages",
      "Content and SEO basics that real clients expect",
      "Debugging layout and environment issues methodically"
    ],
    nextSteps: [
      "Custom plugin \"Lumora Core\": custom post types for projects and testimonials, a custom Elementor widget, and an AJAX contact form saving to a custom table",
      "Global styles: move repeated colors and button styles into Elementor Globals and Classes",
      "Go live: deploy to hosting with SSL, SMTP email delivery, and automatic backups"
    ],
    techStack: [
      { label: "Platform", value: "WordPress" },
      { label: "Theme", value: "Astra" },
      { label: "Page builder", value: "Elementor (Flexbox containers)" },
      { label: "Forms", value: "WPForms" },
      { label: "SEO", value: "Rank Math" },
      { label: "Local development", value: "Local" },
      { label: "Pages", value: "Home, About, Services, Blog, Contact, Privacy Policy" }
    ],
    tags: ["WordPress", "Elementor", "Astra", "Rank Math", "WPForms"],
    icon: "Globe",
    image: lumoraShowcase,
    // These images already include their own device frames, so they're shown unframed
    gallery: [
      { src: lumoraShowcase, caption: "Home page on desktop and mobile", plain: true },
      { src: lumoraPages, caption: "Home, About, and Contact pages", plain: true },
      { src: lumoraResponsive, caption: "Responsive layouts on mobile", plain: true }
    ],
    github: null,
    live: null
  },
  {
    id: "wc-commercial-plugins",
    title: "Commercial WooCommerce Plugins",
    tagline: "Professional work at Acodez IT Solutions",
    category: "WooCommerce Plugin",
    period: "2023 – Present",
    summary: "Three commercial WooCommerce plugins for checkout fields, email customization, and PDF invoices & packing slips.",
    overview: [
      "At Acodez IT Solutions I develop and maintain three commercial WooCommerce plugins, covering checkout field customization, email customization, and PDF invoices and packing slips.",
      "I build features with WordPress Hooks, Filters, Custom Post Types, and the REST API, keep the code aligned with WooCommerce Marketplace guidelines, ship regular releases, and support users through the WordPress support forum, debugging conflicts with themes and third-party plugins."
    ],
    highlights: [
      "Checkout field customization",
      "Email customization",
      "PDF invoices and packing slips"
    ],
    tags: ["PHP", "WordPress", "WooCommerce", "React.js", "MySQL"],
    icon: "Puzzle",
    image: null,
    github: null,
    live: null
  }
];

export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Institute of Engineering and Technology, University of Calicut",
    period: "June 2018 – August 2022",
    location: "Calicut, Kerala, India",
    description: "Built strong foundations in computer systems, algorithms, software engineering, database management, and web architectures."
  }
];

export const languagesData = ["English", "Hindi", "Malayalam"];
