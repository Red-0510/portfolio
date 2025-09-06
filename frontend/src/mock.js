// Mock data for Jainesh's portfolio
export const mockData = {
  personal: {
    name: "Jainesh Arvindbhai Machhi",
    title: "Software Development Engineer I",
    location: "Mumbai, India",
    email: "jaineshmachhi@gmail.com",
    phone: "+91-9904200501",
    address: "Daman, Daman & Diu - 396210",
    links: {
      github: "https://github.com/Red-0510",
      linkedin: "https://linkedin.com/in/jainesh-machhi",
      codeforces: "https://codeforces.com/profile/jaineshmachhi"
    }
  },
  
  about: {
    description: "Backend Developer specializing in high-availability microservices, cloud infrastructure, and real-time data processing. Currently at JP Morgan Chase & Co, building scalable financial systems using .NET Core, AWS, and distributed architectures.",
    highlights: [
      "Expert in microservices architecture with .NET Core and Spring Boot",
      "AWS certified with hands-on experience in Lambda, EC2, S3, and Kubernetes",
      "Competitive programmer with Codeforces Expert rating (1681)",
      "Proven track record of optimizing performance and reducing costs"
    ]
  },
  
  experience: [
    {
      id: 1,
      company: "JP Morgan Chase & Co.",
      position: "Software Development Engineer I",
      location: "Mumbai, India",
      duration: "July 2025 – Present",
      type: "Full-time",
      achievements: [
        "Built high-availability microservices using .NET Core with Kafka for real-time event streaming",
        "Deployed on AWS (EC2, S3, Lambda, CloudWatch) with Oracle SQL optimization",
        "Built serverless SSL certificate rotation system achieving 100% uptime",
        "Automated regression testing with Playwright, reducing testing time by 95%"
      ],
      technologies: ["ASP.NET Core 8", "Oracle SQL", "React", "Kafka", "Playwright", "AWS", "Kubernetes", "Docker"]
    },
    {
      id: 2,
      company: "JP Morgan Chase & Co.",
      position: "Software Engineering Intern",
      location: "Mumbai, India",
      duration: "January 2025 – July 2025",
      type: "Internship",
      achievements: [
        "Reduced cloud logging costs by 25% using LLM-powered logging optimizer",
        "Created AI-powered JMeter test plan generator saving 40+ engineer-days",
        "Improved debugging speed through log pattern analysis and auto-refactoring"
      ],
      technologies: ["ASP.NET Core 8", "Python", "GPT 4.1/4o", "JMeter", "AWS Lambda", "CloudWatch", "S3"]
    },
    {
      id: 3,
      company: "JP Morgan Chase & Co.",
      position: "Summer Intern",
      location: "Mumbai, India",
      duration: "May 2024 – July 2024",
      type: "Internship",
      achievements: [
        "Engineered SQL script process simulations in React TypeScript microfrontend",
        "Integrated with SpringBoot API microservice reducing onboarding time by 95%",
        "Improved report generation efficiency from 3 weeks to 1 day"
      ],
      technologies: ["React", "Redux", "TypeScript", "SpringBoot", "H2-Database", "JUnit", "Jest"]
    }
  ],
  
  skills: {
    languages: {
      title: "Programming Languages",
      items: ["C#", "Java", "JavaScript", "Python", "C/C++", "SQL", "Solidity*"]
    },
    technologies: {
      title: "Technologies & Frameworks",
      items: ["ASP.NET Core 8", "Spring Boot", "Node.js", "React.js", "Redux", "Unity Engine"]
    },
    cloud: {
      title: "Cloud & DevOps",
      items: ["AWS (EC2, S3, Lambda, CloudWatch)", "Kubernetes", "Docker", "Git/GitHub"]
    },
    databases: {
      title: "Databases & Data",
      items: ["Oracle SQL", "MongoDB", "Elasticsearch", "Kafka", "PySpark*", "Hadoop*"]
    },
    ai: {
      title: "AI/ML & Tools",
      items: ["TensorFlow", "PyTorch", "MLAgents", "GPT Integration", "JMeter", "Playwright"]
    }
  },
  
  projects: [
    {
      id: 1,
      title: "Reinforcement Learning Agents",
      subtitle: "Unity3D AI Development",
      date: "January 2024",
      type: "Self Project",
      description: "Developed AI agents for walking across multiple environments using Genetic Algorithms, Imitation Learning, and Deep Reinforcement Learning.",
      features: [
        "Multiple environment support (Straight Track, Uneven Terrain)",
        "Implemented using Bellman's Equation and various ML techniques",
        "Environments: Driving car, Balance Ball, Pong, Maze Walkers"
      ],
      technologies: ["Unity3D", "C#", "Machine Learning", "Reinforcement Learning", "Python"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 2,
      title: "Screen Share Reader",
      subtitle: "Code For Good 23' Hackathon Winner",
      date: "July 2023",
      type: "Hackathon Project",
      description: "Accessibility solution for visually impaired individuals to hear screen content during online meetings.",
      features: [
        "Real-time OCR processing of screen content",
        "Text-to-speech conversion for meeting accessibility",
        "Automated screen capture and content analysis"
      ],
      technologies: ["Python", "pyautoGUI", "Tesseract OCR", "pyttsx3"],
      links: {
        github: "https://github.com/Red-0510"
      }
    }
  ],
  
  achievements: [
    {
      id: 1,
      title: "AWS Certified Cloud Practitioner",
      date: "August 2025",
      type: "Certification",
      description: "CLF-C02 Certification"
    },
    {
      id: 2,
      title: "JP Morgan Q1 AI Hackathon Winner",
      date: "March 2025",
      type: "Competition",
      description: "AI-powered JMeter generator utility"
    },
    {
      id: 3,
      title: "Meta Hacker Cup Round 2",
      date: "October 2024",
      type: "Competition",
      description: "Rank 1246 out of 13,269 participants"
    },
    {
      id: 4,
      title: "Codeforces Round 927",
      date: "February 2024",
      type: "Competition",
      description: "Global rank 104 out of 53,000 participants"
    },
    {
      id: 5,
      title: "Competitive Programming Expert",
      date: "Present",
      type: "Rating",
      description: "Codeforces Expert (1681), Codechef 4⭐ (1909)"
    }
  ],
  
  education: {
    institution: "Sardar Vallabhbhai National Institute of Technology, Surat",
    degree: "B.Tech. in Computer Science and Engineering",
    duration: "2021 – 2025",
    cgpa: "8.87/10",
    relevantCourses: [
      "Database Management System", "Computer Networks", "Distributed System",
      "Operating System", "Data Structures and Algorithms", "Deep Learning",
      "Cloud Computing", "Network Security", "Machine Learning", "Blockchain Technology"
    ]
  }
};