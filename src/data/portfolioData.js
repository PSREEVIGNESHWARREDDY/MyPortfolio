export const personalInfo = {
  fullName: "Patharched Sree Vigneshwar Reddy",
  shortName: "Vigneshwar Reddy",
  roles: [
    "Cyber Security Student",
    "Developer",
    "Cybersecurity Enthusiast",
    "Photographer"
  ],
  tagline: "Cyber Security Student | Developer | Problem Solver",
  heroBio: "I'm a 2nd-year Cyber Security student passionate about programming, cybersecurity, problem solving, technology, and creative photography.",
  aboutBio: [
    "I am currently pursuing my B.Tech degree in Cyber Security at VNR Vignana Jyothi Institute of Engineering and Technology (VNRVJIET) in Hyderabad, India.",
    "My technical interests lie at the intersection of computer security, software development, algorithms, and practical hands-on problem solving. I actively participate in Capture The Flag (CTF) competitions, technical hackathons, and competitive programming challenges.",
    "Outside of code and security terminals, I am an avid photographer capturing landscapes, sunsets, architecture, and creative perspectives. I enjoy exploring new technologies, building practical security-focused applications, and continuously elevating my technical skill set."
  ],
  college: "VNR Vignana Jyothi Institute of Engineering and Technology (VNRVJIET)",
  collegeShort: "VNRVJIET",
  location: "Hyderabad, Telangana, India",
  yearOfStudy: "2nd Year B.Tech",
  specialization: "Cyber Security",
  email: "sreevigneshwarreddyp@gmail.com",
  github: "https://github.com/PSREEVIGNESHWARREDDY",
  linkedin: "https://linkedin.com/in/p-sv-reddy",
  leetcode: "https://leetcode.com/u/p_sv_reddy2007/",
  leetcodeUsername: "p_sv_reddy2007"
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/PSREEVIGNESHWARREDDY",
    icon: "Github",
    isConfigured: true,
    handle: "github.com/PSREEVIGNESHWARREDDY"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/p-sv-reddy",
    icon: "Linkedin",
    isConfigured: true,
    handle: "linkedin.com/in/p-sv-reddy"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/p_sv.reddy2007",
    icon: "Instagram",
    isConfigured: true,
    handle: "@p_sv.reddy2007"
  },
  {
    name: "Email",
    url: "mailto:sreevigneshwarreddyp@gmail.com",
    icon: "Mail",
    isConfigured: true,
    handle: "sreevigneshwarreddyp@gmail.com"
  }
];

export const educationTimeline = [
  {
    id: "btech",
    degree: "B.Tech – Cyber Security",
    institution: "VNR Vignana Jyothi Institute of Engineering and Technology (VNRVJIET)",
    location: "Hyderabad, Telangana",
    status: "Currently in 2nd Year",
    isCurrent: true,
    description: "Specializing in Cyber Security with core coursework covering Computer Networks, Operating Systems, Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Cryptography, and Web Security.",
    badges: ["Cyber Security", "2nd Year", "VNRVJIET"]
  },
  {
    id: "future-cert",
    degree: "Security Certifications & Specializations",
    institution: "Upcoming Professional Milestones",
    location: "Global / Online",
    status: "Planned / In Progress",
    isCurrent: false,
    description: "Preparing for industry certifications in ethical hacking, network security analysis, and cloud security fundamentals.",
    badges: ["Planned", "Certifications"]
  }
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "Code2",
    description: "Core languages used for systems, scripting, and application development.",
    skills: [
      { name: "C", level: "Core", tag: "Systems" },
      { name: "C++", level: "DSA & CP", tag: "Algorithms" },
      { name: "Java", level: "OOP", tag: "Enterprise" },
      { name: "Python", level: "Scripting & Security", tag: "Automation" }
    ]
  },
  {
    title: "Computer Science Core",
    icon: "Cpu",
    description: "Fundamental computer science principles and software engineering concepts.",
    skills: [
      { name: "Data Structures & Algorithms", level: "Problem Solving" },
      { name: "Object-Oriented Programming", level: "Design Patterns" },
      { name: "Database Fundamentals", level: "SQL & Storage" },
      { name: "Computer Networks", level: "TCP/IP & Protocols" },
      { name: "Operating Systems", level: "Process & Memory" }
    ]
  },
  {
    title: "Cyber Security",
    icon: "ShieldCheck",
    description: "Specialized cybersecurity concepts, environments, and defensive fundamentals.",
    skills: [
      { name: "Cybersecurity Fundamentals", level: "Core Security" },
      { name: "CTFs (Capture The Flag)", level: "Hands-on Practice" },
      { name: "Web Security Fundamentals", level: "OWASP Concepts" },
      { name: "Linux / Kali Linux", level: "OS & Tools" },
      { name: "Cryptography Fundamentals", level: "Encryption & Hashes" },
      { name: "Digital Forensics Fundamentals", level: "Investigation Basics" }
    ]
  },
  {
    title: "Development & Tools",
    icon: "Wrench",
    description: "Development tools, frameworks, databases, and version control.",
    skills: [
      { name: "Git & GitHub", level: "Version Control" },
      { name: "VS Code", level: "Primary IDE" },
      { name: "Eclipse", level: "Java IDE" },
      { name: "PostgreSQL", level: "Relational DB" },
      { name: "FastAPI", level: "Backend APIs" },
      { name: "React", level: "Frontend Framework" },
      { name: "Vite", level: "Build Tooling" }
    ]
  }
];

