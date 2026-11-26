// Edit this file to update the whole portfolio. All content comes from the resume and LinkedIn PDF.
export const profile = {
  name: "Alin Mariya Joby",
  title: "Final-year B.Tech Cyber Security student",
  headline: "I build tools that find attacks in network traffic and weaknesses in web apps.",
  summary:
    "Final-year Computer Science and Engineering (Cyber Security) student with hands-on work in web vulnerability assessment, Wi-Fi traffic analysis and Python/Django development. Looking for an entry-level role in cybersecurity, software development or data analytics.",
  location: "Thrissur, Kerala, India",
  email: "alinmariyajoby@gmail.com",
  phone: "7907639252",
  linkedin: "https://www.linkedin.com/in/alin-mariya-joby-9703373a5",
};

export const featured = [
  {
    name: "SafeSurf",
    subtitle: "OWASP Top 10 web vulnerability assessment system",
    problem: "Checking a website against the OWASP Top 10 is manual and hard to track across cases.",
    solution:
      "A Django web application that assesses websites against the OWASP Top 10 framework and produces reports.",
    contribution: [
      "Built URL checking, result display and case history",
      "Implemented automated report generation",
      "Designed role-based access control for Admin, Cyber Cell and User accounts",
    ],
    tech: ["Python", "Django", "OWASP Top 10"],
  },
  {
    name: "Wi-Fi Deauthentication Attack Detector",
    subtitle: "Python tool for 802.11 wireless traffic",
    problem: "Deauthentication and disassociation floods are visible in packet captures, but hard to spot by eye.",
    solution:
      "A Python tool that parses Wireshark .pcap captures and flags deauthentication and disassociation frames.",
    contribution: [
      "Implemented threshold-based detection logic to flag abnormal activity",
      "Logs timestamp, MAC address, packet count and channel for each detection",
    ],
    tech: ["Python", "Wireshark", ".pcap", "802.11"],
  },
];

export const otherWork = [
  { name: "Second-Hand Goods Exchange Website", text: "Database-driven web platform for listing, browsing and exchanging second-hand goods.", tech: "Python, Django" },
  { name: "Data Analytics Using Power BI", text: "Analyzed datasets and built interactive dashboards showing trends, patterns and insights.", tech: "Power BI" },
  { name: "Seminar: Blockchain-Based Intrusion Detection System (BIDS)", text: "Presented how blockchain technology can be combined with intrusion detection for network security.", tech: "Seminar and research" },
];

export const experience = [
  { role: "Cybersecurity Intern", org: "Cyber Crime Police Station, Irinjalakuda", text: "Gained exposure to cybersecurity concepts, cyber crime investigation and digital investigation processes." },
  { role: "Python Full Stack Development Intern", org: "Atees Industrial Training Institute, Thrissur", text: "Built database-driven web applications using Python and Django." },
  { role: "Data Analytics Intern", org: "Wahy Lab Solutions Ltd.", text: "Analyzed data and created interactive Power BI dashboards and reports." },
];

export const skills = [
  { group: "Security testing", items: ["OWASP Top 10", "Web application vulnerability assessment", "Burp Suite", "OWASP ZAP", "Metasploit", "Vulnerability reporting"] },
  { group: "Network analysis", items: ["Wireshark", "Nmap", "Packet analysis", "Network traffic analysis", "Wi-Fi (802.11) frame analysis", "Network scanning"] },
  { group: "Programming and web", items: ["Python", "SQL", "Django", "HTML", "CSS"] },
  { group: "Data analytics", items: ["Power BI", "Excel", "Data visualization"] },
  { group: "Tools and systems", items: ["Git", "GitHub", "VS Code", "Linux", "Kali Linux"] },
];

export const education = [
  { title: "B.Tech, Computer Science and Engineering (Cyber Security)", place: "Nirmala College of Engineering, Chalakudy (APJ Abdul Kalam Technological University)", meta: "2023 to 2027 (expected), CGPA 6.90" },
  { title: "Class XII", place: "St. Antony's Higher Secondary School, Pudukad", meta: "2021 to 2023, 85%" },
  { title: "Class X", place: "St. Mary's CGHS, Ollur", meta: "2020 to 2021, 96%" },
];

export const certifications = [
  "Introduction to Cybersecurity, Cisco Networking Academy",
  "Ethical Hacking 101: Beginner Guide to Ethical Hacking",
];

export const languages = "English, Malayalam";
