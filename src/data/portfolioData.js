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
  linkedin: "https://linkedin.com/in/p-sv-reddy"
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
      description: "Actively solving challenges in web security, cryptography, reverse engineering fundamentals, and digital forensics during collegiate and online CTF events.",
      icon: "Flag",
      tags: ["Web Security", "Crypto", "Forensics", "CTF"]
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
    id: "landscape",
    name: "Landscape",
    title: "Landscape Photography",
    description: "Wide vistas, natural scenery, and horizon compositions.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
        caption: "Serene mountain valley & lake reflection"
      },
      {
        url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80",
        caption: "Misty forest path at dawn"
      }
    ]
  },
  {
    id: "sunset",
    name: "Sunrise & Sunset",
    title: "Golden Hour & Sunsets",
    description: "Warm gradients, silhouetted horizons, and golden light.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&w=1000&q=80",
        caption: "Vibrant golden sunset horizon"
      },
      {
        url: "https://images.unsplash.com/photo-1472120435266-53107fd0c44a?auto=format&fit=crop&w=1000&q=80",
        caption: "Dusk sky over quiet shoreline"
      }
    ]
  },
  {
    id: "architecture",
    name: "Architecture",
    title: "Architectural & Geometry",
    description: "Lines, symmetry, modern structural perspectives, and shadows.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
        caption: "Symmetrical modern glass structure"
      },
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
        caption: "High-rise architectural geometry"
      }
    ]
  },
  {
    id: "creative",
    name: "Creative",
    title: "Creative & Abstract",
    description: "Experimental angles, light play, and visual story concepts.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
        caption: "Prism light reflections & cyber hues"
      },
      {
        url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1000&q=80",
        caption: "Abstract dark cyber neon aesthetic"
      }
    ]
  },
  {
    id: "portrait",
    name: "Portrait",
    title: "Portrait Photography",
    description: "Expressive subject framing, bokeh depth of field, and mood.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
        caption: "Cinematic portrait lighting"
      }
    ]
  }
];

export const achievementsCategories = [
  {
    id: "hackathons",
    title: "Hackathon Achievements",
    icon: "Trophy",
    items: [
      {
        title: "Hackathon Participation & Team Building",
        detail: "Placeholder for upcoming hackathon accolades, project presentations, and awards.",
        isPlaceholder: true
      }
    ]
  },
  {
    id: "ctf",
    title: "CTF Rankings & Security",
    icon: "ShieldAlert",
    items: [
      {
        title: "CTF Leaderboards & Scorecards",
        detail: "Placeholder for CTF match rankings, challenge badges, and platform profiles.",
        isPlaceholder: true
      }
    ]
  },
  {
    id: "coding",
    title: "Coding Achievements",
    icon: "CodeCheck",
    items: [
      {
        title: "Competitive Coding Milestones",
        detail: "Placeholder for platform ratings (LeetCode, HackerRank, CodeChef) and contest scores.",
        isPlaceholder: true
      }
    ]
  },
  {
    id: "certifications",
    title: "Certifications & Badges",
    icon: "Medal",
    items: [
      {
        title: "Professional Security & Dev Certifications",
        detail: "Placeholder for course certificates, cloud security badges, and technical credentials.",
        isPlaceholder: true
      }
    ]
  },
  {
    id: "competitions",
    title: "Technical Competitions",
    icon: "Zap",
    items: [
      {
        title: "Inter-College & Departmental Events",
        detail: "Placeholder for technical paper presentations, quiz competitions, and coding sprints.",
        isPlaceholder: true
      }
    ]
  },
  {
    id: "academic",
    title: "Academic Achievements",
    icon: "GraduationCap",
    items: [
      {
        title: "VNRVJIET Academic Milestones",
        detail: "Placeholder for academic honors, merit recognitions, and department achievements.",
        isPlaceholder: true
      }
    ]
  }
];