export const projectsData = [
  {
    id: "secure-doc-mgmt",
    title: "Secure Digital Document Management System",
    isMajor: true,
    status: "Featured Major Project",
    summary: "A secure digital document management system designed for legal and investigation documents, combining cybersecurity practices with secure storage, authentication, encryption, integrity verification, and audit mechanisms.",
    description: "This comprehensive security application addresses high-confidentiality document processing for sensitive legal and investigative workflows. It features end-to-end payload encryption using AES-256-GCM before object storage dispatch, cryptographically verifies file integrity with SHA-256 checksum hashing upon retrieval, enforces strict role-based access controls, and maintains tamper-evident audit logs.",
    technologies: [
      "React",
      "Vite",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "MinIO / S3",
      "AES-256-GCM",
      "SHA-256"
    ],
    highlights: [
      "AES-256-GCM encryption at rest & in transit",
      "SHA-256 cryptographic document checksum verification",
      "Role-Based Access Control (RBAC) & Audit Logging",
      "S3 / MinIO Object Storage integration"
    ],
    githubUrl: null, // Placeholder: set to string URL when ready
    liveUrl: null,   // Placeholder: set to string URL when ready
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "ctf-sandbox-placeholder",
    title: "CTF Challenge Solver & Scripting Sandbox",
    isMajor: false,
    status: "Project Placeholder",
    summary: "Custom Python automation tools and decryption helper utility scripts developed for CTF challenges and cryptographic analysis.",
    description: "A suite of modular Python scripts and helper utilities created to automate common task patterns in CTF challenges, including base encoding/decryption routines, header inspection, and payload decoding.",
    technologies: ["Python", "Cryptography", "Linux", "Bash"],
    highlights: [
      "Automated payload decoder",
      "Custom CTF writeup template generator",
      "Modular Python scripting"
    ],
    githubUrl: null,
    liveUrl: null,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "web-security-lab-placeholder",
    title: "Web Vulnerability Exploration Lab",
    isMajor: false,
    status: "Project Placeholder",
    summary: "Hands-on lab environment exploring OWASP Top 10 web vulnerabilities, mitigation strategies, and defensive code patterns.",
    description: "An educational sandbox environment testing secure coding practices, input validation routines, and parameter sanitization against SQL injection and XSS scenarios.",
    technologies: ["React", "FastAPI", "PostgreSQL", "OWASP"],
    highlights: [
      "Input sanitization testing",
      "Parameterized SQL queries implementation",
      "Security header configuration"
    ],
    githubUrl: null,
    liveUrl: null,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
  }
];

export const hackathonsAndCyber = {
  sectionTitle: "Hackathons & Cybersecurity",
  subtitle: "Active participation in hackathons, CTF competitions, security workshops, and college technical events.",
  activities: [
    {
      id: "ctf-competitions",
      category: "CTF Competitions",
      title: "Capture The Flag (CTF) Participation",
      event: "Jeopardy & Attack-Defense CTFs",
      description: "Actively solving challenges in web security, cryptography, reverse engineering fundamentals, and digital forensics during collegiate and national CTF events.",
      icon: "Flag",
      tags: ["GOPWNIT CTF 2026", "WARZONE 4.0", "Web Security", "Crypto", "Forensics"],
      recentParticipation: {
        badge: "Recently Participated",
        title: "GOPWNIT CTF 2026",
        rank: "100th Place",
        description: "Secured 100th place in GOPWNIT CTF 2026, putting cybersecurity knowledge, problem-solving skills, and defensive/offensive strategies to test under competitive time constraints.",
        url: "https://www.linkedin.com/posts/p-sv-reddy_gopwnitctf2026-ctf-cybersecurity-share-7515471581154869248-vIf4/?highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7515471582606311425&highlightedUpdateType=SOCIAL_SHARE&origin=SOCIAL_SHARE&utm_source=share&utm_medium=member_desktop&rcm=ACoAAF6Th_sBVylUiKMI_z-2vSamyXOXnmGsQJw"
      }
    },
    {
      id: "hackathons",
      category: "Hackathons",
      title: "Technical Hackathons & Innovation Challenges",
      event: "Campus & National Hackathons",
      description: "Collaborating in rapid prototype development to build secure software solutions, API integrations, and practical application ideas under timed constraints.",
      icon: "Trophy",
      tags: ["Rapid Prototyping", "Full Stack", "Problem Solving"]
    },
    {
      id: "tech-events",
      category: "Technical Events",
      title: "VNRVJIET Technical Symposiums & Workshops",
      event: "Department Technical Events",
      description: "Participating in cybersecurity workshops, coding marathons, and technical seminars organized within VNRVJIET.",
      icon: "Award",
      tags: ["VNRVJIET", "Workshops", "Networking"]
    }
  ]
};

export const hobbies = [
  {
    id: "photography",
    title: "Photography",
    icon: "Camera",
    tagline: "Capturing light, geometry, and moments through the lens.",
    description: "Creative photography focusing on landscapes, Golden Hour sunrises and sunsets, architectural geometry, and artistic portraits.",
    details: [
      "Landscape photography",
      "Sunrise & Sunset photography",
      "Architecture & perspective",
      "Creative photography",
      "Portrait photography"
    ],
    hasModal: true
  },
  {
    id: "programming",
    title: "Programming",
    icon: "Code",
    tagline: "Solving complex logic puzzles and mastering languages.",
    description: "Passionate about Data Structures & Algorithms, competitive coding challenges, and exploring modern programming paradigms.",
    details: [
      "Algorithmic problem solving",
      "Competitive coding",
      "Learning new languages & frameworks"
    ],
    hasModal: false
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    icon: "Shield",
    tagline: "Deconstructing systems and understanding defense.",
    description: "Engaging in CTF challenges, studying cryptographic mechanisms, practicing Linux administration, and following security updates.",
    details: [
      "CTFs & wargames",
      "Exploring security concepts",
      "Ethical hacking fundamentals",
      "Cybersecurity challenges"
    ],
    hasModal: false
  },
  {
    id: "content-creation",
    title: "Content Creation",
    icon: "Video",
    tagline: "Sharing technical insights and creative media.",
    description: "Documenting technical learning journeys, programming concepts, technology insights, and photography showcases.",
    details: [
      "Technology & dev content",
      "Programming concepts",
      "Creative photography displays"
    ],
    hasModal: false
  }
];

export const photographyCategories = [
  {
    id: "all",
    name: "All Photos",
    title: "All Photographs",
    description: "Personal captures and moments through the lens by Patharched Sree Vigneshwar Reddy.",
    photos: [
      { url: "/photos/17875177542575739.webp", caption: "Golden hour sunset over metro railway tracks" },
      { url: "/photos/17887459131410470.webp", caption: "Farmer in rural paddy field waters at dusk" },
      { url: "/photos/17903563782261174.webp", caption: "Atmospheric landscape and natural horizons" },
      { url: "/photos/17930111360977428.webp", caption: "Serene scenic composition" },
      { url: "/photos/17941089243197929.webp", caption: "Dramatic sky and horizon perspective" },
      { url: "/photos/17952284729852603.webp", caption: "Quiet street moment and natural light" },
      { url: "/photos/17953269681167581.webp", caption: "Candid perspective and framing" },
      { url: "/photos/18030910946525648.webp", caption: "Architectural lines and geometry" },
      { url: "/photos/18042486140329255.webp", caption: "Warm golden light reflections" },
      { url: "/photos/18056337155399141.webp", caption: "Urban structural angles" },
      { url: "/photos/18064513339864581.webp", caption: "Fine detail and contrast study" },
      { url: "/photos/18067512137368704.webp", caption: "Architectural symmetry and shadows" },
      { url: "/photos/18069214213950146.webp", caption: "Candid environmental portraiture" },
      { url: "/photos/18073567424282112.webp", caption: "Urban depth of field" },
      { url: "/photos/18079557575364463.webp", caption: "Everyday life in motion" },
      { url: "/photos/18080240819386509.webp", caption: "Creative abstract lighting and shadows" },
      { url: "/photos/18086763118990209.webp", caption: "Sunset silhouettes and amber gradients" },
      { url: "/photos/18093806783335626.webp", caption: "Expansive natural landscape vistas" },
      { url: "/photos/18095807021070069.webp", caption: "Sunburst and golden hour warmth" },
      { url: "/photos/18108373270904728.webp", caption: "Modern architecture and facade lines" },
      { url: "/photos/18117469765802740.webp", caption: "Minimalist composition and textures" },
      { url: "/photos/18139463890419326.webp", caption: "Vivid dusk horizons and evening colors" },
      { url: "/photos/18152733217498284.webp", caption: "Golden hour glow across the horizon" },
      { url: "/photos/18209571103331147.webp", caption: "Artistic angle and moody lighting" },
      { url: "/photos/18394223092146987.webp", caption: "Creative color palette and shadows" },
      { url: "/photos/18552687721035748.webp", caption: "Reflective mood and twilight tones" }
    ]
  },
  {
    id: "sunset",
    name: "Sunsets & Golden Hour",
    title: "Sunrise & Sunset Photography",
    description: "Warm gradients, golden light, and silhouetted horizons.",
    photos: [
      { url: "/photos/17875177542575739.webp", caption: "Golden hour sunset over metro railway tracks" },
      { url: "/photos/18042486140329255.webp", caption: "Warm golden light reflections" },
      { url: "/photos/18086763118990209.webp", caption: "Sunset silhouettes and amber gradients" },
      { url: "/photos/18095807021070069.webp", caption: "Sunburst and golden hour warmth" },
      { url: "/photos/18139463890419326.webp", caption: "Vivid dusk horizons and evening colors" },
      { url: "/photos/18152733217498284.webp", caption: "Golden hour glow across the horizon" }
    ]
  },
  {
    id: "landscape",
    name: "Nature & Landscapes",
    title: "Landscape Photography",
    description: "Natural vistas, open horizons, and tranquil environments.",
    photos: [
      { url: "/photos/17887459131410470.webp", caption: "Farmer in rural paddy field waters at dusk" },
      { url: "/photos/17903563782261174.webp", caption: "Atmospheric landscape and natural horizons" },
      { url: "/photos/17930111360977428.webp", caption: "Serene scenic composition" },
      { url: "/photos/17941089243197929.webp", caption: "Dramatic sky and horizon perspective" },
      { url: "/photos/18093806783335626.webp", caption: "Expansive natural landscape vistas" }
    ]
  },
  {
    id: "architecture",
    name: "Architecture & Urban",
    title: "Architectural & Geometric Perspectives",
    description: "Structural symmetry, urban geometries, and building facades.",
    photos: [
      { url: "/photos/18030910946525648.webp", caption: "Architectural lines and geometry" },
      { url: "/photos/18056337155399141.webp", caption: "Urban structural angles" },
      { url: "/photos/18067512137368704.webp", caption: "Architectural symmetry and shadows" },
      { url: "/photos/18073567424282112.webp", caption: "Urban depth of field" },
      { url: "/photos/18108373270904728.webp", caption: "Modern architecture and facade lines" }
    ]
  },
  {
    id: "street",
    name: "Street & Life",
    title: "Street & Candid Moments",
    description: "Candid glimpses into human life, work, and surroundings.",
    photos: [
      { url: "/photos/17952284729852603.webp", caption: "Quiet street moment and natural light" },
      { url: "/photos/17953269681167581.webp", caption: "Candid perspective and framing" },
      { url: "/photos/18064513339864581.webp", caption: "Fine detail and contrast study" },
      { url: "/photos/18069214213950146.webp", caption: "Candid environmental portraiture" },
      { url: "/photos/18079557575364463.webp", caption: "Everyday life in motion" }
    ]
  },
  {
    id: "creative",
    name: "Creative & Abstract",
    title: "Creative Perspectives",
    description: "Artistic shadows, light play, and expressive framing.",
    photos: [
      { url: "/photos/18080240819386509.webp", caption: "Creative abstract lighting and shadows" },
      { url: "/photos/18117469765802740.webp", caption: "Minimalist composition and textures" },
      { url: "/photos/18209571103331147.webp", caption: "Artistic angle and moody lighting" },
      { url: "/photos/18394223092146987.webp", caption: "Creative color palette and shadows" },
      { url: "/photos/18552687721035748.webp", caption: "Reflective mood and twilight tones" }
    ]
  }
];

export const achievementsCategories = [
  {
    id: "ctf",
    title: "CTF Rankings & Security",
    icon: "ShieldAlert",
    items: [
      {
        title: "WARZONE 4.0 CTF – 2nd Place 🥈",
        badge: "2nd Place",
        detail: "Secured 2nd place in the WARZONE 4.0 CTF competition with team tr!n3tr@. Solved challenges across digital forensics, reverse engineering, cryptography, network analysis, and incident response under timed pressure.",
        url: "https://www.linkedin.com/posts/p-sv-reddy_tr-cybersecurity-ctf-ugcPost-7507348252652900352-yLMk/?highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7507348253852565505&highlightedUpdateType=SOCIAL_SHARE&origin=SOCIAL_SHARE&utm_source=share&utm_medium=member_desktop&rcm=ACoAAF6Th_sBVylUiKMI_z-2vSamyXOXnmGsQJw",
        isPlaceholder: false
      },
      {
        title: "GOPWNIT CTF 2026 – Top 100 Finish 🏆",
        badge: "100th Place",
        detail: "Secured 100th place in GOPWNIT CTF 2026, demonstrating practical offensive and defensive skills across diverse challenge categories.",
        url: "https://www.linkedin.com/posts/p-sv-reddy_gopwnitctf2026-ctf-cybersecurity-share-7515471581154869248-vIf4/?highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7515471582606311425&highlightedUpdateType=SOCIAL_SHARE&origin=SOCIAL_SHARE&utm_source=share&utm_medium=member_desktop&rcm=ACoAAF6Th_sBVylUiKMI_z-2vSamyXOXnmGsQJw",
        isPlaceholder: false
      }
    ]
  },
  {
    id: "coding",
    title: "Coding Achievements",
    icon: "CodeCheck",
    items: [
      {
        title: "Top 100 Coders 3.0 – 34th Position 🏆",
        badge: "Rank 34",
        detail: "Secured 34th position in Top 100 Coders 3.0, conducted by Krithomedh (student chapter of Dept. of CSE–AIML & IoT, R&AI at VNRVJIET), competing across complex algorithmic problems and logical challenges.",
        url: "https://www.linkedin.com/posts/p-sv-reddy_top100coders-top100coders3-vnrvjiet-share-7516887119106183168-DKqm/?highlightedUpdateUrn=urn%3Ali%3Aactivity%3A7516887120431742976&highlightedUpdateType=SOCIAL_SHARE&origin=SOCIAL_SHARE&utm_source=share&utm_medium=member_desktop&rcm=ACoAAF6Th_sBVylUiKMI_z-2vSamyXOXnmGsQJw",
        isPlaceholder: false
      },
      {
        title: "LeetCode Live Profile & Metrics 🎯",
        badge: "198+ Solved • Rating 1,557",
        detail: "Live competitive programming statistics synchronized directly from LeetCode. Solved across C++, Java, and Python with 50 Days Consistency Badge.",
        url: "https://leetcode.com/u/p_sv_reddy2007/",
        isLeetCodeLive: true,
        username: "p_sv_reddy2007",
        isPlaceholder: false
      }
    ]
  }
];
